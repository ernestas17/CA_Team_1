import { StyledBlogSingle } from './BlogSinglePage.style';
import CallToAction from '../../components/CallToAction/CallToAction';
import ShouldIBuyaNewCarorLeaseaNewCarin2021 from './photos/ShouldIBuyaNewCarorLeaseaNewCarin2021.png';
import ShouldIBuyaNewCarorLeaseaNewCarin2021BOTTOM from './photos/ShouldIBuyaNewCarorLeaseaNewCarin2021BOTTOM.png';
import americanvehiclenumberplates from './photos/americanvehiclenumberplates.jpg';
import americanvehiclenumberplatesBOTTOM from './photos/americanvehiclenumberplatesBOTTOM.jpg';
import WouldyouLetaRobotDriveyourCarOurAIFuture from './photos/WouldyouLetaRobotDriveyourCarOurAIFuture.jpg';
import WouldyouLetaRobotDriveyourCarOurAIFutureBOTTOM from './photos/WouldyouLetaRobotDriveyourCarOurAIFutureBOTTOM.jpg';
import WillElectricTechnologySoonRuleTheRoad from './photos/WillElectricTechnologySoonRuleTheRoad.jpg';
import WillElectricTechnologySoonRuleTheRoadBOTTOM from './photos/WillElectricTechnologySoonRuleTheRoadBOTTOM.jpg';
const BlogSinglePage = ({ deviceSize, posteddate, title, text, img }) => {
  return (
    <main>
      <StyledBlogSingle deviceSize={deviceSize}>
        <div className='wrapper'>
          <div className='top'>
            <div className='posteddate'>
              <p>{posteddate}</p>
            </div>
            <div className='title'>
              <h3>{title}</h3>
            </div>
            <div className='text'>
              <p>{text}</p>
            </div>
          </div>

          <div className='image'>
            {img && (
              <div
                className='image'
                style={{
                  backgroundImage: `url(${
                    img === 'ShouldIBuyaNewCarorLeaseaNewCarin2021'
                      ? ShouldIBuyaNewCarorLeaseaNewCarin2021
                      : img === 'americanvehiclenumberplates'
                      ? americanvehiclenumberplates
                      : img === 'WouldyouLetaRobotDriveyourCarOurAIFuture'
                      ? WouldyouLetaRobotDriveyourCarOurAIFuture
                      : img === 'WillElectricTechnologySoonRuleTheRoad'
                      ? WillElectricTechnologySoonRuleTheRoad
                      : ShouldIBuyaNewCarorLeaseaNewCarin2021
                  })`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              ></div>
            )}
          </div>
          <div className='content'>
            <h4>This is a blog post headline</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
              dui auctor dictum eget a elit. Pellentesque varius diam risus, ut
              condimentum lorem volutpat vel. Nam vel orci pharetra eros
              pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
              pretium interdum justo tincidunt a. Donec at congue lectus. Nulla
              facilisi. Phasellus consectetur sapien accumsan lectus tincidunt
              placerat. Etiam ornare nibh vel dui egestas, eu posuere metus
              convallis.
              <br />
              <br /> Ut non urna a odio condimentum dictum. Proin egestas erat a
              orci ultrices, vitae bibendum libero posuere. Quisque laoreet
              tincidunt justo. Vestibulum congue dictum libero finibus vehicula.
              Aliquam nisi velit, ultricies eget enim vel, venenatis mollis
              ante. Maecenas sodales tristique quam. Suspendisse fringilla massa
              vel dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet
              sed mollis dui. Aenean placerat nec enim ut finibus. Maecenas
              suscipit nibh eu neque egestas, non condimentum mi bibendum. Sed
              est eros, molestie consectetur auctor non, lobortis quis tortor.
              Nam cursus imperdiet massa volutpat hendrerit. Sed suscipit ligula
              iaculis lorem sagittis tincidunt. Etiam pellentesque metus vel
              enim iaculis aliquam. Mauris at nisi sed elit gravida malesuada.
            </p>
            <div className='imageBottom'>
              {img && (
                <div
                  className='imageBot'
                  style={{
                    backgroundImage: `url(${
                      img === 'ShouldIBuyaNewCarorLeaseaNewCarin2021'
                        ? ShouldIBuyaNewCarorLeaseaNewCarin2021BOTTOM
                        : img === 'americanvehiclenumberplates'
                        ? americanvehiclenumberplatesBOTTOM
                        : img === 'WouldyouLetaRobotDriveyourCarOurAIFuture'
                        ? WouldyouLetaRobotDriveyourCarOurAIFutureBOTTOM
                        : img === 'WillElectricTechnologySoonRuleTheRoad'
                        ? WillElectricTechnologySoonRuleTheRoadBOTTOM
                        : americanvehiclenumberplates
                    })`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                ></div>
              )}
            </div>
            <p>This is a small blog post headline</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
              dui auctor dictum eget a elit. Pellentesque varius diam risus, ut
              condimentum lorem volutpat vel. Nam vel orci pharetra eros
              pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
              pretium interdum justo tincidunt a. Donec at congue lectus. Nulla
              facilisi. Phasellus consectetur sapien accumsan lectus tincidunt
              placerat. Etiam ornare nibh vel dui egestas, eu posuere metus
              convallis.
            </p>
            <div className='quote'>
              <div className='stick'></div>

              <p>
                Ut non urna a odio condimentum dictum. Proin egestas erat a orci
                ultrices, vitae bibendum libero posuere. Quisque laoreet
                tincidunt justo. Vestibulum congue dictum libero finibus
                vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis
                mollis ante.
              </p>
            </div>
            <p>
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci
              ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
              justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
              nisi velit, ultricies eget enim vel, venenatis mollis ante.
              Maecenas sodales tristique quam. Suspendisse fringilla massa vel
              dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed
              mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit
              nibh eu neque egestas, non condimentum mi bibendum. Sed est eros,
              molestie consectetur auctor non, lobortis quis tortor. Nam cursus
              imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis
              lorem sagittis tincidunt. Etiam pellentesque metus vel enim
              iaculis aliquam. Mauris at nisi sed elit gravida malesuada.
            </p>
          </div>
        </div>
        <CallToAction />
      </StyledBlogSingle>
    </main>
  );
};

export default BlogSinglePage;
