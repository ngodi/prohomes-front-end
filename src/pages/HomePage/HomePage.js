import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './HomePage.scss';
import Property from '../../components/Property/Property';

export default () => {
    return (
        <div className="homepage">
           <Navbar />
           <Property />
           <Footer />
        </div>
    )
}