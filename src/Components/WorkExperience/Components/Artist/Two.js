import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import bear from './../../../../Assets/art/Logo/Bear.png';
import dino from './../../../../Assets/art/Logo/Dino.png';
import loli from './../../../../Assets/art/Logo/LolipopLogo.png';

import animationDino from './../../../../Assets/art/GIFs/dinodoods.mp4';
import fight from './../../../../Assets/art/GIFs/Fight.gif';
class Two extends Component {
    state = {  } 
    render() { 
        return (
            <div className='whole'>

                <Fade><div id = "logos">
                    <p id = "title">Logos</p>
                </div></Fade>

                <div className='logoIcons'>
                <Fade top duration = {1000}> <img className = "col-lg-3 col-md-3" src= {bear} /></Fade>
                <Fade top duration = {1500}> <img className = "col-lg-3 col-md-3" src= {loli} /></Fade>
                <Fade top duration = {2000}> <img className = "col-lg-3 col-md-3" src= {dino} /></Fade>
                </div>
                

                <div id = "animations">

               <Fade><p id = "title">Animations</p></Fade> 
               <Fade bottom> <div id = "animationVid">
                        <video muted controls className = "videoAnimation col-lg-7">
                            <source src = {animationDino}></source>
                        </video>
                        
                    </div></Fade> 

                    <Fade> <div id = "fight">
                    <img className = "fight col-lg-4" src={fight}/>
                    </div></Fade> 
                </div>
            </div>
        );
    } 
}
 
export default Two;