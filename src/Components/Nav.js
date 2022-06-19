import {Link }from 'react-router-dom';
import React, { Children } from 'react'

export default function Nav() {
  
  return( 
    <nav className='nav'>
      <a href="/" className="home">WeTube</a>
      <ul>
      <Link to="/"> Home</Link>
        <Link to="/about"> About </Link>
      </ul>
    </nav>
  )
}

 



// used video for help with navbar: https://www.youtube.com/watch?v=SLfhMt5OUPI -- How To Create A Navbar In React With Routing, by Web Dev Simplified. 