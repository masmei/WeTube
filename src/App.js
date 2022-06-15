import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import YouTube from 'react-youtube';


const allVideos = fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`).then(response => response.json());

console.log(allVideos)


function App() {
  return (
    <div className="App">
      <p>Hello</p>

    </div>
  );
}

export default App;
