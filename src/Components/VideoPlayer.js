import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function VideoPlayer({videos}) {
    let navigate = useNavigate
    let { id } = useParams()

const show = videos.find((video) => video.id.videoId === id)

  return (
    <div>{console.log(show)} VideoPlayer</div>
    
  )
}
