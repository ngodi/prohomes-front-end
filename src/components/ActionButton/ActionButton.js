import React from 'react';

import './ActionButton.scss';

export default ({children, name}) => {
    return(
        <div className="action-button">
              {children}
              <span>{name}</span>
        </div>
    )
}