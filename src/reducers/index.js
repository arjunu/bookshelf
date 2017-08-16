import {combineReducers} from 'redux';

export default function createReducer() {
    const appReducer = combineReducers({});

    return (state, action) => {
        return appReducer(state, action)
    };
}

