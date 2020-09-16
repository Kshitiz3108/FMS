import { combineReducers, createStore,applyMiddleware } from "redux"
import {createForms} from 'react-redux-form'
import {Comments} from "./comments";
import {Leaders} from "./leaders";
import {Promos} from "./promos";
import {Dishes} from "./dishes";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { initialFeedback } from "./form";

export const ConfigureStore=()=>{
    const Store=createStore(
        combineReducers({
            dishes:Dishes,
            promos:Promos,
            leaders:Leaders,
            comments:Comments,
            ...createForms({
                feedback:initialFeedback
            })
        }),

        applyMiddleware(thunk,logger)
    );
    return Store;
}