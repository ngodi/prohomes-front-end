import React from 'react';

import './SearchBar.scss';

export default () => {
    return (
        <div className="searh-bar">
            <span className="search-icon"><i class="fas fa-search"></i></span>
            <input className="search-input" type="text" name="search" value="search property" />
            <span className="settings-icon"><i class="fas fa-sliders-h"></i></span>
        </div>
    )
}