import React, { Component } from 'react';
import '../Styles/ContactForm.css';
import bun from '../Assets/Bunny_hop.gif';

import github from '../Assets/Icons/gitWhite.svg';
import linked from '../Assets/Icons/linkedWhite.svg';

import Fade from 'react-reveal/Fade';

class ContactForm extends Component {
  //Need to figure out the triple input 
    state = {  } 
    
    render() { 
        return (
           <div id = "contactForm">
           <Fade left duration = {1500}><div><img className = "bunnyHop" src = {bun}></img></div></Fade>

                <div id = "contactFormInfo">

                
                       <Fade duration = {1500}> <div className = "getInTouch col-lg-12">
                            <p id = "title">Get In Touch</p>
                            <p id = "paragraph">I would love to connect.</p>
                            <a href="mailto:ctbui.uyen@gmail.com" id = "buttonSubmit">Email Me</a>
                            <div id = "iconsBottom">
                            <a target="_blank" href='https://github.com/cttub' id = "iconsBottom"><img src = {github}></img></a>
                        <a target="_blank" href='https://www.linkedin.com/in/cttub/' id = "iconsBottom"><img src = {linked}></img></a>
                            </div>
                            <img id = "bottomBunny" src = {bun}/>
                        </div> </Fade>

                   
                </div>

          

            </div>
            
        );
    }
    
}

 
export default ContactForm;