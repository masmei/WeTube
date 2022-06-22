import {Link }from 'react-router-dom';
import React from 'react'

export default function Nav({submit, setSubmit, setInput}) {
  
  const handleClick = (e) => {
    e.preventDefault()
    submit ? setSubmit(false) : setSubmit(true);
    setInput("")
  };

  return( 
    <nav className='nav'>
      <Link onClick={handleClick}to="/" className="home">WeTube</Link>
      <ul>
      <Link to="/"> Home</Link>
        <Link to="/about"> About </Link>
      </ul>
    </nav>
  )
}

 



// used video for help with navbar: https://www.youtube.com/watch?v=SLfhMt5OUPI -- How To Create A Navbar In React With Routing, by Web Dev Simplified. 