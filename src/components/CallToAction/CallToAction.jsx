import React from 'react';
import Photo1 from './Image1.png';
import Photo2 from './ovGrEUgrkyE.png';
import Button from '../Button';
import { StyledCallToActionContainer } from './CallToAction.style';

const CallToAction = () => {
  return (
    <StyledCallToActionContainer>
      <div className='CTAcontainer'>
        <div
          className='photo1'
          style={{ backgroundImage: `url(${Photo1})` }}
        ></div>
        <div className='orange'>
          <div className='orange-wrapper'>
            <h3>Get in touch with us for your service related query</h3>
            <div className='button'>
              <Button buttontext='Contact Us' type='secondary' />
            </div>
          </div>
        </div>
        <div
          className='photo2'
          style={{ backgroundImage: `url(${Photo2})` }}
        ></div>
      </div>
    </StyledCallToActionContainer>
  );
};

export default CallToAction;
