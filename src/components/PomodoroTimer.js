import React, { useState, useEffect } from 'react';
import '../styles/PomodoroTimer.css';

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);

  // Function to format time in MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  }

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft (isWorkSession ? 1500 : 300); // Reset to 25 minutes or 5 minutes
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(interval);
          setIsWorkSession(!isWorkSession);
          return isWorkSession ? 300 : 1500; // Switch session
        }
        return prevTime - 1;
      });
    }
    , 1000);
    return () => clearInterval(interval);
  }
  , [isRunning, isWorkSession]);

  return (
    <div className="pomodoro-timer">
      <h1>{isWorkSession ? 'Work Session' : 'Break Session'}</h1>
      <div className="timer-display">{formatTime(timeLeft)}</div>
      <button onClick={toggleTimer}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
};

export default PomodoroTimer;