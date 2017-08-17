import {createReducerFromObject} from "../utils";
import {fromJS} from 'immutable';
import {} from '../actions';
import {ACTION_LOAD_USER_REVIEWS_SUCCESS, ACTION_LOGIN_ERROR, ACTION_LOGIN_SUCCESS, ACTION_LOGOUT} from "../constants";

const getInitalState = () => fromJS({
    user: {
        loggedIn: localStorage.getItem("loggedIn"),
        error: ""
    }
});

const reducerFunctions = {
    [ACTION_LOGIN_SUCCESS]: (state, payload) => {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("id", payload.user.id);
        localStorage.setItem("username", payload.user.username);

        return state.set("user", fromJS({
            loggedIn: true,
            error: "",
            ...payload.user
        }))
    },
    [ACTION_LOGIN_ERROR]: (state, payload) => state.setIn(["user", "error"], payload.error),
    [ACTION_LOGOUT]: () => {
        localStorage.clear();
        return getInitalState();
    },
    [ACTION_LOAD_USER_REVIEWS_SUCCESS]: (state, payload) => state.set("reviews", fromJS(payload.reviews))
};

const globalReducer = createReducerFromObject(reducerFunctions, getInitalState());

export default globalReducer;