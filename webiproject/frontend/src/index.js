import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; bn 
// import { Register } from './register';
// import Dropdown1 from './dropdown';
import { Navbar } from './navbar';
import { Accordian } from './image';
import { Adds } from './adds';
import LatestProduct from './latestCategory';
import Product3 from './product3';


// import { Dropdown } from 'bootstrap';
import Product from './product';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    {/* <Dropdown1/> */}
    
        <Navbar />
        <Accordian/>
        <Adds/>
        <Product/>
        <LatestProduct/>
        <Product3/>


    </>
);


