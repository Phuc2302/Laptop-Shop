import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Product(props) {
    const products = useSelector(state => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;

        return (
            <div className="col l-4" key={id}>
                <div className="home-product-item">
                    <Link to={`/product/${id}`} >
                        <a href="">
                            <div className="home-product-item__img" >
                                <img src={image} alt={title} />
                                <h4 className="home-product-item__name">{title}</h4>
                            </div>
                        </a>
                    </Link>

                    <div className="home-product-item__price">
                        <div className="home-product-item__price-current">
                            <span className="home-product-item__price-current-bgr">$ {price}</span>
                        </div>
                    </div>
                    <div className="home-product-item__category">
                        <span className="home-product-item__category-name">{category}</span>
                    </div>
                    <button className="home-product-item-btn">
                        <FaCartPlus />
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
        );
    })

    return <>{renderList}</>
}

export default Product;