import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar-container-wrapper">
            <div className="search-bar-container">
            <input type="text" placeholder="Search by country and location"/>
            <button>Search</button>
        </div>
        </div>
    )
}

export default SearchBar
