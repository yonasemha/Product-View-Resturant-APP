import * as actionTypes from './actionTypes';
import axios from 'axios';


export const setItemLists = (listFoods) => {
    return {
        type: actionTypes.DISPLAY_LIST,
        listFoods: listFoods
    }
}

export const displayItemLists = () => {
    return dispatch => {
        axios.get('/getItem')
            .then(response => {
                console.log(response.data);
                dispatch(setItemLists(response.data));
            })
            .catch(error => console.log(error));
    }
}

export const setItemListAfterDelete = (id) => {
    return {
        type: actionTypes.DELETE_ITEM,
        payload: id
    }
}

export const deleteItemById = (id) => {
    return dispatch => {
        console.log("iiiiiiiiiiii", id)
        axios.delete('/deleteItem/' + id)
            .then(response => {
                console.log(response);
                dispatch(setItemListAfterDelete(response.data))
            })
            .catch(error => console.log(error));
    }
}

export const setItemListAfterEdit = (obj) => {
    return {
        type: actionTypes.EDIT_ITEM,
        payload: obj
    }
}

export const updateItem= (obj) => {
    return dispatch => {
        console.log("This is for Update ",obj)
        axios.post('/editItem',obj)
            .then(response => {
                console.log("After Post ",response);
                dispatch(setItemListAfterEdit(response.data))
            })
            .catch(error => console.log(error));
    }
}

