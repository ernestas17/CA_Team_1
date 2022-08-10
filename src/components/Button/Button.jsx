import React from 'react';
import './Button.css';
import { StyledButton } from './Button.style';

const Button = ({ buttontext, type }) => {
  return (
    <StyledButton className={`btn btn-${type}`}>{buttontext}</StyledButton>
  );
};

export default Button;
