import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Search.css';

function Search(props) {
    const [searchText, setSearchText] = useState('');
    // const { filter } = props;
    function handleChange(e) {
        setSearchText(e.target.value);
       

    }

    function handleClickSearch() {
        props.onSearch(searchText);
        // props.filter();
        // console.log('filter:' ,props.filter);
        
    }

    return (
        <div className="header__search">
            <a href="" className="header__logo">
                <Link to="/" >
                    <img src="https://www.laptophouse.sg/wp-content/uploads/2019/12/laptophouse4.png" alt="" className="header__logo-link" />
                </Link>
            </a>

            <div className="header__search-input-wrap">
                <input
                    type="text"
                    className="header__search-input"
                    placeholder="Search product"
                    onChange={handleChange}
                />
                <button
                    className="header__search-btn"
                    onClick={handleClickSearch}
                >
                    <FaSearch className="header__search-btn-icon fas fa-search" />
                </button>
            </div>
        </div>
    );
}

export default Search;