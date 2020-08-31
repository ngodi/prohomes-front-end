import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './HomePage.scss';
import PropertyList from '../../components/PropertyList/PropertyList';

export default () => {
    return (
        <div className="homepage">
           <Navbar />
           <PropertyList />
           <Footer />
        </div>
    )
}