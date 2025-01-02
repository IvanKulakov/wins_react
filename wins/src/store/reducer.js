import {combineReducers} from "redux";

import itemsReducer from "./items";
import itemReducer from "./item";
import brandsReducer from "./brands";
import tokenReducer from "./token";
import customerReducer from "./user";
import typeReducer from "./type";
import languageReducer from "./language";


const reducer = combineReducers({
    items: itemsReducer,
    item: itemReducer,
    brands: brandsReducer,
    type: typeReducer,
    token: tokenReducer,
    user: customerReducer,
    language: languageReducer,
})


export default reducer;

