import * as actionTypes from "../actions/actionTypes";

const initialState = {
    listFoods: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DISPLAY_LIST:
            return {
                ...state,
                listFoods: action.listFoods,
            };
        case actionTypes.POST_ITEM:
            return {
                ...state,
                listFoods: [action.listFoods, ...state.listFoods],
            };
        case actionTypes.DELETE_ITEM:
            return {
                ...state,
                listFoods: state.listFoods.filter(item => item._id !== action.payload),
            };
        // case actionTypes.EDIT_ITEM:
        //     return {
        //         ...state,
        //         listFoods: [...state.listFoods, action.payload]
        //     };
        default:
            return state;
    }
};

export default reducer;
