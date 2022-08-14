import React from 'react';
import './Button.css';
import { StyledButton, StyledAnchor } from './Button.style';

const Button = ({ buttontext, type, href }) => {
  return (
    <StyledAnchor href={href}>
      <StyledButton className={`btn btn-${type}`}>{buttontext}</StyledButton>
    </StyledAnchor>
  );
};

export default Button;
