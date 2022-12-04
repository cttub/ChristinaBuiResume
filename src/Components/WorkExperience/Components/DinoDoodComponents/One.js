import React, { Component } from 'react';
import '../../Styles/DinoDoods.css';
import twins from '../../../../Assets/Double_rabbit.png';

import Fade from 'react-reveal/Fade';

class One extends Component {
    state = {  } 
    render() { 
        return (
            <div className='whole'>

                <Fade duration = {1000}><div>
                <p id = "title">Overview</p>
                <p id = "subtitle" className='overviewPara'>Improving company's audience and brand by re-designing and developing their web application.
                </p>
                <p style={{ color: 'white'}} id = "subtitle">Duration: 2 weeks</p>
                <img width = "250px" id = "twins" src = {twins}></img>
             
                </div></Fade>


               <Fade top><div id = "problem">
                    <p id = "title" className='problemTitle'>Problem</p>
                    <p id = "paragraph">
                    The previous developer had a difficulty meeting our team’s goals and website requirements. 
                    Critics of the website included: inconsistency of color pallete, UI/UX was not mobile friendly 
                    and website attraction did not meet audience standards. Changes were not made until after the 
                    departure of our former developer.
                    </p>
                </div>
                </Fade> 

               <Fade bottom><div id = "solution">
                    <p id = "title">Solution</p>
                    <p id = "paragraph">As an aspiring developer, I took the lead to be our 
                    new web developer and designer. New implementations were made to enhance the website to 
                    better cater to the user. </p>
                    <p id = "smallSubtitle">React | Figma | Procreate</p>
                </div></Fade> 

                <div className='stepsTowards'>
                    <p id = "title">Steps Towards Solution</p>

                    <div id = "circles">
                       <Fade top duration = {1000}><p id = "circle">Feedback</p></Fade>   
                       <Fade top duration = {1500}><p id = "circle">Organize</p></Fade>
                       <Fade top duration = {2000}><p id = "circle">Develop</p></Fade>
                    </div>
                </div>
              
            </div>


            
        );
    }
}
 
export default One;