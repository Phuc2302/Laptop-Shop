import React, { useState } from 'react';
import { FaList } from 'react-icons/fa';
import Category from './Category';
import ProductList from './ProductList';

function Home() {

    const [categoryId, setCategoryId] = useState(0);
    const [status, setStatus] = useState(0);

    const handCategoryClick = (idCategory) => {
        setStatus(idCategory);
        setCategoryId(idCategory);
    }

    return (
        <div className="app__container">
            <div className="gird wide" style={{
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div className="row sm-gutter app__content" >
                    <div className="col l-2 m-0 c-0">
                        <nav class="category">
                            <h3 class="category__heading">
                                <FaList className="category__heading-icon" />
                                Danh mục
                            </h3>
                            <ul className="category-list">
                                <Category
                                    status={status}
                                    handCategoryClick={handCategoryClick}
                                />
                            </ul>
                        </nav>
                    </div>
                    <ProductList categoryId={categoryId} />
                </div>
            </div>
        </div>
    );
}

export default Home;