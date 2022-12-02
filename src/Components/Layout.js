import React from 'react';
import {Outlet} from "react-router-dom";

import '../App.css';
import '../Styles/mediaDevices.css';

import Navigation from './Navigation';
import DropdownNav from './DropdownNav';



const Layout = () => {
    return(
        <>
            <div className = "navigationBar"><Navigation/></div>
            <div className = "dropDown"><DropdownNav/></div>
            <Outlet/>
        </>
    );
};

export default Layout;