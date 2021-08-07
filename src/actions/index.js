import { ADD_TO_CART, GET_PRODUCTS, GET_PRODUCT_DETAILS, REMOVE_FROM_CART, UPDATE_CART, SEARCH_PRODUCTS } from "./action-types"

// CART

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product,
    };
}

export function removeFromCart(productId) {
    return {
        type: REMOVE_FROM_CART,
        payload: productId,
    };
}

export function updateCart(payload) {
    return {
        type: UPDATE_CART,
        payload
    };
}

// PRODUCT

export function getProducts(products) {
    return {
        type: GET_PRODUCTS,
        payload: products,
    };
}

export function getProductDetails(productId) {
    return {
        type: GET_PRODUCT_DETAILS,
        payload: productId,
    };
}

//Search
// export function searchProduct(product){
//     return{
//         type: SEARCH_PRODUCTS,
//         payload: product,
//     }
// }