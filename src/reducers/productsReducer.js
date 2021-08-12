import { GET_CATEGORYS, GET_PRICE, GET_PRODUCTS, GET_PRODUCT_DETAILS } from "../actions/action-types";

const initialState = {
    products: [],
    categorys: [],
    prices: [],
}

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            };
        }

        default:
            return state;
    }
}

export function selectedProductReducer(state = {}, action) {
    switch (action.type) {
        case GET_PRODUCT_DETAILS: {
            return {
                ...state,
                ...action.payload
            }
        }

        default:
            return state;
    }
}

// Categorys

export function categorysReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORYS:
            return {
                ...state,
                categorys: action.payload
            }

        default:
            return state;
    }
}

// Price
export function pricesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRICE:
            return {
                ...state,
                prices: action.payload
            };

        default:
            return state;
    }
}