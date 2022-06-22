import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import ErrorPage from "./ErrorPage";
import Modal from "./Modal";

import Thumbnail from "./Thumbnail";

export default function Home({ videos, setVideos, submit, setSubmit, input, setInput }) {
  const [loadingError, setLoadingError] = useState(false);
  const key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&q=${input}&type=video&key=${key}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
        if(data.items.length > 1){
        setLoadingError(false);
        } else {
          setLoadingError(true)
        }
      })
      .catch((error) => {
        console.error(error);
        setLoadingError(true);
      });
  }, [submit]);

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit ? setSubmit(false) : setSubmit(true);
  };

  return (
    <div>
      <section className="search">
        <form onSubmit={handleSubmit}>
          <input value={input} onChange={handleChange} />
          <button>Search</button>
        </form>
      </section>
      {loadingError? (
        <Modal closeModal={setLoadingError}/>
      ) : (
        <ul className="vids">
          {videos.map((video) => {
            return <Thumbnail video={video} key={video.id.videoId} />;
          })}
        </ul>
      )}
    </div>
  );
}
