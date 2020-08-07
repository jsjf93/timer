import React from 'react';

interface IProps {
  isActive: boolean;
  onClick: () => void;
}

const ResetButton = (props: IProps) => {
  return (
    <button disabled={props.isActive} onClick={props.onClick}>
      Reset
    </button>
  );
};

export default ResetButton;
