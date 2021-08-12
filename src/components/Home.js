// import React, { useState } from 'react';
// import { FaList } from 'react-icons/fa';
// import Category from './Category';
// import ProductList from './ProductList';

// function Home() {

//     const [categoryId, setCategoryId] = useState(0);
//     const [status, setStatus] = useState(0);

//     const handCategoryClick = (idCategory) => {
//         setStatus(idCategory);
//         setCategoryId(idCategory);
//     }

//     return (
//         <div className="app__container">
//             <div className="gird wide"
//                 style={{
//                     maxWidth: '1200px',
//                     margin: '0 auto'
//                 }}>
//                 <div className="row sm-gutter app__content" >
//                     <div className="col l-2 m-0 c-0">
//                         <nav class="category">
//                             <h3 class="category__heading">
//                                 <FaList className="category__heading-icon" />
//                                 Danh mục
//                             </h3>
//                             <ul className="category-list">
//                                 <Category
//                                     status={status}
//                                     handCategoryClick={handCategoryClick}
//                                 />
//                             </ul>
//                         </nav>
//                     </div>
//                     <ProductList categoryId={categoryId} />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;

// import React, { useState } from 'react';
// import { FaList } from 'react-icons/fa';
// import Category from './Category';
// import Header from './Header/Header';

// import ProductList from './ProductList';

// function Home() {
//     const [categoryId, setCategoryId] = useState(0);
//     const [status, setStatus] = useState(0);
//     const [productSearch, setProductSearch] = useState([]);
//     const [isSearch, setIsSearch] = useState(false);

//     function handCategoryClick(idCategory) {
//         setStatus(idCategory);
//         setCategoryId(idCategory);
//     }

//     function onSearchBtn(productSearch) {
//         setProductSearch(productSearch);
//         setIsSearch(true);
//     }

//     return (
//         <>
//             <Header onSearchBtn={onSearchBtn} />
           
//             <div className="app__container">
//                 <div className="gird wide" style={{
//                     maxWidth: '1200px',
//                     margin: '0 auto'
//                 }}>
//                     <SlideArrow/>
//                     <div className="row sm-gutter app__content" >
//                         <div className="col l-2 m-0 c-0">
//                             <nav class="category">
                            
//                                 <h3 class="category__heading">
//                                     <FaList className="category__heading-icon" />
//                                     Danh mục
//                                 </h3>
//                                 <ul className="category-list">
//                                     <Category
//                                         status={status}
//                                         handCategoryClick={handCategoryClick}
//                                     />
//                                 </ul>
//                             </nav>
//                         </div>
//                         <ProductList
//                             categoryId={categoryId}
//                             productSearch={productSearch}
//                             isSearch={isSearch}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Home;

import React, { useState } from 'react';
import { FaList } from 'react-icons/fa';
import Category from './Category';
import Header from './Header/Header';
import SlideArrow from './Header/Slider/Slider';
import Price from './Price';
import ProductList from './ProductList';

function Home() {
    const [categoryId, setCategoryId] = useState(0);
    const [activeId, setActiveId] = useState(0);
    const [activePriceId, setActivePriceId] = useState(0);
    const [priceId, setPriceId] = useState(0);
    const [productSearch, setProductSearch] = useState([]);
    const [isSearch, setIsSearch] = useState(false);

    function handleCategoryClick(idCategory) {
        setActiveId(idCategory);
        setCategoryId(idCategory);
    }

    function handlePriceClick(idPrice) {
        setActivePriceId(idPrice)
        setPriceId(idPrice)
    }

    function onSearchBtn(productSearch) {
        setProductSearch(productSearch);
        setIsSearch(true);
    }

    return (
        <>
            <Header onSearchBtn={onSearchBtn} />
            <div className="app__container">
                <div className="gird wide" style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <SlideArrow/>
                    <div className="row sm-gutter app__content" >
                        <div className="col l-2 m-0 c-0">
                            <nav className="category hide-on-mobile-table">
                                <h3 class="category__heading">
                                    <FaList className="category__heading-icon" />
                                    Category
                                </h3>
                                <ul className="category-list">
                                    <Category
                                        activeId={activeId}
                                        handleCategoryClick={handleCategoryClick}
                                    />
                                </ul>

                                <h3 className="category__heading" style={{ borderTop: "1px solid #dbdbdb" }}>
                                    <FaList className="category__heading-icon" />
                                    Price
                                </h3>
                                <ul className="category-list">
                                    <Price
                                        activePriceId={activePriceId}
                                        handlePriceClick={handlePriceClick}
                                    />
                                </ul>
                            </nav>
                        </div>
                        <ProductList
                            categoryId={categoryId}
                            priceId={priceId}
                            productSearch={productSearch}
                            isSearch={isSearch}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;