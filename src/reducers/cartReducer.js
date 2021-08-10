import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART } from "../actions/action-types";

const initialState = {
    carts: [],
    product: [],
    numberCart: 0
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            // Chưa có sp trong cart => thêm sản phẩm vào cart
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
                // Cart có sp, kiểm tra có trùng hay không
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

        case INCREASE_QUANTITY:
            state.numberCart++;
            state.carts[action.payload].quantity++;

            return {
                ...state
            }

        case DECREASE_QUANTITY:
            let quantity = state.carts[action.payload].quantity;

            if (quantity > 1) {
                state.numberCart--;
                state.carts[action.payload].quantity--;
            }

            return {
                ...state
            }

        case REMOVE_FROM_CART:
            let quantity_ = state.carts[action.payload].quantity;

            return {
                ...state,
                numberCart: state.numberCart - quantity_,
                carts: state.carts.filter(item => {
                    return item.id != state.carts[action.payload].id
                })
            }

        default:
            return state;
    }
};