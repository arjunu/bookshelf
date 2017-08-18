import login from './login.saga';
import loadUserReviewsSaga from './loadUserReviews.saga';
import addReview from './addReview.saga';

export default [login, loadUserReviewsSaga, addReview];