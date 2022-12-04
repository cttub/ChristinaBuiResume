import React, { Component } from 'react';
import idle from '../Assets/Girl/Idle.gif';
import '../Styles/About.css';

import Fade from 'react-reveal/Fade';

import {Route, Link, BrowserRouter} from 'react-router-dom';

class About extends Component {
    state = {  } 
    render() { 
        return (
            <div id = "aboutMain">
               
                <div className= "aboutElements col-lg-8">

                <Fade duration = {1500}>
                    <div><img className = "idle col-lg-4 col-md-5 col-sm-11" src = {idle}></img></div>
                </Fade>
                <Fade duration = {2000}>
                    <div className = "aboutMeDesc col-lg-8 col-md-8 col-sm-10">
                        <p id = "title">About Me</p>
                        <p id = "paragraph">I am currently a freelance developer that provides both website design and development. I have worked with small companies to provide websites that enhanced their clientele.
                        </p>
                        <Link to = "/MyWork" id = "link">See my experience</Link>
                    </div>
                </Fade>
                </div>

            </div>
        );
    }
}
 
export default About;