import React from 'react';

import { FaCity, FaRegBuilding, FaIndustry, FaTimesCircle } from "react-icons/fa";
import { GiFamilyHouse, GiHouse } from "react-icons/gi";

import ActionButton from '../ActionButton/ActionButton';

import './Category.scss';

export default () => {
    return (
        <div className="category">
           <p className="category-heading">
               What property do you want to sell?
           </p>
           <div className="category-list">
                <ActionButton name="Apartment" btnClass="category-btn">
                   <GiFamilyHouse />
                </ActionButton>
                <ActionButton name="House" btnClass="category-btn">
                   <GiHouse />
                </ActionButton>
                <ActionButton name="Room" btnClass="category-btn">
                   <FaCity />
                </ActionButton>
                <ActionButton name="Land" btnClass="category-btn">
                   <FaIndustry />
                </ActionButton>
                <ActionButton name="Other" btnClass="category-btn">
                   <FaRegBuilding />
                </ActionButton>
           </div>
           <ActionButton>
                   <FaTimesCircle />
             </ActionButton>
        </div>
    )
}