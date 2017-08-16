import {combineReducers} from 'redux';
import globalReducer from './global.reducer';

export default function createReducer() {
    const appReducer = combineReducers({
        global: globalReducer,
    });

    return (state, action) => {
        return appReducer(state, action)
    };
}

