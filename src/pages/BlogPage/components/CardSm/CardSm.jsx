import React from 'react';
import { StyledCardSm } from './CardSm.style';

const CardSm = ({ url, image, FirstText, SecondText }) => {
  return (
    <StyledCardSm>
      <a href={`/blog/${url}`} style={{ textDecoration: 'none' }}>
        <div
          className='photo'
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div>
          <h4>{FirstText}</h4>
          <p>{SecondText}</p>
        </div>
      </a>
    </StyledCardSm>
  );
};

export default CardSm;
