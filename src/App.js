import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';

// {fetch(
//   `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
//   // .then((response) => response.json())
//   .then((data) => {
//     console.log(data) 
//   } )
// )}

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
