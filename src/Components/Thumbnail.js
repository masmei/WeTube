import React from 'react'
import {Link, Routes, Route, Router }from 'react-router-dom';



export default function Thumbnail({video}) {

  return (
    <div>
        <li> <Link to={`/video/${video.id.videoId}`}><img alt="thumbnails" src={video.snippet.thumbnails.default.url}/> <h3>{video.snippet.title}</h3><p>{video.id.videoId}</p></Link></li> 
    </div>
  )
}
