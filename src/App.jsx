import React, { useState, useRef } from "react";
import "./App.css";
import video from "c:/videos/leones.mp4";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

function App() {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef();
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // console.log("videoref ", videoRef.current ) //current->name, value, play(), pause(), duration()

  function handlePlay() {
    const video = videoRef.current;
    if (video.paused) {
      setIsPlay(true);
      video.play();
    } else {
      setIsPlay(false);
      video.pause();
    }
  }

  function handleBackward() {
    const video = videoRef.current;
    video.currentTime -= 10; //retrocede 10 segundos
  }

  function handleForward() {
    const video = videoRef.current;
    video.currentTime += 10; //adelanta 10 segundos
  }

  function handleTime() {
    const video = videoRef.current;
    setCurrentTime(video.currentTime);
    setDuration(video.duration);
  }

  // function handleProgress(e) {
    // const video = videoRef.current;
    // video.currentTime = e.target.value;
  // }

  return (
    <div className="container">
      <h1>Video Player using HTML-CSS-React</h1>
      <video onTimeUpdate={handleTime} ref={videoRef} src={video}></video>
      <div className="progress">
        <progress
          max={duration}
          value={currentTime}
          // onChange={handleProgress}
        ></progress>
      </div>
      <div className="barraVideo">
        <div>
          <button onClick={handleBackward}>
            <FaBackward />
          </button>
        </div>
        <div>
          <button onClick={handlePlay}>
            {isPlay ? <FaPause /> : <FaPlay />}
          </button>
        </div>
        <div>
          <button onClick={handleForward}>
            <FaForward />
          </button>
        </div>
        <div className="duration">
          {currentTime.toFixed(2)} | {duration.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default App;
