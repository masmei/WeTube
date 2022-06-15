import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import YouTube from 'react-youtube';
import { getAPI } from '/Users/jcarrera/Desktop/WeTub/src/Api/Fetch.js'



getAPI()
.then((data) => console.log(data))

function App() {
  return (
    <div className="App">
      <p>Hello</p>

    </div>
  );
}

export default App;
