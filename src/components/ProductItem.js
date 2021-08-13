import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions';

function ProductItem({ product }) {
    const dispatch = useDispatch();

    function handleAddToCart(product) {
        dispatch(addToCart(product))
    }
    return (
        <div className="col l-4" key={product.id} >
            <div className="home-product-item">
                <Link to={`/product/${product.id}`} >
                    <a href="">
                        <div className="home-product-item__img" >
                            <img src={product.image} alt={product.title} />
                            <h4 className="home-product-item__name">{product.title}</h4>
                        </div>
                    </a>
                </Link>

                <div className="home-product-item__price">
                    <div className="home-product-item__price-current">
                        <span className="home-product-item__price-current-bgr">$ {product.price}</span>
                    </div>
                </div>
                <div className="home-product-item__category">
                    <span className="home-product-item__category-name">{product.category}</span>
                </div>
                <button
                    className="home-product-item-btn"
                    onClick={() => handleAddToCart(product)}
                >
                    <FaCartPlus />
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    );
}

export default ProductItem;