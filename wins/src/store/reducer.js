import {combineReducers} from "redux";
import itemsReducer from "./items";
import brandsReducer from "./brands";
import tokenReducer from "./token";
import customerReducer from "./user";

const reducer = combineReducers({
    items: itemsReducer,
    brands: brandsReducer,
    token: tokenReducer,
    user: customerReducer
})


export default reducer;

