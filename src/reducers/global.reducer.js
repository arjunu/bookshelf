import {createReducerFromObject} from "../utils";
import {fromJS} from 'immutable';
import {} from '../actions';
import {ACTION_LOAD_USER_REVIEWS_SUCCESS, ACTION_LOGIN_ERROR, ACTION_LOGIN_SUCCESS} from "../constants";

const initialState = fromJS({
    user: {
        loggedIn: false,
        error: ""
    }
});

const reducerFunctions = {
    [ACTION_LOGIN_SUCCESS]: (state, payload) => state.set("user", fromJS({
        loggedIn: true,
        error: "",
        ...payload
    })),
    [ACTION_LOGIN_ERROR]: (state, payload) => state.setIn(["user", "error"], payload.error),
    [ACTION_LOAD_USER_REVIEWS_SUCCESS]: (state, payload) => state.set("reviews", fromJS(payload.reviews))
};

const globalReducer = createReducerFromObject(reducerFunctions, initialState);

export default globalReducer;