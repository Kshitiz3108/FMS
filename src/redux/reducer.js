import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';

export const initialState={
    dishes:DISHES,
      leaders:LEADERS,
      promos:PROMOTIONS,
      comments:COMMENTS
}

export const Reducer=(state=initialState,action)=>{
    return state;
}