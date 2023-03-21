import React from 'react';
import './landing.css';
import Wallpaper from './wallpaper.jpg';
import Mypic from './mypic.png';
import BasicExample from './components/card/card';
import Blog from './components/blog-bar/blog';
import Footer from './components/Footer/footer';



function Landing(props) {
    return (
        <div className='background'>
        <div className='Header'>
            <img className='cover' src={Wallpaper} alt=''/>
            <div className='cover_items' >
            <img className='mypic' src={Mypic} alt='pic'/>
            <div style={{display:"block"}}>
            <p className='myintro'>Hi There, I'm</p>
            <div className='name'>SASITH DULEEPA</div>
            <p className='intro'>Web Developer</p>
            </div>
            </div>
            </div>

            {/* <div className='info'>
                <div className='frame_1'>
                    <p className='a'> name : J A S D JAYATHISSA</p><br/>
                    <p className='a'> DOB : 1997/12/08</p><br/>
                    <p className='a'> EDUCATION:</p><br/>
                </div>
                <div className='frame_2'>
                    <p className='a'>i'm a IT student. i'm study in institute of technology university of moratuwa.</p>
                </div>
            </div> */}
            <Blog/>
            



           

            
        </div>
    );
}

export default Landing;