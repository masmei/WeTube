import {Link }from 'react-router-dom';
import React, { Children } from 'react'

export default function Nav() {
  
  return( 
    <nav className='nav'>
      <a href="/" className="home">Home</a>
      <ul>
        <CustomLink href="/home">Home</CustomLink>
        <CustomLink href="/about">About</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({href,children, ...props}) {
  const path = window.location.pathname
  
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>{children}</a>
    </li>
  )
}
 




// used video for help with navbar: https://www.youtube.com/watch?v=SLfhMt5OUPI -- How To Create A Navbar In React With Routing, by Web Dev Simplified. 