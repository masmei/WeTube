import React, {useState, useEffect} from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import YouTube from 'react-youtube';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';




function App() {
  useEffect (() => {
    // const allVideos = fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&type=video&key=${process.env.REACT_APP_API_KEY}`).then(response => response.json());
    console.log(allVideos)

    
    }
  //   return (
  //     <>
  //       <Nav />
  //       <div className='container'><NavBar /></div>
  //       <Nav />
  //     </>
  //   )
  // })  


  const [input, setInput] = useState('')
  
  return (
  <div>
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
