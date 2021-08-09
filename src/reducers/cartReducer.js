import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/action-types";

const initialState = {
    carts: [],
    product: [],
    numberCart: 0
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.quantity === 0) {
                const cart = {
                    id: action.payload.id,
                    quantity: 1,
                    title: action.payload.title,
                    image: action.payload.image,
                    price: action.payload.price
                }
                state.carts.push(cart);
            }
            else {
                let check = false;
                state.carts.map((item, key) => {
                    if (item.id === action.payload.id) {
                        state.carts[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    const cart = {
                        id: action.payload.id,
                        quantity: 1,
                        title: action.payload.title,
                        image: action.payload.image,
                        price: action.payload.price
                    }
                    state.carts.push(cart);
                }
            }
            return {
                ...state,
                // product: [...state.product, action.payload],
                product: action.payload,
                numberCart: state.numberCart + 1
            }


        case REMOVE_FROM_CART:
            return state;

        default:
            return state;
    }
};