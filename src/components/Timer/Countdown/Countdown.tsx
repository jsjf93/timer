import React from 'react';
import moment from 'moment';

interface IProps {
  timer: moment.Duration;
}

const Countdown = (props: IProps) => {
  const { timer } = props;

  const renderPaddedZeros = (valueAsNumber: number) => {
    const value = valueAsNumber.toString();
    return value.length < 2 ? `0${value}` : value;
  };

  return <div>{`${renderPaddedZeros(timer.minutes())}:${renderPaddedZeros(timer.seconds())}`}</div>;
};

export default Countdown;
