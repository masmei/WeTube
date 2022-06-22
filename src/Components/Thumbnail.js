import React from 'react'

import {Link}from 'react-router-dom';




export default function Thumbnail({video}) {

 return (
    <div>
        <li> <Link to={`/video/${video.id.videoId}`}><img alt="thumbnails" src={video.snippet.thumbnails.medium.url}/> <h4>{video.snippet.title}</h4></Link></li>
    </div>
  )
}
