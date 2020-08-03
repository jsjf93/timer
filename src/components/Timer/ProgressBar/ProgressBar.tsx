import React from 'react';

import './ProgressBar.scss';

interface IProps {
  timer: moment.Duration;
  percentage: number;
}

const ProgressBar = (props: IProps) => {
  const width = 2 * props.percentage;

  return <div className="progress-bar" style={{ width }}></div>;
};

export default ProgressBar;
