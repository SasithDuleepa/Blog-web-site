import React from 'react'
import './contact.css'

import { SlSocialFacebook,SlSocialGithub,SlSocialLinkedin,SlEnvolope,SlPhone,SlEnvolopeLetter} from "react-icons/sl";
export default function Contact() {
  return (
    <div className='contact_main'>
      <div className='contact_frame'>
      <p className='contact_me'>Contact me...</p>
      <div className='contactme'>mobile no. : <a> 077 9090516</a></div>
      <div className='contactme'>e-mail : <a> sasithduleepa@gmail.com</a></div>
      </div>
     
      <div className='social_frame'>
      <p className='follow_me'>Follow me...</p>
      <div className='socialacc'><SlSocialLinkedin/> <a href='www.linkedin.com/in/sasith-duleepa'>linkedin</a> </div>
      <div className='socialacc'><SlSocialGithub/> <a href='https://github.com/SasithDuleepa'>github</a> </div>
      <div className='socialacc'><SlSocialFacebook/> <a href=''>facebook</a> </div>
      </div>
     
    </div>
  )
}
