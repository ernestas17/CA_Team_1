import Button from '../../components/Button';
import Image from './Image.png';
import CallToAction from '../../components/CallToAction/CallToAction';
import Card from '../../components/Card/Card';
import FAQSection from './faqComponent/FAQSection';
import circle1Image from './photos/circle1.png';
import circle2Image from './photos/circle2.png';
import circle3Image from './photos/circle3.png';
import ContactUs from '../../components/ContactUs/ContactUs';

import {
  Icon1,
  Icon2,
  Icon3,
  Arrow,
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

const HomePage = ({ deviceSize }) => {
  return (
    <main>
      <StyledHomeHeader deviceSize={deviceSize}>
        <div className='StyledHomeHeaderWrapper'>
          <div className='StyledHomeHeaderText'>
            <h1>Get your vehicle service done online at one place</h1>
            <Button
              buttontext='Book a service'
              type='primary'
              href='/services'
            />
            <div className='StyledHomeHeaderTextOpen'>
              <div>
                <i className='fa-regular fa-clock'></i>
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
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-regular fa-star-half-stroke'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledHomeHeader>

      <StyledQuote deviceSize={deviceSize}>
        <div className='StyledQuoteMargins'>
          <div className='StyledQuoteLeft'>
            <h2>We are taking car servicing seriously</h2>
            <div className='StyledQuoteLeftFeature'>
              <div className='StyledQuoteLeftFeatureCircle'>
                <div className='StyledQuoteLeftFeatureCircleS'>
                  <img src={Icon1} alt='' />
                </div>
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
                <div className='StyledQuoteLeftFeatureCircleS'>
                  <img src={Icon2} alt='' />
                </div>
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
                <div className='StyledQuoteLeftFeatureCircleS'>
                  <img src={Icon3} alt='' />
                </div>
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
              <a href='/aboutus'>
                <img src={Arrow} alt='' />
              </a>
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

      <StyledProcessSection deviceSize={deviceSize}>
        <div className='StyledProcessSectionMargins'>
          <div className='StyledProcessSectionLeft'>
            <h2>We follow a clear process to help you out.</h2>
            <p>
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire
            </p>
            <Button buttontext='Learn more' type='primary' href='' />
          </div>

          <div className='StyledProcessSectionRight'>
            <div className='listContainer'>
              <div className='listContainerRow'>
                <div className='listContainerRowLeft'>
                  <img src={circle1Image} alt='number 1' />

                  <div className='lineContainer'>
                    <div></div>
                  </div>
                </div>
                <div className='listContainerRowRight'>
                  <h5>Get a Quote</h5>
                  <p>
                    Through True Rich Attended does no end it his mother since
                    real had half every.
                  </p>
                </div>
              </div>

              <div className='listContainerRow'>
                <div className='listContainerRowLeft'>
                  <img src={circle2Image} alt='number 2 ' />

                  <div className='lineContainer'>
                    <div></div>
                  </div>
                </div>
                <div className='listContainerRowRight'>
                  <h5>Book an Appointment</h5>
                  <p>
                    Through True Rich Attended does no end it his mother since
                    real had half every.
                  </p>
                </div>
              </div>

              <div className='listContainerRow'>
                <div className='listContainerRowLeft'>
                  <img src={circle3Image} alt='number 3 ' />

                  <div className='lineContainer'></div>
                </div>
                <div className='listContainerRowRight'>
                  <h5>Get your Service Done</h5>
                  <p>
                    Through True Rich Attended does no end it his mother since
                    real had half every.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledProcessSection>

      <StyledOffer deviceSize={deviceSize}>
        <div className='StyledOffer'>
          <div className='StyledOfferWrapper'>
            <p>What we Offer</p>
            <h2>We offer full service auto repair & maintenance</h2>

            <StyledCard>
              <Card
                icon={<i className='fa-solid fa-eye'></i>}
                headline='Diagnostics'
              />
              <Card
                icon={<i className='fa-brands fa-searchengin'></i>}
                headline='Engine Repair'
              />
              <Card
                icon={<i className='fa-solid fa-car-side'></i>}
                headline='Wheel Repair'
              />
              <Card
                icon={<i className='fa-solid fa-oil-can'></i>}
                headline='Oil Filter'
              />
              <Card
                icon={<i className='fa-solid fa-car-on'></i>}
                headline='Body Work'
              />
              <Card
                icon={<i className='fa-solid fa-car-battery'></i>}
                headline='Batteries'
              />
              <Card
                icon={<i className='fa-solid fa-car-burst'></i>}
                headline='Insurance Claim'
              />
              <Card
                icon={<i className='fa-solid fa-screwdriver-wrench'></i>}
                headline='Custom Service'
              />
            </StyledCard>

            <div className='StyledArrows'>
              <p>Learn about services</p>
              <a href='/services'>
                <img src={Arrow} alt='' />
              </a>
            </div>
          </div>
        </div>
      </StyledOffer>

      <CallToAction></CallToAction>

      <StyledExpierence deviceSize={deviceSize}>
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

      <StyledBrands deviceSize={deviceSize}>
        <div className='brandsText'>Brands we Serve</div>
        <div className='brandLogoContainer'>
          <div className='brandlogo'>
            <img src={LogoIpsum} alt='' />
            <img src={LogoIpsum} alt='' />
            <img src={Logoipsum1} alt='' />
            <img src={Logoipsum1} alt='' />
            <img src={Logoipsum2} alt='' />
            <img src={Logoipsum2} alt='' />
            <img src={Logoipsum3} alt='' />
            <img src={Logoipsum3} alt='' />
            <img src={logoipsum4} alt='' />
            <img src={logoipsum4} alt='' />
          </div>
        </div>
      </StyledBrands>

      <StyledTestimonials deviceSize={deviceSize}>
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

      <StyledFaq deviceSize={deviceSize}>
        <div className='faqWrapper'>
          <h3>Frequently Asked Questions</h3>

          <FAQSection deviceSize={deviceSize}></FAQSection>
        </div>

        <ContactUs></ContactUs>
      </StyledFaq>
    </main>
  );
};

export default HomePage;
