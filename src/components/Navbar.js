import React from 'react';
import { Link, Router } from 'react-router-dom'
import './Navbar.css'
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className='mainmenu-area'>
            <div className='container'>
                <div className='row'>
                    <div className="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="shop.html">Shop page</a>
                            </li>
                            <li>
                                <a href="checkout.html">Checkout</a>
                            </li>
                            {/* <Link to='./cart'>Cart</Link> */}
                            {/* <Link to='./checkout'>Checkout</Link> */}
                            {/* <Link to='./singleProduct'>Single product</Link>  */}
                            {/* <Link to='./shopPage'>Shop page</Link> */}
                            {/* <Link to='/'>Home</Link> */}
                        </ul>
                    </div>
                    <div className="shopping-item">
                        <a href="cart.html">Cart - <span className="cart-amunt">0</span> <i><FaShoppingCart /></i> <span className="product-count">0</span></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar