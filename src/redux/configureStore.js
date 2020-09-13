import { combineReducers, createStore } from "redux"
import {Comments} from "./comments";
import {Leaders} from "./leaders";
import {Promos} from "./promos";
import {Dishes} from "./dishes";



export const ConfigureStore=()=>{
    const Store=createStore(
        combineReducers({
            dishes:Dishes,
            promos:Promos,
            leaders:Leaders,
            comments:Comments
        })
    );
    return Store;
}