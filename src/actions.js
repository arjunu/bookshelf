import {ACTION_LOAD_USER_REVIEWS, ACTION_LOAD_USER_REVIEWS_SUCCESS} from "./constants";

export const loadUserReviews = payload => ({type: ACTION_LOAD_USER_REVIEWS, payload});
export const onLoadUserReviewsSuccess = payload => ({type: ACTION_LOAD_USER_REVIEWS_SUCCESS, payload});