import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import InfiniteCarousel from 'react-leaf-carousel';
import ReactDOM from 'react-dom';



import image1 from '../../Assets/art/Girls/AFK.png';
import image2 from '../../Assets/art/Girls/Bunny.png';
import image3 from '../../Assets/art/Girls/Demon.png';
import image4 from '../../Assets/art/Girls/DemonDog.png';
import image5 from '../../Assets/art/Girls/Dragon.png';
import image6 from '../../Assets/art/Girls/Horn.png';
import image7 from '../../Assets/art/Girls/Kaz.png';
import image8 from '../../Assets/art/Girls/Lollipop.png';
import image9 from '../../Assets/art/Girls/Maeve.png';
import image10 from '../../Assets/art/Girls/Mega.png';
import image11 from '../../Assets/art/Girls/Scar.png';
import image12 from '../../Assets/art/Girls/Selfie.png';
import image13 from '../../Assets/art/Girls/Selia_.png';
import image14 from '../../Assets/art/Girls/Shaded.png';
import image15 from '../../Assets/art/Girls/SmallLion.png';
import image16 from '../../Assets/art/Girls/UltraRay.png';

import One from './Components/Artist/One';
import Two from './Components/Artist/Two';
import Contact from './../ContactForm';

import bunnies from '../../Assets/PurpleRabbit.png';

import './Work.css';
import './Styles/Artist.css';
import MoreWork from './../MoreWork';

class Artist extends Component {
    state = {  } 
    
    render() { 
        return (
            <div className='artworkPage'>

                <Fade> <p id = "title">My Artwork</p></Fade> 

               <Fade><InfiniteCarousel className = "gallery"
                breakpoints={[
                {
                    breakpoint: 500,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    },
                },
                ]}
                arrows = {false}
                animationDuration = {600}
                dots={false}
                showSides={true}
                sidesOpacity={.5}
                sideSize={.1}
                slidesToScroll={1}
                slidesToShow={4}
                scrollOnDevice={true}
                autoCycle = {true}
                cycleInterval = {2000}
                pauseOnHover = {false}
                 >

                    <img id = "galleryImg" src = {image1} />
                    <img id = "galleryImg" src = {image2} />
                    <img id = "galleryImg" src = {image3} />
                    <img id = "galleryImg" src = {image4} />
                    <img id = "galleryImg" src = {image5} />
                    <img id = "galleryImg" src = {image6} />
                    <img id = "galleryImg" src = {image7} />
                    <img id = "galleryImg" src = {image8} />
                    <img id = "galleryImg" src = {image9} />
                    <img id = "galleryImg" src = {image10} />
                    <img id = "galleryImg" src = {image11} />
                    <img id = "galleryImg" src = {image12} />
                    <img id = "galleryImg" src = {image13} />
                    <img id = "galleryImg" src = {image14} />
                    <img id = "galleryImg" src = {image15} />
                    <img id = "galleryImg" src = {image16} />

                 </InfiniteCarousel></Fade> 

         
                 <Fade top> <div className='ButtonBun'>
                        <img src = {bunnies} className = "bunnies"></img>
                        <a id = "buttonWork" href = "#experienceArt">Explore More</a>
                        <img src = {bunnies} className = "bunnies bunny2"></img>
                    </div></Fade>


                <One/>
                <Two/>
                <MoreWork/>
                
            </div>
            
        );
        

        
    }
}
 
export default Artist;