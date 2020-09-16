import * as ActionTypes from "./ActionTypes";
import { DISHES } from '../shared/dishes';

export const addComment=(d,r,a,c)=>({
    type:ActionTypes.ADD_COMMENT,
    payload:{
        dishId:d,
        rating:r,
        author:a,
        comment:c
    }
});

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});