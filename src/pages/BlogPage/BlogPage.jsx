import {
  StyledBlogHeader,
  StyledBlogFourSection,
  StyledCards,
} from './BlogPage.style';
// Images
import HeaderImage from './photos/BlogHeaderIMG.png';
import CardImage from './photos/shouldbuy.png';
import CardSmImg1 from './photos/CardSmImg1.png';
import CardSmImg2 from './photos/CardSmImg2.png';
import CardSmImg3 from './photos/CardSmImg3.png';
import CardM1 from './photos/CardM1.png';
import CardM2 from './photos/CardM2.png';
import CardM3 from './photos/CardM3.png';
import CardM4 from './photos/CardM4.png';
import CardM5 from './photos/CardM5.png';
import CardM6 from './photos/CardM6.png';

// Components
import Card from './components/card';
import CardSm from './components/CardSm';
import CardM from './components/CardM';
import Button from '../../components/Button';
import CallToAction from '../../components/CallToAction/CallToAction';

const BlogPage = ({ deviceSize }) => {
  return (
    <main>
      <StyledBlogHeader deviceSize={deviceSize}>
        <div className='headerImage'>
          <div
            className='backgroundphoto'
            style={{ backgroundImage: `url(${HeaderImage})` }}
          ></div>
          <div className='overlay'></div>
          <div className='text'>
            <h1>Our Blog</h1>
          </div>
        </div>

        <div className='headerText'>
          <div className='headerTextContainer'>
            <p className='Headerheadline'>TRENDING</p>

            <h4 className='HeaderUnderLine'>
              Diagnose Car Problems If You Don’t Know Much About Cars
            </h4>

            <p className='headerSecondP'>
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, We
              provide a full range of front end mechanical.
            </p>

            <div className='headerTextBottom'>
              <Button type='primary' buttontext='Read more' />
              <p className='HeaderTextBottom'>Posted on October 6th 2021</p>
            </div>
          </div>
        </div>
      </StyledBlogHeader>

      <StyledBlogFourSection deviceSize={deviceSize}>
        <div className='wrapper'>
          <div className='first'>
            <Card
              image={CardImage}
              posteddata='Posted on October 6th 2021'
              hg='Should I Buy a New Car or Lease a New Car in 2021?'
              text='We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.'
              url=''
            />
          </div>
          <div className='second'>
            <CardSm
              image={CardSmImg1}
              url='test'
              FirstText='Get an Awesome Number Plate for Your New Car'
              SecondText='Posted on October 6th 2021'
            />
            <CardSm
              image={CardSmImg2}
              url='test'
              FirstText='Would you Let a Robot Drive your Car? Our AI Future'
              SecondText='Posted on October 6th 2021'
            />
            <CardSm
              image={CardSmImg3}
              url='test'
              FirstText='Will Electric Technology Soon Rule The Road?'
              SecondText='Posted on October 6th 2021'
            />
          </div>
        </div>
      </StyledBlogFourSection>

      <StyledCards deviceSize={deviceSize}>
        <div className='wrapper'>
          <CardM
            url='genius'
            image={CardM1}
            posteddate='Posted on October 6th 2021'
            headline='5 Genius Car Accessories You Should Never Drive Without'
            text='We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models'
          />
          <CardM
            url='genius'
            image={CardM2}
            posteddate='Posted on October 6th 2021'
            headline='5 Genius Car Accessories You Should Never Drive Without'
            text='We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models'
          />
          <CardM
            url='genius'
            image={CardM3}
            posteddate='Posted on October 6th 2021'
            headline='We provide blow straight past it with the wheels skidding'
            text='We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models'
          />
          <CardM
            url='genius'
            image={CardM4}
            posteddate='Posted on October 6th 2021'
            headline='We provide blow straight past it with the wheels skidding'
            text='We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models'
          />
          <CardM
            url='genius'
            image={CardM5}
            posteddate='Posted on October 6th 2021'
            headline='5 Genius Car Accessories You Should Never Drive Without'
            text='We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models'
          />
          <CardM
            url='genius'
            image={CardM6}
            posteddate='Posted on October 6th 2021'
            headline='5 Genius Car Accessories You Should Never Drive Without'
            text='We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models'
          />
        </div>
      </StyledCards>
      <CallToAction deviceSize={deviceSize}></CallToAction>
    </main>
  );
};

export default BlogPage;
