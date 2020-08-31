import React from 'react';

import './Property.scss';

export default () => {
    return (
        <div class="property">
            <div className="property-top">
               <img src="https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg" alt="house" width="100%" height="100%"/>
               <span className="size">12 mi</span>
               <span className="favorite"><i class="far fa-heart"></i></span>
            </div>
            <div className="property-bottom">
                <div className="price">$ 335 000</div>
                <div className="title">Beautiful house in modern style</div>
            </div>
        </div>
    )
}