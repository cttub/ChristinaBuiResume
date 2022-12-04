import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import '../../Styles/Artist.css';

import animated from '../../../../Assets/art/OC/Animated.gif';

class One extends Component {
    state = {  } 
    render() { 
        return (
           <div className='whole' id = "experienceArt">

            <Fade bottom><div>
                <p id = "title">Experience</p>
                <p id = "paragraph">My passion for art began when I was around 9 years old. From sixth grade til the end of high school, I was enrolled
                into Talented Art classes, <span>an accelerated curriculum based on the National Standards for Arts Education</span> 
                . My skills and experience ranges from a catoon to realism art style. Currently, my main medium is digital art with an anime-inspired art style. </p> 
            </div></Fade>
            
            <Fade bottom><p id = "link">Since 2009</p></Fade>
                
                
            <div className='wholeCD'>
                
            <Fade left>  <div className='characterDesignDesc'>
                    <p id = "title">Character Design</p>
                    <p id = "paragraph">One thing that keeps me motivated to draw is character creation. I enjoy crafting persoanlities and characteristics
                    within my art. The character you see helps compliment my fun, friendly branding to this website. If you would like a custom character, I would be more than happy
                    to help your ideas come to life!</p>
                   <p id = "link">Not only do I provide character design, I also do logos and animations!</p>
                </div></Fade> 

               <Fade right><div className='OCGallery col-lg-1'>                  
                    <img id = "OCimage" src= {animated} />  
                </div>
                </Fade> 

            </div>


            </div>

       
        );
    }
}
 
export default One;