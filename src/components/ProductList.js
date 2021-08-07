import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { getProducts } from '../actions/index'
import { useEffect } from 'react';
import Category from './Category';
import api from '../services/api';
import Search from './Search';

function ProductList() {
    const products = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();
    const [productsSearch, setProductsSearch] = useState(); //1
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
    // console.log('Products', products);
    // đây là cái anh chỉ
    function onSearch(value) {
        console.log(value);
        const foundProductsTemp = [];
        products.map(product => {
            if (product.title.includes(value)) {
                foundProductsTemp.push(product);
            }
        }
        )
        console.log('foundProductsTemp', foundProductsTemp);
        setProductsSearch(foundProductsTemp);
        console.log('products', products);
    }
    //
    return (
        <div>
            <Search onSearch={onSearch} />
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
                                    <Product products={productsSearch} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductList;