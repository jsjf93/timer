import React from 'react';

interface IProps {
  onClick: () => void;
  isActive: boolean;
}

const Button = (props: IProps) => {
  const { isActive, onClick } = props;

  return (
    <button onClick={onClick} style={{ color: isActive ? 'blue' : 'green' }}>
      {isActive ? 'Pause' : 'Start'}
    </button>
  );
};

export default Button;
