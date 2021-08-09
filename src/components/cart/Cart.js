import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
    const items = useSelector(state => state.cart)

    console.log("product", items);

    let listCart = [];
    let totalCart = 0;

    Object.keys(items.carts).forEach(function (item) {
        totalCart += items.carts[item].quantity * items.carts[item].price;
        listCart.push(items.carts[item]);
    });

    return (
        <div>
            <h1>Cart</h1>
        </div>
    );
}

export default Cart;