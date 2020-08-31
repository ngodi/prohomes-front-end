import React from 'react';

import Property from '../Property/Property';
import './PropertyList.scss';

const properties = new Array(20).fill(0);
export default () => {
    return (
        <div class="property-list">
          {
              properties.map((property, i) => {
                  return(
                      <Property key={i} />
                  )
              })
          }
        </div>
    )
}