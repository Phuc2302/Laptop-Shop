import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import { useEffect } from 'react';

const Navbar = () => {
    const { numberCart } = useSelector(state => state.cart)

    const tokenLocalStorage = localStorage.getItem("token");
    console.log(tokenLocalStorage);

    return (
        <nav className='mainmenu-area'>
            <div className="grid wide" style={{
                maxWidth: '1200px',
                margin: '0 auto'
            }}>

                <div className='container'>
                    <div className='row-nav'>
                        <div className="navbar-list">
                            <ul className="nav navbar-nav">

                                <li >
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <a href="shoppage.html">Shop Page</a>
                                </li>
                                <li>
                                    <a href="checkout.html">Shop Page</a>
                                </li>

                                {
                                    tokenLocalStorage ? (
                                        <li >
                                            <Link to="/logout">Logout</Link>
                                        </li>
                                    ) : (
                                        <li className="active">
                                            <Link to="/login">Login</Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="shopping-item">
                            <Link to='/cart'>
                                <a href="cart.html">Cart -
                                    <span className="cart-amount"> {numberCart}</span>
                                    <i><FaShoppingCart /></i>
                                    <span className="product-count">{numberCart}</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar