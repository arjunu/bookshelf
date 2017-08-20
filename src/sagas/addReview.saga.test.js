import saga, {caller} from './addReview.saga';
import {call, put, take} from 'redux-saga/effects';
import {ACTION_ADD_REVIEW, URL_ADD_REVIEW} from "../constants";
import request from "../request";
import {loadUserReviews} from "../actions";

describe('Add Review saga tests', () => {
    it('should watch for ACTION_ADD_REVIEW', () => {
        let generator = saga();
        const takeDescriptor = generator.next();
        expect(takeDescriptor.value).toEqual(take(ACTION_ADD_REVIEW));
    });

    it('caller should make the request and dispatch success action', () => {
        const action = {type: ACTION_ADD_REVIEW, payload: {title: "Chaos Theory", rating: 5, review: "Awesome!"}};
        let generator = caller(action);
        const callDescriptor = generator.next();
        expect(callDescriptor.value).toEqual(call(request, `${URL_ADD_REVIEW}`, {method: "POST", body: {...action.payload}}));
        const putDescriptor = generator.next();
        expect(putDescriptor.value).toEqual(put(loadUserReviews({userId: action.payload.userId})));
    });
});