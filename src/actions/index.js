import { ADD_TO_CART, DECREASE_QUANTITY, GET_CATEGORYS, GET_PRODUCTS, GET_PRODUCT_DETAILS, INCREASE_QUANTITY, REMOVE_FROM_CART } from "./action-types";

// CART

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product,
    };
}

export function increaseQuantity(payload) {
    return {
        type: INCREASE_QUANTITY,
        payload
    }
}

export function decreaseQuantity(payload) {
    return {
        type: DECREASE_QUANTITY,
        payload
    }
}

export function removeFromCart(payload) {
    return {
        type: REMOVE_FROM_CART,
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


// CATEGORY

export function getCategorys(categorys) {
    return {
        type: GET_CATEGORYS,
        payload: categorys
    }
}
