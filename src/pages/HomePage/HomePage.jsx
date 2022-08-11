import React from 'react';
import Button from '../../components/Button';
import Image from './Image.png';
import CallToAction from '../../components/CallToAction/CallToAction';

import {
  Icon1,
  Icon2,
  Icon3,
  Arrow,
  Line,
  LogoIpsum,
  Logoipsum1,
  Logoipsum2,
  Logoipsum3,
  logoipsum4,
  Avatar1,
  Avatar2,
} from './photos/icons/index';

import {
  StyledHomeHeader,
  StyledQuote,
  StyledProcessSection,
  StyledOffer,
  StyledCard,
  StyledExpierence,
  StyledBrands,
  StyledTestimonials,
  StyledFaq,
} from './HomePage.style';
import Card from '../../components/Card/Card';

const HomePage = () => {
  return (
    <>
      <StyledHomeHeader>
        <div className='StyledHomeHeaderWrapper'>
          <div className='StyledHomeHeaderText'>
            <h1>Get your vehicle service done online at one place</h1>
            <Button buttontext='Book a service' type='primary' />
            <div className='StyledHomeHeaderTextOpen'>
              <div>
                <i class='fa-regular fa-clock'></i>
              </div>
              <div className='StyledHomeHeaderTextInside'>
                <p>We are open</p>
                <p>Monday to Friday 9:00 AM to 10:00 AM</p>
              </div>
            </div>
          </div>

          <div
            className='StyledHomeHeaderImage'
            style={{ backgroundImage: `url(${Image})` }}
          >
            <div className='StyledHomeHeaderImageTextCircleShadow'>
              <div className='StyledHomeHeaderImageTextCircle'>
                <div className='StyledHomeHeaderImageGreenCircle'>
                  <p>24</p>
                  <p>hr</p>
                </div>
                Quick service
              </div>
            </div>
            <div className='StyledHomeHeaderImageCircleSecondShadow'>
              <div className='StyledHomeHeaderImageCircleSecondInside'>
                <div className='StyledHeaderSecondText'>
                  <p>4.5/5</p>
                  <p>Rating</p>
                </div>
                <div className='StyledHeaderSecondStars'>
                  <i class='fa-solid fa-star'></i>
                  <i class='fa-solid fa-star'></i>
                  <i class='fa-solid fa-star'></i>
                  <i class='fa-solid fa-star'></i>
                  <i class='fa-regular fa-star-half-stroke'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledHomeHeader>

      <StyledQuote>
        <div className='StyledQuoteMargins'>
          <div className='StyledQuoteLeft'>
            <h2>We are taking car servicing seriously</h2>
            <div className='StyledQuoteLeftFeature'>
              <div className='StyledQuoteLeftFeatureCircle'>
                <img src={Icon1} alt='' />
              </div>
              <div className='StyledQuoteLeftFeatureText'>
                <p>Convenient service</p>
                <p>
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>

            <div className='StyledQuoteLeftFeature'>
              <div className='StyledQuoteLeftFeatureCircle'>
                <img src={Icon2} alt='icon' />
              </div>
              <div className='StyledQuoteLeftFeatureText'>
                <p>Expert mechanics</p>
                <p>
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>

            <div className='StyledQuoteLeftFeature'>
              <div className='StyledQuoteLeftFeatureCircle'>
                <img src={Icon3} alt='' />
              </div>
              <div className='StyledQuoteLeftFeatureText'>
                <p>Transparent pricing</p>
                <p>
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
            <div className='StyledQuoteLeftBottom'>
              <p>Know more about us</p>
              <img src={Arrow} alt='' />
            </div>
          </div>

          <div className='StyledQuoteRight'>
            <h3>Get a quote for the car service</h3>
            <input
              className='StyledQuoteRightInput'
              type='text'
              placeholder='Enter your location'
            ></input>
            <input
              className='StyledQuoteRightInput'
              type='text'
              placeholder='Enter your location'
            ></input>
            <input
              className='StyledQuoteRightInput'
              type='text'
              placeholder='Enter your location'
            ></input>
            <input
              className='StyledQuoteRightInput'
              type='text'
              placeholder='Enter your number'
            ></input>
            <div className='StyledQuoteRightButtonContainer'>
              <Button type='primary' buttontext='Get your quote' />
            </div>
          </div>
        </div>
      </StyledQuote>

      <StyledProcessSection>
        <div className='StyledProcessSectionMargins'>
          <div className='StyledProcessSectionLeft'>
            <h2>We follow a clear process to help you out.</h2>
            <p>
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire
            </p>
            <Button buttontext='Learn more' type='primary' />
          </div>

          <div className='StyledProcessSectionRight'>
            <div className='StyledProcessSectionRightStep'>
              <div className='StyledProcessSectionRightCircleWrapper'>
                <div className='StyledProcessSectionRightCircle'>01</div>
                <img src={Line} alt='' />
              </div>

              <div className='StyledProcessSectionRightText'>
                <p>Get a Quote</p>
                <p>
                  Through True Rich Attended does no end it his mother since
                  real had half every.
                </p>
              </div>
            </div>

            <div className='StyledProcessSectionRightStep'>
              <div className='StyledProcessSectionRightCircleWrapper'>
                <div className='StyledProcessSectionRightCircle'>02</div>
                <img src={Line} alt='' />
              </div>

              <div className='StyledProcessSectionRightText'>
                <p>Book an Appointment</p>
                <p>
                  Through True Rich Attended does no end it his mother since
                  real had half every.
                </p>
              </div>
            </div>

            <div className='StyledProcessSectionRightStep'>
              <div className='StyledProcessSectionRightCircleWrapper'>
                <div className='StyledProcessSectionRightCircle'>03</div>
              </div>

              <div className='StyledProcessSectionRightText'>
                <p>Get your Service Done</p>
                <p>
                  Through True Rich Attended does no end it his mother since
                  real had half every.
                </p>
              </div>
            </div>
          </div>
        </div>
      </StyledProcessSection>

      <StyledOffer>
        <div className='StyledOffer'>
          <div className='StyledOfferWrapper'>
            <p>What we Offer</p>
            <h2>We offer full service auto repair & maintenance</h2>

            <StyledCard>
              <Card
                icon={<i class='fa-solid fa-eye'></i>}
                headline='Diagnostics'
              />
              <Card
                icon={<i class='fa-brands fa-searchengin'></i>}
                headline='Engine Repair'
              />
              <Card
                icon={<i class='fa-solid fa-car-side'></i>}
                headline='Wheel Repair'
              />
              <Card
                icon={<i class='fa-solid fa-oil-can'></i>}
                headline='Oil Filter'
              />
              <Card
                icon={<i class='fa-solid fa-car-on'></i>}
                headline='Body Work'
              />
              <Card
                icon={<i class='fa-solid fa-car-battery'></i>}
                headline='Batteries'
              />
              <Card
                icon={<i class='fa-solid fa-car-burst'></i>}
                headline='Insurance Claim'
              />
              <Card
                icon={<i class='fa-solid fa-screwdriver-wrench'></i>}
                headline='Custom Service'
              />
            </StyledCard>

            <div className='StyledArrows'>
              <p>Learn about services</p>
              <img src={Arrow} alt='' />
            </div>
          </div>
        </div>
      </StyledOffer>

      <CallToAction></CallToAction>

      <StyledExpierence>
        <div className='expierenceMargins'>
          <div className='expierenceNumber'>
            <h2>20+</h2>
            <p>Proffesional</p>
          </div>
          <div className='expierenceNumber'>
            <h2>10+</h2>
            <p>Years Eperience</p>
          </div>
          <div className='expierenceNumber'>
            <h2>12K</h2>
            <p>Service Closed</p>
          </div>
          <div className='expierenceNumber'>
            <h2>100%</h2>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </StyledExpierence>

      <StyledBrands>
        <div className='brandsText'>Brands we Serve</div>
        <div className='brandLogoContainer'>
          <div className='brandlogo'>
            <img src={LogoIpsum} alt='' />
            <img src={LogoIpsum} alt='' />
          </div>
          <div className='brandlogo'>
            <img src={Logoipsum1} alt='' />
            <img src={Logoipsum1} alt='' />
          </div>
          <div className='brandlogo'>
            <img src={Logoipsum2} alt='' />
            <img src={Logoipsum2} alt='' />
          </div>
          <div className='brandlogo'>
            <img src={Logoipsum3} alt='' />
            <img src={Logoipsum3} alt='' />
          </div>
          <div className='brandlogo'>
            <img src={logoipsum4} alt='' />
            <img src={logoipsum4} alt='' />
          </div>
        </div>
      </StyledBrands>

      <StyledTestimonials>
        <div className='testimonialsWrapper'>
          <h3>Our customers say the nicest things about our service</h3>
          <div className='testimonialContainer'>
            <div className='testimonialFirst'>
              <div className='textimonialText'>
                <div className='textimonialTextUp'>
                  <img src={Avatar1} alt='' />
                  <div className='testimonialTextName'>
                    <p>Jonathan Vallem</p>
                    <p>New york</p>
                  </div>
                </div>
                <div className='textimonialTextContainer'>
                  I have got my car repaired at Finsweet many times before, they
                  are good at what they do. Not only did they repair my car in a
                  short comprehensive look on all the working
                </div>
              </div>
            </div>
            <div className='testimonialFirst'>
              <div className='textimonialText'>
                <div className='textimonialTextUp'>
                  <img src={Avatar2} alt='' />
                  <div className='testimonialTextName'>
                    <p>Smith Johnson</p>
                    <p>New york</p>
                  </div>
                </div>
                <div className='textimonialTextContainer'>
                  I have got my car repaired at Finsweet many times before, they
                  are good at what they do. Not only did they repair my car in a
                  short comprehensive look on all the working
                </div>
              </div>
            </div>
          </div>
          <div className='testimonialLines'>
            <div className='testimonialLines1'></div>
            <div className='testimonialLines1'></div>
            <div className='testimonialLines2'></div>
            <div className='testimonialLines1'></div>
          </div>
        </div>
      </StyledTestimonials>

      <StyledFaq>
        <div className='faqWrapper'>
          <h3>Frequently Asked Questions</h3>
          <div className='faq1'>
            <div className='faq1-upper'>
              <p>How long should a car repair take?</p>
              <div className='faq-orangeBox'>-</div>
            </div>
            <div className='faq-bottom'>
              <p>
                I have got my car repaired at Finsweet many times before, they
                are good at what they do. Not only did they repair my car I have
                got my car repaired at Finsweet I have got my car repaired at
                Finsweet
              </p>
            </div>
          </div>

          <div className='faq2'>
            <div className='faq1-upper'>
              <p>How do I schedule my car's appointment ?</p>
              <div className='faq-orangeBox'>+</div>
            </div>
          </div>
          <div className='faq2'>
            <div className='faq1-upper'>
              <p>What are the repair services provided?</p>
              <div className='faq-orangeBox'>+</div>
            </div>
          </div>
          <div className='faq2'>
            <div className='faq1-upper'>
              <p>How do I find auto body shops near me?</p>
              <div className='faq-orangeBox'>+</div>
            </div>
          </div>
          <div className='faq2'>
            <div className='faq1-upper'>
              <p>Genuine spare parts during car repair?</p>
              <div className='faq-orangeBox'>+</div>
            </div>
          </div>
        </div>
      </StyledFaq>
    </>
  );
};

export default HomePage;
