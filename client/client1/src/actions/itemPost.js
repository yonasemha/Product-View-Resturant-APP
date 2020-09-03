import * as actionTypes from './actionTypes';
import axios from 'axios';


export const setItemLists = (listFoods)=>{
    return {
        type: actionTypes.POST_ITEM,
        listFoods: listFoods
    }
}

export const addItemToDatabase = (item)=>{
    return  dispatch=>{
        console.log(item);
            axios.post('/getItem',item)
            .then(response=>{
                console.log(response.data);
                dispatch(setItemLists(response.data));
            })
            .catch(error=>console.log(error));
    }
}
