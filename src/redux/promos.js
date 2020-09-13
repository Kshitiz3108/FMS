import { actions } from 'react-redux-form';
import {PROMOTIONS} from '../shared/promotions';

export const Promos=(state=PROMOTIONS,action)=>{
    switch(action.type){
        default:
            return state;
    }
}