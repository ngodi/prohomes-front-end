import React, { useState, useRef, useCallback } from "react";
import ReactMapGL from "react-map-gl";

import Geocoder from 'react-map-gl-geocoder';
import MainHeading from '../MainHeading/MainHeading';

import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import './AddressPicker.scss';

const MAPBOXAPITOKEN = 'pk.eyJ1IjoiYWxiZXJ0bmdvZGkiLCJhIjoiY2tmY2U3dWU5MTc5YTJ3cHhhbXZ6cm4wcSJ9.9SAbpIdKNQJEOM5jHCj6Zw';

export default () => {
    const [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      });
      
      const mapRef = useRef();
      const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
      );

      const handleGeocoderViewportChange = useCallback(
        (newViewport) => {
          const geocoderDefaultOverrides = { transitionDuration: 1000 };
           console.log(viewport)
          return handleViewportChange({
            ...newViewport,
            ...geocoderDefaultOverrides
          });
        },
        [handleViewportChange]
      );
        return (
            <div className="address-picker">
                 <MainHeading heading="Specify address" />
                 <div className="map">
                 <ReactMapGL
                   ref={mapRef}
                   width="90vw"
                   height="70vh"
                   {...viewport}
                   onViewportChange={handleViewportChange}
                   mapStyle="mapbox://styles/albertngodi/ckfcknuli4it719pil1eucq6v"
                   mapboxApiAccessToken= {MAPBOXAPITOKEN}
                   >
                 <Geocoder 
                   position='top-left' 
                   onViewportChange={handleGeocoderViewportChange}
                   mapRef={mapRef}  
                   mapboxApiAccessToken= {MAPBOXAPITOKEN}
                   />
                 </ReactMapGL>
                 </div>
                 <button className="btn-default">Next</button>
            </div>
            
        )
}
