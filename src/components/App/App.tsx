import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './App.scss';
import Countdown from '../Timer/Countdown/Countdown';
import ProgressBar from '../Timer/ProgressBar/ProgressBar';

const tempValue = moment.duration({ minutes: 20, seconds: 0 });

const App = () => {
  const [timer, setTimer] = useState<moment.Duration>(tempValue);
  const [isActive, setIsActive] = useState(true);
  const percentage = Math.round((timer.asMilliseconds() / tempValue.asMilliseconds()) * 100);

  const calculateTime = () => {
    const newTimer = moment.duration(timer);
    newTimer.subtract(1, 's');
    newTimer.asMilliseconds() >= 0 ? setTimer(newTimer) : setIsActive(false);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isActive) {
      timeout = setTimeout(() => calculateTime(), 1000);
    }

    return () => clearTimeout(timeout);
  });

  return (
    <div className="container">
      <h1>Pomodoro Timer</h1>

      <Countdown timer={timer} />
      <ProgressBar timer={timer} percentage={percentage} />
    </div>
  );
};

export default App;
