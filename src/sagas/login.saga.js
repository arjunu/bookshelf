import {call, put, take} from 'redux-saga/effects';
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

        //if response in empty then credentials are valid
        if (response && response.length > 0) {
            const {id, username, name} = response[0];

            //save user details in local storage
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("id", id);
            localStorage.setItem("username", username);
            yield put(onLoginSuccess({id, username, name}));
        }
        else
            yield put(onLoginError({error: "Invalid credentials"}));

    } catch (error) {
        console.error(error);

        yield put(onLoginError({error}));
    }
}

/**
 * Watches for ACTION_LOGIN and calls caller
 */
export default function* saga() {
    //noinspection InfiniteLoopJS
    while (true)
        yield call(caller, yield take(ACTION_LOGIN));
}