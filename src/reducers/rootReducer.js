import { combineReducers } from "redux";
import { categorysReducer, productsReducer, selectedProductReducer } from "./productsReducer";


export const rootReducer = combineReducers({
    allProducts: productsReducer,
    product: selectedProductReducer,
    allCategorys: categorysReducer,
})