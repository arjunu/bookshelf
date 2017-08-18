import {
    ACTION_ADD_REVIEW,
    ACTION_LOAD_USER_REVIEWS, ACTION_LOAD_USER_REVIEWS_SUCCESS, ACTION_LOGIN, ACTION_LOGIN_ERROR,
    ACTION_LOGIN_SUCCESS, ACTION_LOGOUT
} from "./constants";

export const login = payload => ({type: ACTION_LOGIN, payload});
export const onLoginSuccess = payload => ({type: ACTION_LOGIN_SUCCESS, payload});
export const onLoginError = payload => ({type: ACTION_LOGIN_ERROR, payload});
export const logout = () => ({type: ACTION_LOGOUT});

export const loadUserReviews = payload => ({type: ACTION_LOAD_USER_REVIEWS, payload});
export const onLoadUserReviewsSuccess = payload => ({type: ACTION_LOAD_USER_REVIEWS_SUCCESS, payload});

export const addReview = payload => ({type: ACTION_ADD_REVIEW, payload});