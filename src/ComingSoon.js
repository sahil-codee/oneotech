import React, { useState, useEffect } from 'react';
import './Style.css';

const Countdown = () => {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  // Set the duration of the countdown
  const durationDays = 2; // 2 days
  const durationHours = 0;
  const durationMinutes = 0;
  const durationSeconds = 0;

  // Calculate the target date based on the duration
  useEffect(() => {
    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + durationDays);
    targetDate.setHours(targetDate.getHours() + durationHours);
    targetDate.setMinutes(targetDate.getMinutes() + durationMinutes);
    targetDate.setSeconds(targetDate.getSeconds() + durationSeconds);

    // Update the countdown every second
    const timer = setInterval(() => {
      const now = new Date();
      const timeDiff = targetDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        clearInterval(timer);
        setDays('00');
        setHours('00');
        setMinutes('00');
        setSeconds('00');
        return;
      }

      const totalSeconds = Math.floor(timeDiff / 1000);
      const day = Math.floor(totalSeconds / (3600 * 24));
      const hour = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minute = Math.floor((totalSeconds % 3600) / 60);
      const second = Math.floor(totalSeconds % 60);

      // Update state with the countdown values
      setDays(day < 10 ? '0' + day : day);
      setHours(hour < 10 ? '0' + hour : hour);
      setMinutes(minute < 10 ? '0' + minute : minute);
      setSeconds(second < 10 ? '0' + second : second);
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span>{days}</span>
        <span>Days</span>
      </div>
      <div className="countdown-item">
        <span>{hours}</span>
        <span>Hours</span>
      </div>
      <div className="countdown-item">
        <span>{minutes}</span>
        <span>Minutes</span>
      </div>
      <div className="countdown-item">
        <span>{seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
};

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <video autoPlay loop muted className="background-video">
        <source src="your-background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Coming Soon</h1>
        <p>Our website is currently under construction.</p>
        <Countdown />
      </div>
    </div>
  );
};

export default ComingSoon;
