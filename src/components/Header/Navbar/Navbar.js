import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../Login/LoginForm';
import '../Navbar/Navbar.css';

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
                                <li className="active">
                                    <Link to='/'>Home</Link>
                                </li>
                                {
                                    tokenLocalStorage ? (
                                        <li >
                                            <Link to="/logout">Logout</Link>
                                        </li>
                                    ) : (
                                        <li className="">
                                            <Link to="/login">Login</Link>
                                        </li>
                                    )
                                }
                                <div className="shopping-item">
                                    <Link to='/cart'>
                                        Cart -
                                        <span className="cart-amount"> {numberCart}</span>
                                        <i><FaShoppingCart /></i>
                                        <span className="product-count">{numberCart}</span>
                                    </Link>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;