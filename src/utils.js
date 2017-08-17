import {normalize, Schema, arrayOf} from 'normalizr';

/**
 * Returns a reducer function
 * @param reducerFunctions {object} an object where keys are action types and values are functions
 * @param initialState {*}
 * @returns {function(*=, {type: *, payload: *}): *}
 */
export const createReducerFromObject = (reducerFunctions, initialState) => {
    if (!reducerFunctions.default)
        reducerFunctions.default = state => state;

    return (state, {type, payload, input}) => (reducerFunctions[type] || reducerFunctions["default"])(state || initialState, payload, input);
};


export const normalizeItems = (items, id) => normalize(items, arrayOf(new Schema('items', {idAttribute: id || 'id'}))).entities.items;
