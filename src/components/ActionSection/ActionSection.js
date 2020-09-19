import React from 'react';
import ActionButton from '../ActionButton/ActionButton';
import { FaSearch, FaRegCommentDots, FaPlusCircle, FaRegBell, FaUser } from "react-icons/fa";
import './ActionSection.scss';

export default () => {
    return (
        <div className="action-section">
           <ActionButton name="Search">
             <FaSearch />
           </ActionButton>
           <ActionButton name="Messages">
             <FaRegCommentDots />
           </ActionButton>
           <ActionButton name="New Post">
             <FaPlusCircle />
           </ActionButton>
           <ActionButton name="Notifications">
             <FaRegBell />
           </ActionButton>
           <ActionButton name="profile">
             <FaUser />
           </ActionButton>
        </div>
    )
  }