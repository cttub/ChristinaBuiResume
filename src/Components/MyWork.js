import React, { Component } from 'react';
import '../Styles/myWork.css';
import '../Styles/mediaDevices.css';
import {Router, Link, BrowserRouter} from 'react-router-dom';

import computer from '../Assets/Icons/computerIcon.svg';
import drawing from '../Assets/Icons/drawingIcon.svg';
import person from '../Assets/Icons/personCheck.svg';

import Fade from 'react-reveal/Fade';

class MyWork extends Component {
    state = {  } 
    render() { 
        return (
            <div id = "myWorkCards">
                
                <Fade top><p id ="title">My Recent Work</p></Fade>

                <div id = "cardGroup">

                   <Fade top duration={1000}>
                        <div id = "card" className='col-lg-3 col-md-3 col-sm-12'>
                                <p id = "cardTitle" >Developer - 2021</p>
                                <p id = "cardSubtitle">DinoDoods NFT Startup</p>
                                <p id = "cardDesc">Improved market brand with React design and development.</p>
                                <img className = "cardIcon" src = {computer}></img> 
                                <Link to = "/Dinodoods" 
                                    onClick={() => {
                                    window.scrollTo({top: 0, left: 0, behavior: 'static'});
                                    }}
                                id = "caseButton">Read Case Study</Link>   
                        </div>
                    </Fade>
                   

                    <Fade top duration={1500}>
               
                        <div id = "card" className='col-lg-3 col-md-3 col-sm-12'>
                                <p id = "cardTitle">Artist</p>
                                <p id = "cardSubtitle">Freelance & Hobbyist</p>
                                <p id = "cardDesc">Digital art made for commission to those in need of character design.</p>
                                <img className = "cardIcon" src = {drawing}></img>
                                <Link to = "/Artist" 
                                    onClick={() => {
                                        window.scrollTo({top: 0, left: 0, behavior: 'static'});
                                        }}
                                id = "caseButton">Read Case Study</Link>  
                        </div>
                   
                    </Fade>

                    <Fade top duration={2000}>
                        <div id = "card" className='col-lg-3 col-md-3 col-sm-12'>
                                <p id = "cardTitle">Developer - 2022</p>
                                <p id = "cardSubtitle">Sensation's Gentlemen's Club</p>
                                <p id = "cardDesc">Provided a web application that enhanced client user experience.</p>
                                <img className = "cardIcon" src = {person}></img>
                                <Link to = "/Gentlemen" 
                                    onClick={() => {
                                        window.scrollTo({top: 0, left: 0, behavior: 'static'});
                                        }}
                                id = "caseButton">Read Case Study</Link>   
                        </div>
                    </Fade>
                </div>
                

            </div>
        );
    }
}
 
export default MyWork;