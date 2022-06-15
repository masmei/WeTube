import React from 'react'
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


const allVideos = fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json());

console.log(allVideos)




function App() {
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
