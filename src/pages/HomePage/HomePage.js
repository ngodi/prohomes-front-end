import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './HomePage.scss';
import PropertyList from '../../components/PropertyList/PropertyList';
import SearchBar from '../../components/SearchBar/SearchBar';
import ActionButtons from '../../components/ActionButtons/ActionButtons';

export default () => {
    return (
        <div className="homepage">
           <Navbar />
           <SearchBar />
           <PropertyList />
           <ActionButtons />
           <Footer />
        </div>
    )
}