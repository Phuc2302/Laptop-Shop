import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { getProducts } from '../actions/index'
import { useEffect } from 'react';
import Category from './Category';
import api from '../services/api';

function ProductList() {
    const products = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await api
            .get("products")
            .catch((err) => {
                console.log('Err', err);
            });

        dispatch(getProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log('Products', products);

    return (
        <div className="app__container">
            <div className="gird wide" style={{
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <h3>Product list</h3>
                <div className="row sm-gutter app__content">
                    <Category />

                    <div className="col l-10 m-12 c-12" style={{ marginTop: '-10px' }} >
                        <div className="home-product">
                            <div className="row sm-gutter">
                                <Product />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;