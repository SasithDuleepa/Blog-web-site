import React from 'react'
import './blogpost.css'
import backgroundImage from '../pic/react.jpg';


export default function Blogpost(props) {
  return (
    <div className='frame_main_' >

      <h1 className='bloghead'>{props.head}</h1>
      <img className='img' src={props.image}/>
      <p className='info'>{props.info}</p>

        </div>
  )
}
