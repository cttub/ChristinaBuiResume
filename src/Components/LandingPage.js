import React, { Component } from 'react';
import '../Styles/LandingPage.css';
import '../Styles/mediaDevices.css';
import floating from '../Assets/Girl/Floating.png';


import {Route, Link, BrowserRouter} from 'react-router-dom';
import { NavLink } from "react-router-dom";

import Fade from 'react-reveal/Fade';
class LandingPage extends Component {
    state = {  }
    render() { 
        return (
        <div id = "landingMain">

           
            <div className = "innerContainer col-lg-10 col-md-10 col-sm-11">

                <div className= "landingDescription col-lg-6 col-md-7">
                    <p id = "title">Christina Bui</p>
                    <p id = "paragraph">Aspiring developer ready to enhance foundational 
                    skills that provides positive impact within the industry.
                    </p>
                    
                    <div className = "links">
                    <Link id = "link" to = "/About">Get to Know Me!</Link>
                    </div>
                </div>
            <Fade duration = {1700}>
              <div><img className="floatingGirl col-lg-6 col-md-5 col-sm-10" src = {floating}></img></div>
            </Fade>
               
            </div>
            
        </div>
        );
    }
}
 
export default LandingPage;