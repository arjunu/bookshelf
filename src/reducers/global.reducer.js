import {createReducerFromObject} from "../utils";
import {fromJS} from 'immutable';
import {} from '../actions';

const initialState = fromJS({
    loggedIn: false
});

const reducerFunctions = {};

const globalReducer = createReducerFromObject(reducerFunctions, initialState);

export default globalReducer;