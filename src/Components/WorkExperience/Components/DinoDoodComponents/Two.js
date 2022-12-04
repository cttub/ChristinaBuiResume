import React, { Component } from 'react';
import '../../Styles/DinoDoods.css';
import '../../Work.css';

import desktopPrev from '../../../../Assets/Websites/DinoDoods/Previous/PreviousDinoDoods.mp4';
import mobilePrev from '../../../../Assets/Websites/DinoDoods/Previous/ErrorsMobile.mp4';
import mobileDD from '../../../../Assets/Websites/DinoDoods/DinoDoodsMobile.mp4';
import ddFigma from '../../../../Assets/Websites/DinoDoods/FigmaDinoDoods.png';

import twins from '../../../../Assets/Double_rabbit.png';

import Fade from 'react-reveal/Fade';

class Two extends Component {
    state = {  } 
    render() { 
        return (
            <div className='whole'>

                <div id = "feedback">
                  <Fade><div className='feedbackText'>
                          <p id = "title">Feedback</p>
                          <p id = "paragraph">
                          Many main components hindered the branding of the company.
                          Our main goal is to make sure the website did not lose the attraction of our audience. Analyzing feedback from a user's 
                          perspective deems valueable for our design and development.
                          Feedback given from the community included: inconsistent color pallete, poor mobile UX design, and
                          lack of uniformity.
                          </p>
                      </div></Fade>
                      <div className='feedBackImages'>
                            
                        <Fade left><video autoPlay loop muted className = "smallDesktop" id ="videosFeedback">
                          <source src = {desktopPrev}></source>
                        </video></Fade>

                        <Fade right><video autoPlay loop muted className="smallPhone" id ="videosFeedback">
                          <source src = {mobilePrev}></source>
                        </video></Fade>
                              
                            
                      </div>
                </div>

                <div className='planning'>
                  
                  <Fade top><div className="block col-lg-5 figmaBlock">
                         <img className = "figma block" src = {ddFigma}></img>
                    </div></Fade>

                 
                        <Fade bottom><div className='text'>
                                <p id = "title">Organize</p>
                                <p id = "paragraph">
                             The layout of the website catered towards the most important information
                                our audience would mostly seek out for. The User Experience improved with more interative
                                designs and concepts. The overall mood of the design help the user seek DinoDoods to be  a fun and friendly brand.</p>
                        </div></Fade>
                    </div>


                <div className='Develop'>

                  <Fade left><div className='textDevelop col-lg-5'>
                        <p id = "title">Develop</p>
                        <p id = "paragraph">The last step was to bring our refreshed design to life. Since the old development
                        was created with React and Tailwind, it allowed me to expand my knowledge on those DevTools. Mobile functionality 
                        advanced throughout the development process.</p>
                    </div></Fade>

    
                  <video autoPlay loop muted className='mobileVideo phone'>
                        <source src= {mobileDD}></source>
                 </video>

                </div>


                <Fade bottom><div className='conPara'>
                  <p id = "title">Conclusion</p>
                  <p id = "paragraph">This project challenged my development,
                   design, and analytical skills. Adequate problem solving skills granted
                  the first steps to rebuild and rebrand DinoDood's web experience.
                   I accomplished multiple tasks with the best quality of work within our timeline. I developed a React Application without any prior experience due to adaptability and resilience. Moving forward, I can further provide
                   amazing impacts and skills for future projects and companies. </p>
                  <Fade><img className = "col-lg-3 col-md-4 col-sm-6" id = "twins" src = {twins}></img></Fade>

                </div></Fade>
              


            </div>
        );
    }
}
 
export default Two;