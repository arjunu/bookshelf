import {call, put, take} from 'redux-saga/effects';
import request from "../request";
import {ACTION_ADD_REVIEW, URL_ADD_REVIEW} from "../constants";
import {loadUserReviews} from "../actions";

/**
 * Makes POST request
 * @returns {*}
 */
export function* caller(action) {
    try {
        yield call(request, `${URL_ADD_REVIEW}`, {method: "POST", body: {...action.payload}});
        yield put(loadUserReviews({userId: action.payload.userId}));

    } catch (error) {
        console.error(error);
    }
}

/**
 * Watches for ACTION_ADD_REVIEW and calls caller
 */
export default function* saga() {
    //noinspection InfiniteLoopJS
    while (true)
        yield call(caller, yield take(ACTION_ADD_REVIEW));
}