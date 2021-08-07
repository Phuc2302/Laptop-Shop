import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer, categorysReducer } from "./productsReducer";


export const rootReducer = combineReducers({
    allProducts: productsReducer,
    product: selectedProductReducer,
    allCategorys: categorysReducer,
})