import React from 'react';
import { FaList } from 'react-icons/fa';

function Category(props) {
    return (
        <div className="col l-2 m-0 c-0">
            <nav class="category">
                <h3 class="category__heading">
                    <FaList className="category__heading-icon" />
                    Danh mục
                </h3>

                <ul class="category-list">
                    {/* <!-- <li class="category-item category-item--active">
                                    <a href="#" class="category-item__link">Sản phẩm
                                    </a>
                                </li> --> */}
                    <li className="category-item category-item--active">
                        <a href="#" className="category-item__link">PC
                        </a>
                    </li>
                    <li className="category-item">
                        <a href="#" className="category-item__link">Lap top
                        </a>
                    </li>
                    <li className="category-item">
                        <a href="#" className="category-item__link">Linh kiện
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Category;