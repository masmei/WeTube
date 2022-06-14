import logo from './logo.svg';
import './App.css';
import {Route, Router, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {fetch(
  `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
  .then()
)}
    </div>
  );
}

export default App;
