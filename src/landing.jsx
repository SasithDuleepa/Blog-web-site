import React from 'react';
import './landing.css';
import Wallpaper from './wallpaper.jpg';
import Mypic from './mypic.png';
import BasicExample from './components/card/card';
import Blog from './components/blog-bar/blog';
import Footer from './components/Footer/footer';



function Landing(props) {
    return (
        <div className='Landing'>
        <div className='container_1'>
            <img className='cover' src={Wallpaper} alt=''/>
          <div className='child_0'>
              <img className='mypic' src={Mypic} alt='pic'/>
              <div className='child_1'>
                <p className='myintro'>Hi There, I'm</p>
                <p className='name'>SASITH DULEEPA</p>
                <p className='intro'>Web Developer</p>
              </div>
            </div>
           
            </div>
            

        
            <Blog/>
            



           

            
        </div>
    );
}

export default Landing;