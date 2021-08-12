import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';

function Header(props) {
    const products = useSelector(state => state.allProducts.products);
    const [productsSearch, setProductsSearch] = useState();

    function onSearch(value) {
        const foundProductsTemp = [];

        products.map(product => {
            if (product.title.includes(value)) {
                foundProductsTemp.push(product);
            }
        })

        setProductsSearch(foundProductsTemp);
        // console.log(foundProductsTemp);

        props.onSearchBtn(foundProductsTemp);
    }

    return (
        <div className="header">
            <Navbar />
            <Search onSearch={onSearch} />
        </div>
    );
}

export default Header;