import React, { Component } from 'react';

import twins from '../../../../Assets/Double_rabbit.png';
import videoMain from './../../../../Assets/Websites/Club/GentlemenDesktop.mp4';
import Fade from 'react-reveal/Fade';

class One extends Component {
    state = {  } 
    render() { 
        return (
            <div className='whole'>

            <div className = "overView">
                <Fade duration = {1000}><div>
                    <p id = "title">Overview</p>
                    <p id = "subtitle" className='overviewPara'>Improved company’s web presence and recruitment process to enhance clientele with limited resources.
                    </p>
                    <p style={{ color: 'white'}} id = "subtitle">Duration: 2 weeks</p>
                </div></Fade>
            </div>


            <Fade top><div id='problem'>
                <p id = "title">Problem</p>
                <p id = "paragraph">Development was delayed due to lack of information of certain components. In order to 
                provide Sensation's with a proper website, choices had to be made disregrarding requested information.
                </p>
            </div></Fade>
            <div id = 'solution'>
               <Fade left><div className = "text col-lg-6"> 
                    <p id ="title">Solution</p>
                    <p id = "paragraph">An online presence is important for a company's customer traction. Noting key components for the user experience 
                    will provide the best quality of work.
                    </p>
                </div></Fade> 
                <Fade right><div className = "video">
                    <video autoPlay loop muted className = "smallDesktop">
                        <source src = {videoMain}></source>
                    </video>
                </div></Fade>
            </div>

            </div>
        );
    }
}
 
export default One;