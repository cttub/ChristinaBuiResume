import React, { Component } from 'react';
import LandingPage from './LandingPage';
import Contact from './ContactForm';
import MyWork from './MyWork';


import {Route, Link, BrowserRouter} from 'react-router-dom';

import '../App.css';

import Fade from 'react-reveal/Fade';

class MainPage extends Component {
    state = {  } 
    render() { 
        return (
            <>
             
                <div id = "home" className="landingPage"><LandingPage/></div>
                <MyWork/>
                <Fade top>
            
                <Link to = "/ContactMe" 
                onClick={() => {
                                    document.querySelector("html").scrollTo(0,0);
                                    }}
                className = "buttonContainer col-lg-12 col-md-12 col-sm-12">
                <a id = "buttonWork">Work with Me</a></Link>
                </Fade>
                <div className="contactForm" id = "contactMain"><Contact/></div>
            </>
        );
    }
}
 
export default MainPage;