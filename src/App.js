import React, { useState, useEffect } from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import YouTube from "react-youtube";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import VideoPlayer from "./Components/VideoPlayer";
import Error from "./Components/Error";

function App() {

  const [videos, setVideos] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [input, setInput] = useState("");
  const [loadingError, setLoadingError] = useState(false);

  return (
    <div className="grid">
      <Router>
        <Nav setSubmit={setSubmit} setInput={setInput}/>
        <Routes>
          <Route path="/" element={<Home 
          loadingError={loadingError} 
          setLoadingError={setLoadingError} 
          videos={videos} setVideos={setVideos} 
          setSubmit={setSubmit} 
          submit={submit} 
          input={input} 
          setInput={setInput}/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/video/:id" element={<VideoPlayer videos={videos}/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
