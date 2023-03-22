import React from 'react'
import './about.css'
import sasi from '../../components/pic/sasith.jpg'
import { SlSocialFacebook,SlSocialGithub,SlSocialLinkedin,SlEnvolope,SlPhone,SlEnvolopeLetter} from "react-icons/sl";

export default function About() {
  return (
    <div className="mainframe">
      <img id='my_pic' src={sasi}/>
      <div id='contact'>
      <p id='myself'>Hello, my name is Sasith Duleepa Jayathissa and
       I am a beginner-level full-stack developer currently studying 
       at the Institute of Technology, University of Moratuwa. My
        programming journey began as a front-end web developer using
         React.js, and I have since expanded my skills to include
          Node.js as a back-end developer. Additionally, I have 
          knowledge of the Python language.<br/>
      My goal for the future is to become an excellent software
       engineer, and I am committed to continuously improving my 
       skills and knowledge in the field. Through this blog, I 
       hope to share my experiences and insights with fellow 
       developers and contribute to the larger tech community. 
       Thank you for joining me on this journey.

      </p>
      
      </div>
      
      <p></p>
    </div>
  )
}
