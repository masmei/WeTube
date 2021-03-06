import YouTube from "react-youtube";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function VideoPlayer({ videos }) {
  let navigate = useNavigate();
  let { id } = useParams();

  const show = videos.find((video) => video.id.videoId === id);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState([]);
  const [comment, setComment] = useState([]);

  const submitComment = (e) => {
    e.preventDefault();
    if (name !== "" && comment !== "") {
      setComments([
        ...comments,
        { name: `${name}`, comment: `${comment}` },
      ]);
    }
    setComment('')
    setName('')
  };

  const showComments = comments.map((entry, i) => {
    return (
      <div key={i}>
        <h3>{entry.name}</h3>
        <p>{entry.comment}</p>
      </div>
    );
  });
  
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className='videoPlayerDiv'>
      <h2>{show.snippet.title}</h2>
      <div className="YTvideo">
      <YouTube videoId={show.id.videoId} />
      </div>
      <p className="YTvideoDesc">{show.snippet.description}</p>
      <aside>
        <button onClick={handleClick} className="backbttn"> Go Back </button>
      </aside>
      <br></br>
      <hr></hr>
      <h3> COMMENTS </h3>
      <div className='formDiv'>
        <form className="form" onSubmit={submitComment}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name..."
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
          <input
            type="text"
            placeholder="Comment..."
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></input>
          <input type="submit" className="commentButton" />
          <ul className="comments">
            <li>
              <p>{showComments}</p>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

