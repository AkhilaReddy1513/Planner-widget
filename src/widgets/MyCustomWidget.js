import React, { useState, useEffect } from "react";

export default function MyCustomWidget() {
  // State variables for stopwatch functionality
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;

    // Start the stopwatch when isRunning is true
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }

    // Clear the interval when isRunning is false
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  // Function to handle the start/stop button click
  const handleToggle = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  // Function to handle the reset button click
  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  return (
    <div>
      <h2>Stopwatch Widget</h2>
      <p>Elapsed Time: {elapsedTime} seconds</p>
      <button onClick={handleToggle}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
