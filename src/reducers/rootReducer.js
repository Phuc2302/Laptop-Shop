import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { categorysReducer, pricesReducer, productsReducer, selectedProductReducer } from "./productsReducer";


export const rootReducer = combineReducers({
    allProducts: productsReducer,
    product: selectedProductReducer,
    allCategorys: categorysReducer,
    cart: cartReducer,
    prices: pricesReducer,
})