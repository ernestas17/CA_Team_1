import Button from "../../components/Button";
import Card from "../../components/Card";
import {
  StyledSectionPrimary,
  StyledSectionSecondary,
  StyledSectionWrapper,
} from "./ServicesPage.style";

import ourServicesImage from "./photos/ourServices.jpg";
import autoDiagnosticsImage from "./photos/autoDiagnostics.png";
import howWeWork1 from "./photos/howWeWork1.png";
import howWeWork2 from "./photos/howWeWork2.png";
import howWeWork3 from "./photos/howWeWork3.png";
import howWeWork4 from "./photos/howWeWork4.png";

const ServicesPage = () => {
  return (
    <>
      <main>
        <StyledSectionPrimary>
          <StyledSectionWrapper>
            <div
              className="imageOurServices"
              style={{
                backgroundImage: `url(${ourServicesImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left",
                backgroundSize: "cover",
              }}
            ></div>

            <div className="ourServices">
              <h4>Our services</h4>
              <p>
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw Through True Rich Attended does
              </p>
              <Button buttontext="Book a service" type="primary" />
            </div>
          </StyledSectionWrapper>
        </StyledSectionPrimary>

        <StyledSectionSecondary>
          <StyledSectionWrapper>
            <div className="layout">
              <div className="autoDiagnostics">
                <div className="imageAutoDiagnostics">
                  <img
                    src={autoDiagnosticsImage}
                    alt="auto diagnostics image"
                  />
                </div>

                <h4>Auto Diagnostics</h4>
                <p>
                  Through True Rich Attended does no end it his mother since
                  favourable real had half every him case in packages enquire we
                  up ecstatic. Through True Rich Attended does no end it his
                  mother.
                </p>

                <div className="autoDiagnosticsCTA">
                  <p>See service details</p>
                  <i class="fa-solid fa-right-long"></i>
                </div>
              </div>

              <div className="cardsContainer">
                <div className="cardWrapper">
                  <Card
                    icon={<i class="fa-solid fa-eye"></i>}
                    headline="Diagnostics"
                  />
                </div>
                <div className="cardWrapper">
                  <Card
                    icon={<i class="fa-brands fa-searchengin"></i>}
                    headline="Engine Repair"
                  />
                </div>
                <div className="cardWrapper">
                  <Card
                    icon={<i class="fa-solid fa-car-on"></i>}
                    headline="Body Work"
                  />
                </div>
                <div className="cardWrapper">
                  <Card
                    icon={<i class="fa-solid fa-car-battery"></i>}
                    headline="Batteries"
                  />
                </div>
                <div className="cardWrapper">
                  <Card
                    icon={<i class="fa-solid fa-car-side"></i>}
                    headline="Car Wash"
                  />
                </div>
                <div className="cardWrapper">
                  <Card
                    icon={<i class="fa-brands fa-searchengin"></i>}
                    headline="AC Repair"
                  />
                </div>
              </div>
            </div>
          </StyledSectionWrapper>
        </StyledSectionSecondary>

        <StyledSectionPrimary>
          <StyledSectionWrapper>
            <div className="containerHowWeWork">
              <div className="containerHowWeWorkTextLayout">
                <h4>How we work and the process we follow</h4>
                <div className="list">
                  <div className="listRow">
                    <i class="fa-solid fa-circle-check"></i>
                    <p>
                      Through True Rich Attended does no end it his mother since
                    </p>
                  </div>
                  <div className="listRow">
                    <i class="fa-solid fa-circle-check"></i>
                    <p>
                      Attended does no end it his mother since real had half
                      every
                    </p>
                  </div>
                  <div className="listRow">
                    <i class="fa-solid fa-circle-check"></i>
                    <p>
                      Since real had half every him case in packages enquire we
                      up ecstatic
                    </p>
                  </div>
                </div>
              </div>
              <div className="containerHowWeWorkImagesLayout">
                <img src={howWeWork1} alt="how we work image" />
                <img src={howWeWork2} alt="how we work image" />
              </div>
              <div className="containerHowWeWorkImagesLayout">
                <img src={howWeWork3} alt="how we work image" />
                <img src={howWeWork4} alt="how we work image" />
              </div>
              <div className="containerHowWeWorkTextLayout">
                <h4>Diagnose Car Problems If You Don't Know Much About Cars</h4>
                <p>
                  We provide a full range of front end mechanical repairs for
                  all makes and models of cars, no matter the cause. This
                  includes everything from struts, shocks, and tie rod ends to
                  ball joints, springs everything from struts, shocks, and tie
                  rod ends to ball joints, springs
                </p>
                <Button buttontext="Book a service" type="primary" />
              </div>
            </div>
          </StyledSectionWrapper>
        </StyledSectionPrimary>
      </main>
    </>
  );
};

export default ServicesPage;
