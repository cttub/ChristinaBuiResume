import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Two extends Component {
    state = {  } 
    render() { 
        return (
            <div className='whole'>

                <div className='consider'>
               
                           <Fade top duration = {1000}><p id = 'title'>What do I need to consider?</p></Fade> 
                    <div className = "bubbles">
                          <Fade right duration = {1000}><div id = "question">What information do I need to prioritize?</div></Fade>
                          <Fade left duration = {1000}><div id = "question">How do I design with minimal content?</div></Fade>
                          <Fade right duration = {1000}><div id = "question">How should I implement the application forms?</div></Fade>
                    </div>
                </div>


            </div>
        );
    }
}
 
export default Two;