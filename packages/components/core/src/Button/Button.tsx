import React from 'react';

const Button = ({ onClick, label }: Props) => {
  return <button onClick={() => onClick()}>{label}</button>;
};

type Props = {
  onClick: () => void;
  label: string;
};

export default Button;
