import React from 'react';

interface IProps {
  onClick: () => void;
  isActive: boolean;
}

const StartStopButton = (props: IProps) => {
  const { isActive, onClick } = props;

  return (
    <button onClick={onClick} style={{ backgroundColor: isActive ? 'blue' : 'green' }}>
      {isActive ? 'Pause' : 'Start'}
    </button>
  );
};

export default StartStopButton;
