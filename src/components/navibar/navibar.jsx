import React, { useEffect, useState } from 'react'

import ('./navibar.css')

 function Navibar() {
    



    const currentUrl = window.location.href;
    const domainName = new URL(currentUrl).pathname;
    console.log(currentUrl)
    console.log(domainName)




    
  return (
    <nav className='navmain'>
        <p className='navname'>sasith Duleepa</p>
        <div className='links'>
        <a className={domainName ==="/"?"a2":"a1"} href='/' >Home</a>
        <a className={domainName ==="/about"?"a2":"a1"} href='/about'>About</a>
        <a className={domainName ==="/blog"?"a2":"a1"} href='/blog'>Blog</a>
        <a className={domainName ==="/contact"?"a2":"a1"} href='/contact'>contact</a>
        </div>
    </nav>
  )
}
export default Navibar;