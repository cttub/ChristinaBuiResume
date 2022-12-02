import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../Styles/DropdownNav.css';
import menu from '../Assets/Icons/menu.svg';
import {Route, Link, BrowserRouter} from 'react-router-dom';


class DropdownNav extends Component {
    state = {  } 
    render() { 
        return (
            <nav className= "DropDownNav">
                <div className='dropDownButton'><img id = "menuicon" src={menu}></img>

                    <div className='dropDown-content'>

                        <Link id = "navbuttonDrop" 
                            onClick={() => {
                                        window.scrollTo({top: 0, left: 0, behavior: 'static'});
                                        }}
                        to = "/">Home</Link>
                        <Link id = "navbuttonDrop" to = "/About">About</Link>
                        <Link id = "navbuttonDrop" to = "/MyWork">My Work</Link>
                        <Link id = "navbuttonDrop" to = "/ContactMe">Contact Me</Link>

                    </div>

                </div>
            </nav>
        );
    }
}
 
export default DropdownNav;