import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
const Navbar = () => {
    const { numberCart } = useSelector(state => state.cart)
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
<<<<<<< HEAD
                                <li>
                                    <Link to='/login'>Login</Link>
=======

                          
                            <ul className="nav navbar-nav hide-on-mobile">

                                <li className="active">
                                    <Link to='/'>Home</Link>
                                </li>
                              

                                </li> */}
                                <li>
                                    <a href="shoppage.html">Shop Page</a>
>>>>>>> c87a212a157a2e2d9afdd8dea9028e71a8d5b3ba
                                </li>
                                <li className="active">
                                    <Link to='/'>Home</Link>
                                </li>

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