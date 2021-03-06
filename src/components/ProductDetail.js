import React, { useEffect } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, getProductDetails } from '../actions';
import api from '../services/api';
import Navbar from './Header/Navbar/Navbar';

function ProductDetail({ }) {
    const product = useSelector(state => state.product);
    const { image, title, price, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId && productId !== "") {
            fetchProdcutDetail()
        }

        return {}
    }, [productId])

    const fetchProdcutDetail = async () => {
        const response = await api
            .get(`products/${productId}`)
            .catch((err) => {
                console.log('Err', err);
            });

        dispatch(getProductDetails(response.data))
    }

    function handleAddToCart(product) {
        dispatch(addToCart(product));
    }

    return (
        <>
            <Navbar />
            <div className="app__container">
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="row sm-gutter app__content">
                        <div className="c-12 detail-product">
                            <div className="detail-product-item">
                                <div className="detail-product-item__img">
                                    <img src={image} alt={title} />
                                </div>

                                <div className="detail-product-item__info">
                                    <h1>{title}</h1>
                                    <h2>
                                        <span className="detail-product-item__price detail-product-item__price-label">
                                            $ {price}
                                        </span>
                                    </h2>
                                    <p>{description}</p>

                                    <button className="btn detail-product-item__btn" onClick={() => handleAddToCart(product)}>
                                        <FaCartPlus />
                                        <span>Add to cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;