import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import './Styles/Gentlemen.css';

import bunnies from '../../Assets/PurpleRabbit.png';

import videoMain from './../../Assets/Websites/Club/GentlemenDesktop.mp4';

import One from './Components/Club/One';
import Two from './Components/Club/Two';
import Three from './Components/Club/Three';
import Four from './Components/Club/Four';

import Contact from './../ContactForm';
import MoreWork from './../MoreWork';

class Gentlemen extends Component {
    state = {  } 
    render() { 
        return (
            <div className = "gentlemenHome">

                <div className = "homepageGentl">
                    <Fade top><p id = "title">Sensations Gentlemen's Club</p></Fade>

                    <div id = "container">
                            <video autoPlay loop muted className='bigDesktop'>
                                <source src = {videoMain}></source>
                            </video>
                    </div>

                    <div className = "ButtonBun">
                       <Fade left><img src = {bunnies} className = "bunnies"></img></Fade> 
                       <Fade bottom><a target="_blank" href = "http://www.sensationsgc.club/" id = "buttonWork">sensationsgc.club</a></Fade>
                        <Fade right><div><img src = {bunnies} className = "bunny2 bunnies"></img></div></Fade>
                    </div>
                </div>


            <One/>
            <Two/>
            <Three/>
            <Four/>
            <MoreWork/>
            
            </div>
        );
    }
}
 
export default Gentlemen;