import React from 'react';
import { Link, Router } from 'react-router-dom'
import './Navbar.css'
export const Navbar = () => {
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
                            {/* <Link to='/'>Home</Link> */}
                            <a href="index.html">Home</a>
                            </li>
                            <li>
                            {/* <Link to='./shopPage'>Shop page</Link> */}
                                <a href="shop.html">Shop page</a>
                            </li>
                            <li>
                            {/* <Link to='./singleProduct'>Single product</Link>     */}
                                <a href="single-product.html">Single product</a>
                            </li>
                            <li>
                            {/* <Link to='./cart'>Cart</Link>     */}
                                <a href="cart.html">Cart</a>
                            </li>
                            <li>
                            {/* <Link to='./checkout'>Checkout</Link>     */}
                                <a href="checkout.html">Checkout</a>
                            </li>
                        </ul>
                    </div>
                    <div className="shopping-item">
                        <a href="cart.html">Cart - <span className="cart-amunt">0</span> <i className="fas fa-shopping-cart"></i> <span className="product-count">0</span></a>
                    </div>
                </div>
            </div>
        </nav>         
    )
}
