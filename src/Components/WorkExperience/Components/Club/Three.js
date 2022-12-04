import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import check from './../../../../Assets/Icons/check.svg';
import x from './../../../../Assets/Icons/x.svg';
class Three extends Component {
    state = {  } 
    render() { 
        return (
            <div className='whole'>


                <div className='informationPrio'>
                   <Fade top><p id = "title">What information do I need to prioritize?</p></Fade> 

                    <div className='col-lg-2'> 
                    <p></p></div>
                    <div id = "listed">
                        <div className='listSheet col-lg-3 col-sm-12'>
                            <Fade><div className='List'>
                                <Slide left duration = {1000}><ul><div id = "textInside"><img src={check}></img>Location</div></ul></Slide>
                                <Slide left duration = {1500}><ul><div id = "textInside"><img src={check}></img>Prices</div></ul></Slide>
                                <Slide left duration = {2000}><ul><div id = "textInside"><img src={check}></img>Form</div></ul></Slide>
                                <Slide left duration = {2500}><ul><div id = "textInside"><img src={x}></img>Policy</div></ul></Slide>
                                <Slide left duration = {3000}><ul><div id = "textInside"><img src={x}></img>FAQ</div></ul></Slide>
                            </div></Fade>
                        </div>

                      <Fade bottom> <div className='listedDesc col-lg-5'>

                            <p id = "paragraph">
                            In order to get started with the foundation of the application, 
                            I have to consider what information is accessible. 
                            </p>
                            <p id = "paragraph">
                            Since requesting certain information delayed the timeline, 
                            I have to prioritize important content for improved clientele. 
                            </p>

                        </div></Fade> 
                    </div>           
                </div>


                
            </div>
        );
    }
}
 
export default Three;