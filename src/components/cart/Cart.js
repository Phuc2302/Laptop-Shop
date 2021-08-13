import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Header/Navbar/Navbar';
import './Cart.css';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../actions';
import { Link } from 'react-router-dom';

function Cart() {
    const items = useSelector(state => state.cart)
    const dispatch = useDispatch();

    console.log("product", items.numberCart);

    let listCart = [];
    let totalCart = 0;

    Object.keys(items.carts).forEach(function (item) {
        totalCart += items.carts[item].quantity * items.carts[item].price;
        listCart.push(items.carts[item]);
    });

    function totalPrice(price, quantity) {
        return Number(price * quantity).toPrecision();
    }

    function handleDecreaseQuantity(key) {
        dispatch(decreaseQuantity(key))
    }

    function handleIncreaseQuantity(key) {
        dispatch(increaseQuantity(key));
    }

    function handleRemoveFromCart(key) {
        dispatch(removeFromCart(key));
    }

    return (
        <>
            <Navbar />
            <div className="app__container">
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="row sm-gutter app__content">
                        <div className="c-10 cart">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        listCart.map((item, key) => {
                                            return (
                                                <tr key={key} className="item-cart" >
                                                    <td className="trash" onClick={() => handleRemoveFromCart(key)} ><FaTrash /></td>
                                                    <td className="item-cart--title" >{item.title}</td>
                                                    <td>
                                                        <img src={item.image} style={{ width: '90px', height: '80px' }} />
                                                    </td>
                                                    <td>$ {item.price}</td>
                                                    <td>
                                                        <span className="item-cart--btn"
                                                            onClick={() => handleDecreaseQuantity(key)} >-</span>

                                                        <span className="item-cart--qty">{item.quantity}</span>

                                                        <span className="item-cart--btn"
                                                            onClick={() => handleIncreaseQuantity(key)} >+</span>
                                                    </td>
                                                    <td>$ {totalPrice(item.price, item.quantity)}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    <tr className="total-cart" >
                                        <td colSpan="5" style={{ padding: "20px 30px" }} >Total Carts</td>
                                        <td style={{ textAlign: "center" }} >$ {totalCart}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <Link to="buy" style={{ textDecoration: "none" }}>
                                    <button className="btn btn-next">Buy</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;