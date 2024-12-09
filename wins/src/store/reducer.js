import {combineReducers} from "redux";
import itemsReducer from "../store/items";
import brandsReducer from "../store/brands";

const reducer = combineReducers({
    items: itemsReducer,
    brands: brandsReducer,
})


export default reducer;

