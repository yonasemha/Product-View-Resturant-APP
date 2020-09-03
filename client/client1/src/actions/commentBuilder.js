import * as actionTypes from './actionTypes';
import axios from 'axios';


export const addToComment = (comment) => {
    return {
        type: actionTypes.ADD_COMMENT,
        payload: comment
    }
}

export const addComment = (comment) => {
    return dispatch => {
        axios.post('/addComment', comment)
            .then(response => {
                console.log(response.data);
                dispatch(addToComment(response.data));
            })
            .catch(err => console.log(err));
    }
}

export const getComments = (comments) => {
    return {
        type: actionTypes.GET_COMMENT,
        comments: comments
    }
}
export const getAllComment = () => {
    return dispatch => {
        axios.get('/getComment')
            .then(response => {
                console.log(response.data);
                dispatch(getComments(response.data));
            })
            .catch(err => console.log(err));
    }
}

export const getStarRate = (rating) => {
    return {
        type: actionTypes.RATE_US,
        rating: rating
        
    }
}