import {call, put, fork, take, cancel} from 'redux-saga/effects';
import request from "../request";
import {ACTION_LOGIN, URL_LOGIN} from "../constants";
import {onLoginError, onLoginSuccess} from "../actions";

/**
 * Makes GET request
 * @returns {*}
 */
export function* caller(action) {
    let {username, password} = action.payload;

    try {
        const response = yield call(request, `${URL_LOGIN}?username=${username}&&password=${password}`);
        console.log(response);

        if (response && response.length > 0)
            yield put(onLoginSuccess({user: response[0]}));
        else
            yield put(onLoginError({error: "Invalid credentials"}));

    } catch (error) {
        console.error(error);

        yield put(onLoginError({error}));

    }
}

export default function* saga() {
    //noinspection InfiniteLoopJS
    while (true)
        yield call(caller, yield take(ACTION_LOGIN));
}