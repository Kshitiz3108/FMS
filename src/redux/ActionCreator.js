import * as ActionType from "./ActionTypes";

export const addComment=(d,r,a,c)=>({
    type:ActionType.ADD_COMMENT,
    payload:{
        dishId:d,
        rating:r,
        author:a,
        comment:c
    }
});