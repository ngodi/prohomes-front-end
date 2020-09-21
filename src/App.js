import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import Category from './components/Category/Category';
import AddressPicker from './components/AddressPicker/AddressPicker';

function App() {
  return (
    <div className="App">
       <Route exact path='/' component={HomePage} />
       <Route path='/category-select' component={Category} />
       <Route path='/address-select' component={AddressPicker} />
    </div>
  );
}

export default App;
