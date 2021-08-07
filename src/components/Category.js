import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategorys } from '../actions/index';
import api from '../services/api';

function Category(props) {
    const categorys = useSelector(state => state.allCategorys.categorys);

    const renderCategory = categorys.map((category) => {
        const { id, name } = category;

        return (
            <li
                className={id === props.status ? "category-item--active" : "category-item"}
                onClick={() => props.handCategoryClick(id)}>

                <a href="#" className="category-item__link"
                    onClick={() => { }}
                >
                    {name}
                </a>
            </li>
        );
    })

    const dispatch = useDispatch();

    const fetchCategorys = async () => {
        const response = await api
            .get("categorys")
            .catch((err) => {
                console.log("Err", err);
            });

        dispatch(getCategorys(response.data));
    }

    useEffect(() => {
        fetchCategorys();
    }, []);

    // console.log("Category", categorys);

    return <>{renderCategory}</>
}

export default Category;