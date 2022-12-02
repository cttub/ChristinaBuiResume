import React, { Component } from 'react';
import LandingPage from './LandingPage';
import Contact from './ContactForm';
import MyWork from './MyWork';

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
                <div className = "buttonContainer col-lg-12 col-md-12 col-sm-12"><a href = "#contactForm" id = "buttonWork">Work with Me</a></div>
                </Fade>
                <div className="contactForm"><Contact/></div>
            </>
        );
    }
}
 
export default MainPage;