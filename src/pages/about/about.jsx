import React from 'react'
import './about.css'
import sasi from '../../components/pic/sasith.jpg'
import { SlSocialFacebook,SlSocialGithub,SlSocialLinkedin,SlEnvolope,SlPhone,SlEnvolopeLetter} from "react-icons/sl";

export default function About() {
  return (
    <div className="mainframe">
      <img id='my_pic' src={sasi}/>
      <div id='contact'>
      <p id='myself'>hi i'm sasith duleepa jayathissa<br/>
      i'm a student of institute of technology University of Moratuwa.
      and also i,m a fullstack web developper. work with node.js and react.js.
      </p>
      
      </div>
      
      <p></p>
    </div>
  )
}
