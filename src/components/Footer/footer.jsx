import React from 'react'
import { SlSocialFacebook,SlSocialGithub,SlSocialLinkedin,SlEnvolope,SlPhone,SlEnvolopeLetter} from "react-icons/sl";
import './footer.css'
export default function Footer() {
  return (
    <div>
         <div className='footer'>
         <div id='company'>@ sasith duleepa jayathissa</div>


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

                
            </div>
    </div>
  )
}
