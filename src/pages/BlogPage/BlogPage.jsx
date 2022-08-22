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
import TEXTS from '../../shared/texts';

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
              posteddata={
                TEXTS.SingleBlogPage.ShouldIBuyaNewCarorLeaseaNewCarin2021
                  .posteddate
              }
              title={
                TEXTS.SingleBlogPage.ShouldIBuyaNewCarorLeaseaNewCarin2021.title
              }
              text={
                TEXTS.SingleBlogPage.ShouldIBuyaNewCarorLeaseaNewCarin2021
                  .underTitleText
              }
              url={
                TEXTS.SingleBlogPage.ShouldIBuyaNewCarorLeaseaNewCarin2021.url
              }
            />
          </div>
          <div className='second'>
            <CardSm
              image={CardSmImg1}
              url={
                TEXTS.SingleBlogPage.GetanAwesomeNumberPlateforYourNewCar.url
              }
              FirstText={
                TEXTS.SingleBlogPage.GetanAwesomeNumberPlateforYourNewCar.title
              }
              SecondText={
                TEXTS.SingleBlogPage.GetanAwesomeNumberPlateforYourNewCar
                  .posteddate
              }
            />
            <CardSm
              image={CardSmImg2}
              url={
                TEXTS.SingleBlogPage.WouldyouLetaRobotDriveyourCarOurAIFuture
                  .url
              }
              FirstText={
                TEXTS.SingleBlogPage.WouldyouLetaRobotDriveyourCarOurAIFuture
                  .title
              }
              SecondText={
                TEXTS.SingleBlogPage.WouldyouLetaRobotDriveyourCarOurAIFuture
                  .posteddate
              }
            />
            <CardSm
              image={CardSmImg3}
              url={
                TEXTS.SingleBlogPage.WillElectricTechnologySoonRuleTheRoad.url
              }
              FirstText={
                TEXTS.SingleBlogPage.WillElectricTechnologySoonRuleTheRoad.title
              }
              SecondText={
                TEXTS.SingleBlogPage.WillElectricTechnologySoonRuleTheRoad
                  .posteddate
              }
            />
          </div>
        </div>
      </StyledBlogFourSection>

      <StyledCards deviceSize={deviceSize}>
        <div className='wrapper'>
          <CardM
            url={
              TEXTS.SingleBlogPage
                .geniuscaraccessoriesyoushouldneverdrivewithout.url
            }
            image={CardM1}
            posteddate={
              TEXTS.SingleBlogPage
                .geniuscaraccessoriesyoushouldneverdrivewithout.posteddate
            }
            headline={
              TEXTS.SingleBlogPage
                .geniuscaraccessoriesyoushouldneverdrivewithout.title
            }
            text={
              TEXTS.SingleBlogPage
                .geniuscaraccessoriesyoushouldneverdrivewithout.underTitleText
            }
          />
          <CardM
            url={
              TEXTS.SingleBlogPage
                .geniuscaraccessoriesyoushouldneverdrivewithoutsecond.url
            }
            image={CardM2}
            posteddate={
              TEXTS.SingleBlogPage
                .geniuscaraccessoriesyoushouldneverdrivewithoutsecond.posteddate
            }
            headline={
              TEXTS.SingleBlogPage
                .geniuscaraccessoriesyoushouldneverdrivewithoutsecond.title
            }
            text={
              TEXTS.SingleBlogPage
                .geniuscaraccessoriesyoushouldneverdrivewithoutsecond
                .underTitleText
            }
          />
          <CardM
            url={
              TEXTS.SingleBlogPage
                .weprovideblowstraightpastitwiththewheelsskidding.url
            }
            image={CardM3}
            posteddate={
              TEXTS.SingleBlogPage
                .weprovideblowstraightpastitwiththewheelsskidding.posteddate
            }
            headline={
              TEXTS.SingleBlogPage
                .weprovideblowstraightpastitwiththewheelsskidding.title
            }
            text={
              TEXTS.SingleBlogPage
                .weprovideblowstraightpastitwiththewheelsskidding.underTitleText
            }
          />
          <CardM
            url={
              TEXTS.SingleBlogPage
                .weprovideblowstraightpastitwiththewheelsskiddingsecond.url
            }
            image={CardM4}
            posteddate={
              TEXTS.SingleBlogPage
                .weprovideblowstraightpastitwiththewheelsskiddingsecond
                .posteddate
            }
            headline={
              TEXTS.SingleBlogPage
                .weprovideblowstraightpastitwiththewheelsskiddingsecond.title
            }
            text={
              TEXTS.SingleBlogPage
                .weprovideblowstraightpastitwiththewheelsskiddingsecond
                .underTitleText
            }
          />
          <CardM
            url={
              TEXTS.SingleBlogPage
                .geniuscaraccessoriesyoushouldneverdrivewithoutthird.url
            }
            image={CardM5}
            posteddate={
              TEXTS.SingleBlogPage
                .geniuscaraccessoriesyoushouldneverdrivewithoutthird.posteddate
            }
            headline={
              TEXTS.SingleBlogPage
                .geniuscaraccessoriesyoushouldneverdrivewithoutthird.title
            }
            text={
              TEXTS.SingleBlogPage
                .geniuscaraccessoriesyoushouldneverdrivewithoutthird
                .underTitleText
            }
          />
          <CardM
            url={
              TEXTS.SingleBlogPage
                .geniuscaraccessoriesyoushouldneverdrivewithoutfourth.url
            }
            image={CardM6}
            posteddate={
              TEXTS.SingleBlogPage
                .geniuscaraccessoriesyoushouldneverdrivewithoutfourth.posteddate
            }
            headline={
              TEXTS.SingleBlogPage
                .geniuscaraccessoriesyoushouldneverdrivewithoutfourth.title
            }
            text={
              TEXTS.SingleBlogPage
                .geniuscaraccessoriesyoushouldneverdrivewithoutfourth
                .underTitleText
            }
          />
        </div>
      </StyledCards>
      <CallToAction deviceSize={deviceSize}></CallToAction>
    </main>
  );
};

export default BlogPage;
