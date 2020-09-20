import React from 'react';

import './ActionButton.scss';

export default ({children, name, btnClass}) => {
    return(
        <div className= {`action-button ${btnClass}`}>
              {children}
              <span>{name}</span>
        </div>
    )
}