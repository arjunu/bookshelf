import {createReducerFromObject} from "../utils";
import {fromJS} from 'immutable';
import {ACTION_LOAD_USER_REVIEWS_SUCCESS, ACTION_LOGIN_ERROR, ACTION_LOGIN_SUCCESS, ACTION_LOGOUT} from "../constants";

export const getInitialState = () => fromJS({
    user: {
        loggedIn: localStorage.getItem("loggedIn") === "true",
        id: localStorage.getItem("id"),
        error: ""
    }
});

const reducerFunctions = {
    [ACTION_LOGIN_SUCCESS]: (state, payload) => {
        return state.set("user", fromJS({
            loggedIn: true,
            error: "",
            ...payload
        }))
    },
    [ACTION_LOGIN_ERROR]: (state, payload) => state.setIn(["user", "error"], payload.error),
    [ACTION_LOGOUT]: () => getInitialState(),
    [ACTION_LOAD_USER_REVIEWS_SUCCESS]: (state, payload) => state.set("reviews", fromJS(payload.reviews))
};

const globalReducer = createReducerFromObject(reducerFunctions, getInitialState());

export default globalReducer;