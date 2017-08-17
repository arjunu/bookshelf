import {createReducerFromObject} from "../utils";
import {fromJS} from 'immutable';
import {} from '../actions';
import {ACTION_LOAD_USER_REVIEWS_SUCCESS} from "../constants";

const initialState = fromJS({
    loggedIn: false
});

const reducerFunctions = {
    [ACTION_LOAD_USER_REVIEWS_SUCCESS]: (state, payload) => state.set("reviews", fromJS(payload.reviews))
};

const globalReducer = createReducerFromObject(reducerFunctions, initialState);

export default globalReducer;