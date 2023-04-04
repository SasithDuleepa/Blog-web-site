import React from 'react'
import { SlSocialGithub , SlSocialInstagram , SlSocialLinkedin , SlSocialGoogle } from "react-icons/sl";
import './footer.css'
export default function Footer() {
  return (
    <div className='footer-main'>
         <div className='footer_name'>Sasith Duleepa</div>
         <div className='social'>
          <SlSocialGithub className='github'/>
          <SlSocialInstagram className='insta'/>
          <SlSocialLinkedin className='linkedin'/>
          <SlSocialGoogle className='google'/>
         </div>
    </div>
  )
}
