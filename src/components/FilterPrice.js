import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPrice } from '../actions';
import api from '../services/api';

function FilterPrice(props) {
    const prices = useSelector(state => state.prices.prices)
    const dispatch = useDispatch();

    useEffect(() => {
        fetchPrices();
    }, []);

    const fetchPrices = async () => {
        const response = await api
            .get("price")
            .catch((err) => {
                console.log("Err", err);
            });

        dispatch(getPrice(response.data));
    }

    const renderPrice = prices.map((price) => {
        const { id, text } = price

        return (
            <li
                className={id === props.activePriceId ? "category-item--active" : "category-item"}
                onClick={() => props.handlePriceClick(id)}
            >

                <a href="#" className="category-item__link">
                    {text}
                </a>
            </li>
        )
    })

    return <>{renderPrice}</>
}

export default FilterPrice;