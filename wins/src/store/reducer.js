import {combineReducers} from "redux";
<<<<<<< HEAD
import itemsReducer from "./items";
import brandsReducer from "./brands";
import tokenReducer from "./token";
import customerReducer from "./user";
=======
import itemsReducer from "../store/items";
import brandsReducer from "../store/brands";
import typeReducer from "../store/type";
>>>>>>> c835d6522555f88439ecb6ab7927cc19fbd3d853

const reducer = combineReducers({
    items: itemsReducer,
    brands: brandsReducer,
<<<<<<< HEAD
    token: tokenReducer,
    user: customerReducer
=======
    type: typeReducer,
>>>>>>> c835d6522555f88439ecb6ab7927cc19fbd3d853
})


export default reducer;

