import React from 'react';

export default () => {
    return(
        <div className="action-buttons">
            <div className="goto-search">
              <i class="fas fa-search"></i>
              <span>Search</span>
            </div>
            <div className="goto-messages">
              <i class="fas fa-search"></i> 
              <span>Messages</span>
            </div>
            <div className="goto-newlisting">
              <i class="fas fa-search"></i>  
            </div>
            <div className="goto-notifications">
              <i class="fas fa-search"></i>
              <span>Notifications</span>
            </div>
            <div className="goto-profile">
              <i class="fas fa-search"></i>  
              <span>Profile</span>
            </div>
        </div>
    )
}