import React, { useState, useEffect } from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import YouTube from "react-youtube";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import VideoPlayer from "./Components/VideoPlayer";

function App() {

  const [videos, setVideos] = useState([]);


  return (
    <div className="grid">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home videos={videos} setVideos={setVideos}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/video/:id" element={<VideoPlayer videos={videos}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
