import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import ItemBuilder from './itemBuilder';
import commentBuilder from './commentBuilder'
import rating from './commentBuilder'

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    ItemBuilder: ItemBuilder,
    comment: commentBuilder,
    rating: rating
});