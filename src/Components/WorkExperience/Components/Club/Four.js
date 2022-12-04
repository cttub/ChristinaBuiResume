import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import figmaGen from './../../../../Assets/Websites/Club/GentlemenFigma.png';
import form from './../../../../Assets/Websites/Club/googleFormsVideo.mp4';

import twins from '../../../../Assets/Double_rabbit.png';


class Four extends Component {
    state = {  } 
    render() { 
        return (
            <div className='whole'>

            <div id = "minimal">

              <Fade><p id = 'title'>How do I design with minimal content?</p></Fade>  
               
                <div id = "container">
                <div className='space col-lg-1'><p></p></div>
                      <Fade left><div className='miniDesc col-lg-4'>
                                <p id = "paragraph">Designing was troublesome without dated photographs, 
                                so I opt to using content posted on Facebook.</p>
                                <p id = "paragraph">Since they also posted a professional video, 
                                that was made to be our focal point to attract users. </p>
                                <p id = "paragraph">The rest of the website was designed based on more of a “classy” look and feel.</p>
                        </div></Fade>  
                       <Fade bottom><div className='figmaImage col-lg-5'>
                            <img src= {figmaGen}></img>        
                       </div></Fade> 
                </div>


            </div>


            <div className = "whole implementApp">

                <Fade top><p id = "title">How should I implement the application forms?</p></Fade>
                
                <Fade top> <video autoPlay loop muted className = "bigDesktop">
                    <source src= {form}></source>
                </video></Fade>

                <Fade bottom> <p id = "paragraph">
                Formacade helps the recruitment forms accessible to other employees. With having the online form connect to Google Forms, it can be shared 
                and edited with ease. Implementing Formacade was optimal because it is efficient and did not delay development.
                </p></Fade>
            </div>



            <Fade bottom><div className='conPara'>
                  <p id = "title">Conclusion</p>
                    <p id = "paragraph">Even with minimal content, I was able to design and execute
                    a product that provided great value. Within the first week there were over seven work applications, providing more work diversity. 
                    
                    </p>
                  <img className = "col-lg-3 col-md-4 col-sm-6" id = "twins" src = {twins}></img>

            </div></Fade>
              

            
               
            </div>
        );
    }
}
 
export default Four;