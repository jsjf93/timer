import React, { useState, useEffect } from 'react';
import moment from 'moment';
import useSound from 'use-sound';

import './App.scss';
import Countdown from '../Timer/Countdown/Countdown';
import ProgressBar from '../Timer/ProgressBar/ProgressBar';
import StartStopButton from '../Buttons/StartStopButton';
import ResetButton from '../Buttons/ResetButton';

const bellSfx = require('../../sounds/bell.mp3');

const tempValue = moment.duration({ minutes: 0, seconds: 10 });

const App = () => {
  const [timer, setTimer] = useState<moment.Duration>(tempValue);
  const [isActive, setIsActive] = useState(false);
  const [playSound] = useSound(bellSfx);

  const percentage = (timer.asMilliseconds() / tempValue.asMilliseconds()) * 100;

  useEffect(() => {
    const calculateTime = () => {
      const newTimer = moment.duration(timer);
      newTimer.subtract(1, 's');
      newTimer.asMilliseconds() >= 0 ? setTimer(newTimer) : setIsActive(false);
    };

    let timeout: NodeJS.Timeout;
    if (isActive) {
      timeout = setTimeout(() => calculateTime(), 1000);
    } else if (timer.asMilliseconds() === 0) {
      playSound();
    }

    return () => clearTimeout(timeout);
  }, [isActive, playSound, timer]);

  return (
    <div className="container">
      <h1>Pomodoro Timer</h1>

      <Countdown timer={timer} />
      <ProgressBar timer={timer} percentage={percentage} />
      <StartStopButton isActive={isActive} onClick={() => setIsActive(!isActive)} />
      <ResetButton isActive={isActive} onClick={() => setTimer(tempValue)} />
    </div>
  );
};

export default App;
