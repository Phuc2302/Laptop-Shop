import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/index';
import api from '../services/api';
import ProductItem from './ProductItem';

function ProductList(props) {
    const [categorySelected, setCategorySelected] = useState();
    const [priceSelected, setPriceSelected] = useState();
    const products = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();

    console.log("Price", props.priceId);
    console.log("Category", props.categoryId);

    useEffect(() => {
        fetchProducts();
    }, []);


    useEffect(() => {
        setCategorySelected(props.categoryId);
        setPriceSelected(props.priceId);
    }, [props.categoryId, props.priceId])


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
        const { categoryId, priceId } = product;

        if ((categoryId === categorySelected) || (priceId === priceSelected)) {
            return (
                <ProductItem product={product} />
            );
        }

        else if ((categorySelected || priceSelected) === 0) {
            return (
                <ProductItem product={product} />
            );
        }

        // if (priceId === priceSelected) {
        //     return (
        //         <ProductItem product={product} />
        //     );
        // }

        // else if (priceSelected === 0) {
        //     return (
        //         <ProductItem product={product} />
        //     );
        // }
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