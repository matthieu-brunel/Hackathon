import React from 'react';
import './filter.css';



function Filter({ movies }) {
    return (
        <div className="search desk-12">
            <div className="searchbar desk-3">
                <input type="search" id="site-search" name="q" size="44" placeholder="Search"
                    aria-label="Search through site content" />
                <button>
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
    );
};

export default Filter;