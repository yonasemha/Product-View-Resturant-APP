import * as actionTypes from '../actions/actionTypes';


const initialState = {
    comment: [],
    rating: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_COMMENT:
            return {
                ...state,
                comment: action.comments,
            };
        case actionTypes.ADD_COMMENT:
            return {
                ...state,
                comment: [action.payload, ...state.comment],
            };
        case actionTypes.RATE_US:
            return {
                ...state,
                rating: action.rating
            };
        default:
            return state;
    }
};

export default reducer