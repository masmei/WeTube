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
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';



getAPI()
.then((data) => console.log(data))



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
