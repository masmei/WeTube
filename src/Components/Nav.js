import { Link } from "react-router-dom";
import React from "react";
import YoutubeIcon from "../Icons/YoutubeIcon";
import HomeIcon from "../Icons/HomeIcon";
import AboutIcon from "../Icons/AboutIcon";

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="home">
        <YoutubeIcon/>
        WeTube
      </Link>
      <ul>
        <Link to="/"> <HomeIcon/> </Link>
        <Link to="/about"> <AboutIcon/> </Link>
      </ul>
    </nav>
  );
}

// used video for help with navbar: https://www.youtube.com/watch?v=SLfhMt5OUPI -- How To Create A Navbar In React With Routing, by Web Dev Simplified.
