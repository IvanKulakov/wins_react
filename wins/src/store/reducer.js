import {combineReducers} from "redux";
import itemsReducer from "../store/items";
import brandsReducer from "../store/brands";
import typeReducer from "../store/type";

const reducer = combineReducers({
    items: itemsReducer,
    brands: brandsReducer,
    type: typeReducer,
})


export default reducer;

