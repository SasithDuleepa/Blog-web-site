import React from 'react';
import './landing.css';
import Wallpaper from './wallpaper.jpg';
import Mypic from './mypic.png';
import BasicExample from './components/card/card';

import { SlSocialFacebook,SlSocialGithub,SlSocialLinkedin,SlEnvolope,SlPhone,SlEnvolopeLetter} from "react-icons/sl";

function Landing(props) {
    return (
        <div>
       
            <img className='cover' src={Wallpaper} alt=''/>
            <div className='name'>SASITH <br/> DULEEPA</div>
            <img className='mypic' src={Mypic} alt='pic'/>
            

            <div className='info'>
                <div className='frame_1'>
                    <p className='a'> name : J A S D JAYATHISSA</p><br/>
                    <p className='a'> DOB : 1997/12/08</p><br/>
                    <p className='a'> EDUCATION:</p><br/>
                </div>
                <div className='frame_2'>
                    <p className='a'>i'm a IT student. i'm study in institute of technology university of moratuwa.</p>
                </div>
            </div>
            <div id="card_view">
                <div id='card_1' style={{margin:"35px"}}>
                <BasicExample/>
                </div>
                <div id='card_2' style={{margin:"35px"}}>
                <BasicExample/>
                </div>
                <div id='card_2' style={{margin:"35px"}}>
                <BasicExample/>
                </div>
                <div id='card_2' style={{margin:"35px"}}>
                <BasicExample/>
                </div>
            </div>



            <div className='footer'>
                <div className='social'>
                <div id='item'><SlSocialFacebook/><a href=''> facebook</a></div>
                <div id='item'><SlSocialGithub/><a href=''> github</a></div>
                <div id='item'><SlSocialLinkedin/><a href=''> linked in</a></div>
                
                </div>

                <div className='contact'>
                <div id='item'><SlPhone/> 0779092516</div>
                <div id='item'><SlEnvolopeLetter/> no.870,unagalawehera, polonnaruwa</div>                
                <div id='item'><SlEnvolope/> duleepajayathissa@gmail.com</div>
                </div>

                <div id='company'>@ sasith duleepa jayathissa</div>
            </div>

            
        </div>
    );
}

export default Landing;