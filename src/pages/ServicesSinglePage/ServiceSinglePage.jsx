import CallToAction from "../../components/CallToAction";
import Card from "../../components/Card";
import ContactUs from "../../components/ContactUs";

import {
  StyledSectionPrimary,
  StyledSectionWrapper,
} from "./ServiceSinglePage.style";

import autoDiagnotcsImage from "./photos/autoDiagnostics.png";
import engineRepairImage from "./photos/engineRepair.jpg";
import baterriesImage from "./photos/batteries.jpg";
import carWashImage from "./photos/carWash.jpg";
import bodyWorkImage from "./photos/bodyWork.jpg";
import acRepairImage from "./photos/acRepair.jpg";
import wheelRepairImage from "./photos/wheelRepair.jpg";
import oilFilterImage from "./photos/oilFilter.jpg";
import insuranceClaimImage from "./photos/insuranceClaim.jpg";

const ServiceSinglePage = ({ title, img }) => {
  return (
    <main>
      <StyledSectionPrimary>
        <StyledSectionWrapper>
          <h3>{title}</h3>

          <div className="layout">
            <div className="left">
              <div className="otherServices">
                <h5>Other services</h5>

                <Card
                  icon={<i class="fa-brands fa-searchengin"></i>}
                  headline="Engine Repair"
                  url="enginerepair"
                />

                <Card
                  icon={<i class="fa-solid fa-car-side"></i>}
                  headline="Car Wash"
                  url="carwash"
                />

                <Card
                  icon={<i class="fa-solid fa-car-battery"></i>}
                  headline="Batteries"
                  url="batteries"
                />
              </div>
              <div className="additionalServices">
                <div className="row">
                  <div className="circle">
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                  </div>
                  <div className="content">
                    <h6>Convenient service</h6>
                    <p>
                      Through True Rich Attended does no end it his mother since
                      real had half every him.
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="circle">
                    <i className="fa-solid fa-circle-user"></i>
                  </div>
                  <div className="content">
                    <h6>Expert mechanics</h6>
                    <p>
                      Through True Rich Attended does no end it his mother since
                      real had half every him.
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="circle">
                    <i className="fa-solid fa-circle-dollar-to-slot"></i>
                  </div>
                  <div className="content">
                    <h6>Transparent pricing</h6>
                    <p>
                      Through True Rich Attended does no end it his mother since
                      real had half every him.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              {img && (
                <div
                  className="imageAutoDiagnostics"
                  style={{
                    backgroundImage: `url(${
                      img === "enginerepair"
                        ? engineRepairImage
                        : img === "batteries"
                        ? baterriesImage
                        : img === "carwash"
                        ? carWashImage
                        : img === "autodiagnostics"
                        ? autoDiagnotcsImage
                        : img === "bodywork"
                        ? bodyWorkImage
                        : img === "acrepair"
                        ? acRepairImage
                        : img === "wheelrepair"
                        ? wheelRepairImage
                        : img === "oilfilter"
                        ? oilFilterImage
                        : img === "insuranceclaim"
                        ? insuranceClaimImage
                        : autoDiagnotcsImage
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left",
                    backgroundSize: "cover",
                  }}
                ></div>
              )}

              <h3>
                The warning lights on your dashboard are the most obvious
                starting point.
              </h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
                dui auctor dictum eget a elit. Pellentesque varius diam risus,
                ut condimentum lorem volutpat vel. Nam vel orci pharetra eros
                pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
                pretium interdum justo tincidunt a. Donec at congue lectus.
                Nulla facilisi. Phasellus consectetur sapien accumsan lectus
                tincidunt placerat. Etiam ornare nibh vel dui egestas, eu
                posuere metus convallis.
              </p>
              <p>
                Ut non urna a odio condimentum dictum. Proin egestas erat a orci
                ultrices, vitae bibendum libero posuere. Quisque laoreet
                tincidunt justo. Vestibulum congue dictum libero finibus
                vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis
                mollis ante. Maecenas sodales tristique quam. Suspendisse
                fringilla massa vel dolor ornare rhoncus. Nullam ut orci mattis
                leo varius laoreet sed mollis dui. Aenean placerat nec enim ut
                finibus. Maecenas suscipit nibh eu neque egestas, non
                condimentum mi bibendum. Sed est eros, molestie consectetur
                auctor non, lobortis quis tortor. Nam cursus imperdiet massa
                volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
                tincidunt. Etiam pellentesque metus vel enim iaculis aliquam.
                Mauris at nisi sed elit gravida malesuada.
              </p>

              <h4>
                Delaying a diagnosis and repair could lead to even bigger
                problems down the road.
              </h4>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
                dui auctor dictum eget a elit. Pellentesque varius diam risus,
                ut condimentum lorem volutpat vel. Nam vel orci pharetra eros
                pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
                pretium interdum justo tincidunt a. Donec at congue lectus.
                Nulla facilisi. Phasellus consectetur sapien accumsan lectus
                tincidunt placerat. Etiam ornare nibh vel dui egestas, eu
                posuere metus convallis.
              </p>

              <div className="innerLayout">
                <h6>
                  Ut non urna a odio condimentum dictum. Proin egestas erat a
                  orci ultrices, vitae bibendum libero posuere. Quisque laoreet
                  tincidunt justo. Vestibulum congue dictum libero finibus
                  vehicula. Aliquam nisi velit, ultricies eget enim vel,
                  venenatis mollis ante.
                </h6>
              </div>
            </div>
          </div>
        </StyledSectionWrapper>
      </StyledSectionPrimary>

      <CallToAction />
      <ContactUs />
    </main>
  );
};

export default ServiceSinglePage;
