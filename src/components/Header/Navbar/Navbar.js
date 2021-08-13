import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import '../../Login/LoginForm'
const Navbar = () => {
    const { numberCart } = useSelector(state => state.cart)
    const [isLogin, setIsLogin] = useState(false);
    if (!isLogin) {
        return (
            <nav className='mainmenu-area'>
                <div className="grid wide" style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <div className='container'>
                    {/* <div>
                                <Link to='/login'>
                                    <span>Login</span>
                                </Link>
                            </div> */}
                        <div className='row-nav'>
                            <div className="navbar-list">
                                <ul className="nav navbar-nav">
                                    <li className="active">
                                        <Link to='/'>Home</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="shopping-item">
                                <Link to='/cart'>
                                    Cart -
                                        <span className="cart-amount"> {numberCart}</span>
                                        <i><FaShoppingCart /></i>
                                        <span className="product-count">{numberCart}</span>
                                </Link>
                            </div>
                            <div className="Login-item">
                                <Link to='/Login'>
                                    <span style={{marginLeft:950}}>Login
                                    </span>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
    else {
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
                                </ul>
                            </div>
                            <div>
                                <Link to='/login'>Logout</Link>
                            </div>
                            <div className="shopping-item">
                                <Link to='/cart'>
                                    Cart -
                                        <span className="cart-amount"> {numberCart}</span>
                                        <i><FaShoppingCart /></i>
                                        <span className="product-count">{numberCart}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

}
export default Navbar