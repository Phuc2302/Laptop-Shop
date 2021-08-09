import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/index';
import api from '../services/api';
import ProductItem from './ProductItem';

function ProductList(props) {
    const [categorySelected, setCategorySelected] = useState();
    const products = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        console.log("id", props.categoryId);
        setCategorySelected(props.categoryId);
    }, [props.categoryId])

    const fetchProducts = async () => {
        const response = await api
            .get("products")
            .catch((err) => {
                console.log('Err', err);
            });

        dispatch(getProducts(response.data));
    };

    const productsTemp = props.isSearch ? props.productSearch : products;

    const renderList = productsTemp.map((product) => {
        const { categoryId } = product;

        if (categoryId === categorySelected) {
            return (
                <ProductItem product={product} />
            );
        }

        else if (categorySelected === 0) {
            return (
                <ProductItem product={product} />
            );
        }
    })

    return (
        <div className="col l-10 m-12 c-12" style={{ marginTop: '-10px' }} >
            <div className="home-product">
                <div className="row sm-gutter">
                    {renderList}
                </div>
            </div>
        </div>
    );
}

export default ProductList;