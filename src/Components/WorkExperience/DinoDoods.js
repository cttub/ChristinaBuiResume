import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import './Work.css';
import './Styles/DinoDoods.css';

import Contact from './../ContactForm';
import bunnies from '../../Assets/PurpleRabbit.png';

import changes from '../../Assets/Websites/DinoDoods/ChangesDinoDoods.mp4';


import One from './Components/DinoDoodComponents/One';
import Two from './Components/DinoDoodComponents/Two';

import MoreWork from './../MoreWork';
class DinoDoods extends Component {
    state = {  } 
    render() { 
        return (
            <div className='dinodoods'>

                <div className='HomePageDinoDoods'>
                
                  <Fade top><p id = "title">DinoDoods NFT Startup</p></Fade> 
                    
                  <div>
                  <Fade top><video autoPlay loop muted className='bigDesktop'>
                            <source src= {changes}></source>
                        </video></Fade>
                    </div>

                   <Fade top> <div className='ButtonBun'>
                        <img src = {bunnies} className = "bunnies"></img>
                        <a target="_blank" id = "buttonWork" href = "https://www.dinodoods.app/">dinodoods.app</a>
                        <img src = {bunnies} className = "bunnies bunny2"></img>
                    </div></Fade>

                    <One/>
                    <Two/>
                    <MoreWork/>
                  
                  
                </div>
              
               
              

            </div>
        
        );
    }
    
}

 
export default DinoDoods;