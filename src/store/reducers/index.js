import {combineReducers} from "redux";
import {clientReducer} from "./clientReducers";
import {productReducer} from "./productReducers";
import {shoppingCartReducer} from "./shoppingCartReducers";

export const reducers = combineReducers({
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,    
});