import {call, put, fork, take, cancel} from 'redux-saga/effects';
import request from "../request";
import {ACTION_ADD_REVIEW, URL_ADD_REVIEW} from "../constants";
import {loadUserReviews, onLoadUserReviewsSuccess} from "../actions";

/**
 * Makes GET request
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

export default function* saga() {
    //noinspection InfiniteLoopJS
    while (true)
        yield call(caller, yield take(ACTION_ADD_REVIEW));
}