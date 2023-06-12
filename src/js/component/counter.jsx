import React, { useState, useEffect } from "react";
import "../../styles/index.css";

function SecondsCounter() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval = 0;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const remainingSeconds = time % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleToggle = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const restart = () => {
    setSeconds(0);
    setIsRunning(true);
  };

  return (
    <>
      <div className="visualCounter d-flex justify-content-center bg-black">
        <span>{formatTime(seconds)}</span>
      </div>
      <div className="boxButton d-flex justify-content-center">
        <div className="containerButton">
          <button onClick={handleToggle}>{isRunning ? "Stop" : "Start"}</button>
        </div>
        <div className="containerButton">
          <button onClick={restart}>Restart</button>
        </div>
      </div>
    </>
  );
}

export default SecondsCounter;
