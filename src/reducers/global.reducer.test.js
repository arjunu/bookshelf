import globalReducer, {getInitialState} from './global.reducer';
import {fromJS} from 'immutable';
import {logout, onLoadUserReviewsSuccess, onLoginError, onLoginSuccess} from "../actions";

describe('Global reducer tests', () => {
    test('ACTION_LOGIN_SUCCESS saves user details in store', () => {
        const state = getInitialState();

        const payload = {
            id: 1,
            name: "Arjun",
            username: "arjun"
        };

        const expected = state.set("user", fromJS({
            loggedIn: true,
            error: "",
            ...payload
        }));

        expect(globalReducer(state, onLoginSuccess(payload))).toEqual(expected);
    });


    test('ACTION_LOGIN_ERROR sets error in store', () => {
        const state = getInitialState();

        const payload = {
            error: "Invalid Credentials"
        };

        const expected = state.setIn(["user", "error"], payload.error);

        expect(globalReducer(state, onLoginError(payload))).toEqual(expected);
    });

    test('ACTION_LOGOUT returns initial state', () => {
        const expected = getInitialState();

        expect(globalReducer(undefined, logout())).toEqual(expected);
    });

    test('ACTION_LOAD_USER_REVIEWS_SUCCESS saves user reviews in store', () => {
        const state = getInitialState().set("user", fromJS({
            loggedIn: true,
            error: "",
            id: 1,
            name: "Arjun",
            username: "arjun"
        }));

        const payload = {
            reviews: [{
                "id": 1,
                "userId": 1,
                "title": "Game Of Thrones",
                "rating": 5,
                "review": "The read was amazing, as well as overwhelming. I could not even anticipate the events that unfolded in the end, and I'm still in shock and awe of it all."
            }, {
                "id": 2,
                "userId": 1,
                "title": "The Time Machine",
                "rating": 4,
                "review": "Reading this book has been an eye-opener and is far from what I expected or had in mind."
            }]
        };

        const expected = state.set("reviews", fromJS(payload.reviews));

        expect(globalReducer(state, onLoadUserReviewsSuccess(payload))).toEqual(expected);
    });
});
