import {call, put, take} from 'redux-saga/effects';
import request from "../request";
import {ACTION_LOAD_USER_REVIEWS, URL_LOAD_USER_REVIEWS} from "../constants";
import {onLoadUserReviewsSuccess} from "../actions";

/**
 * Makes GET request
 * @returns {*}
 */
export function* caller(action) {
    let {userId} = action.payload;

    try {
        const response = yield call(request, `${URL_LOAD_USER_REVIEWS}?userId=${userId}`);

        yield put(onLoadUserReviewsSuccess({reviews: response}));

    } catch (error) {
        console.error(error);
    }
}

/**
 * Watches for ACTION_LOAD_USER_REVIEWS and calls caller
 */
export default function* saga() {
    //noinspection InfiniteLoopJS
    while (true)
        yield call(caller, yield take(ACTION_LOAD_USER_REVIEWS));
}