import React, { Component } from 'react';
import '../Styles/Navigation.css';
import github from '../Assets/Icons/github.svg';
import linked from '../Assets/Icons/linked.svg';
import githubHover from '../Assets/Icons/github.svg';

import {Route, Link, BrowserRouter} from 'react-router-dom';
import { NavLink } from "react-router-dom";

class Navigation extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <nav className = "NavigationMain">

                    <div className = "leftNavButtons">

                        <Link id = "navbutton" 
                        onClick={() => {
                                        window.scrollTo({top: 0, left: 0, behavior: 'static'});
                                        }}
                        to = "/">Home</Link>
                        <Link id = "navbutton" to = "/About">About</Link>
                        <Link id = "navbutton" to = "/MyWork">My Work</Link>
                        <Link id = "navbutton" to = "/ContactMe">Contact Me</Link>

                    
                    </div>

                    <div className = "rightNavButtons">
                        <a target="_blank" href='https://github.com/cttub' id = "icon"><img src = {github}></img></a>
                        <a target="_blank" href='https://www.linkedin.com/in/cttub/' id = "icon"><img src = {linked}></img></a>
                    </div>

                </nav>
            </>
        );
    }
}
 
export default Navigation;