import React from 'react';
import { StyledCard } from './Card.style';
import arrow from '../../photos/Arrow.png';
const Card = ({ image, posteddata, title, text, url }) => {
  return (
    <StyledCard>
      <div className='container'>
        <div
          className='image'
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className='posted-data'>{posteddata}</div>
        <h4>{title}</h4>
        <p>{text}</p>
        <div className='arrow'>
          <div>Read more</div>
          <div>
            <a href={`/blog/${url}`}>
              <img src={arrow} alt='' />
            </a>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
