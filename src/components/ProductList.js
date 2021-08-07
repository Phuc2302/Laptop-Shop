import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../actions/index';
import api from '../services/api';
import Product from './Product';

function ProductList(props) {
    // const products = useSelector(state => state.allProducts.products);
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


    return (
        <div className="col l-10 m-12 c-12" style={{ marginTop: '-10px' }} >
            <div className="home-product">
                <div className="row sm-gutter">
                    <Product categoryId={props.categoryId} />
                </div>
            </div>
        </div>
    );
}

export default ProductList;