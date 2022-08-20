import React from 'react';
import { StyledCard } from './CardM.style';

const CardM = ({ url, image, posteddate, headline, text }) => {
  return (
    <StyledCard>
      <a href={`/blog/${url}`} style={{ textDecoration: 'none' }}>
        <div
          className='image'
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <p>{posteddate}</p>
        <h4>{headline}</h4>
        <span>{text}</span>
      </a>
    </StyledCard>
  );
};

export default CardM;
