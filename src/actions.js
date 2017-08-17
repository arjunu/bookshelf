import {
    ACTION_LOAD_USER_REVIEWS, ACTION_LOAD_USER_REVIEWS_SUCCESS, ACTION_LOGIN, ACTION_LOGIN_ERROR,
    ACTION_LOGIN_SUCCESS
} from "./constants";

export const login = payload => ({type: ACTION_LOGIN, payload});
export const onLoginSuccess = payload => ({type: ACTION_LOGIN_SUCCESS, payload});
export const onLoginError = payload => ({type: ACTION_LOGIN_ERROR, payload});

export const loadUserReviews = payload => ({type: ACTION_LOAD_USER_REVIEWS, payload});
export const onLoadUserReviewsSuccess = payload => ({type: ACTION_LOAD_USER_REVIEWS_SUCCESS, payload});