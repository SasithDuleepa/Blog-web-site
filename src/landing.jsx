import React from 'react';
import './landing.css';
import Wallpaper from './wallpaper.jpg';
import Mypic from './mypic.png';

import { SlSocialFacebook,SlSocialGithub,SlSocialLinkedin,SlEnvolope,SlPhone,SlEnvolopeLetter} from "react-icons/sl";

function Landing(props) {
    return (
        <div>
       
            <img className='cover' src={Wallpaper}/>
            <a className='name'>SASITH <br/> DULEEPA</a>
            <img className='mypic' src={Mypic}/>
            

            <div className='info'>
                <div className='frame_1'></div>
                <div className='frame_2'></div>
            </div>



            <div className='footer'>
                <div className='social'>
                <div id='item'><SlSocialFacebook/>facebook</div>
                <div id='item'><SlSocialGithub/>github</div>
                <div id='item'><SlSocialLinkedin/>linked in</div>
                
                </div>

                <div className='contact'>
                <div id='item'><SlPhone/>mobile no.</div>
                <div id='item'><SlEnvolopeLetter/>address</div>                
                <div id='item'><SlEnvolope/>mail</div>
                </div>

                <div id='company'>@ sasith duleepa</div>
            </div>

            
        </div>
    );
}

export default Landing;