// import React, { useEffect } from 'react';
// import { FaList } from 'react-icons/fa';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCategorys } from '../actions';
// import api from '../services/api';

// function Category(props) {
//     const categorys = useSelector(state => state.allCategorys.categorys);

//     const renderCategory = categorys.map((category) => {
//         const { id, name } = category;

//         return (
//             <li
//                 className={id === props.status ? "category-item--active" : "category-item"}
//                 onClick={() => props.handCategoryClick(id)}>

//                 <a href="#" className="category-item__link"
//                 >
//                     {name}
//                 </a>
//             </li>
//         );
//     })

//     const dispatch = useDispatch();

//     const fetchCategorys = async () => {
//         const response = await api
//             .get("categorys")
//             .catch((err) => {
//                 console.log("Err", err);
//             });

//         dispatch(getCategorys(response.data));
//     }

//     useEffect(() => {
//         fetchCategorys();
//     }, []);

//     return <>{renderCategory}</>
// }

// export default Category;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategorys } from '../actions/index';
import api from '../services/api';

function Category(props) {
    const categorys = useSelector(state => state.allCategorys.categorys);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchCategorys();
    }, []);

    const fetchCategorys = async () => {
        const response = await api
            .get("categorys")
            .catch((err) => {
                console.log("Err", err);
            });

        dispatch(getCategorys(response.data));
    }

    const renderCategory = categorys.map((category) => {
        const { id, name } = category;

        return (
            <li
                className={id === props.activeId ? "category-item--active" : "category-item"}
                onClick={() => props.handleCategoryClick(id)}>

                <a href="#" className="category-item__link">
                    {name}
                </a>
            </li>
        );
    })

    // console.log("Category", categorys);

    // console.log("Category", categorys);

    return <>{renderCategory}</>
}

export default Category;