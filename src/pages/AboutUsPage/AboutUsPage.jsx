import {
  StyledSectionPrimary,
  StyledSectionSecondary,
  StyledSectionWrapper,
  StyledSectionThreeDivBanner,
} from "./AboutUsPage.style";

import aboutUsImage from "./photos/aboutUs.png";
import expertServiceImage from "./photos/expertService.png";
import circle1Image from "./photos/circle1.png";
import circle2Image from "./photos/circle2.png";
import circle3Image from "./photos/circle3.png";
import orangeImage from "./photos/orangeImage.png";
import blackImage from "./photos/blackImage.png";
import purpleImage from "./photos/purpleImage.png";
import team1Image from "./photos/team1.png";
import team2Image from "./photos/team2.png";
import team3Image from "./photos/team3.png";
import team4Image from "./photos/team4.png";
import team5Image from "./photos/team5.png";
import team6Image from "./photos/team6.png";

import Button from "../../components/Button";
import ContactUs from "../../components/ContactUs";
import CallToAction from "../../components/CallToAction/CallToAction";
import TeamMemberCard from "./components/TeamMemberCard";
import ServiceCard from "./components/ServiceCard";

const AboutUsPage = () => {
  return (
    <>
      <main>
        <StyledSectionPrimary>
          <StyledSectionWrapper>
            <div className="aboutUsLayoutContainer">
              <div className="aboutUsContainer">
                <div
                  className="imageAboutUs"
                  style={{
                    backgroundImage: `url(${aboutUsImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="textsAboutUs">
                  <h4>About us</h4>
                  <p>
                    Through True Rich Attended does no end it his mother since
                    real had half every him case in packages enquire we up
                    ecstatic unsatiable saw Through True Rich Attended does{" "}
                  </p>
                  <Button
                    buttontext="Book a service"
                    type="primary"
                    href="/services"
                  />
                </div>
              </div>
              <div className="expertServiceContainer">
                <div className="textsExpertService">
                  <h4>
                    We Provide Expert Service and aim to have a long term with
                    you
                  </h4>
                  <p>
                    We provide a full range of front end mechanical repairs for
                    all makes and models of cars, no matter
                  </p>

                  <div className="listContainer">
                    <div className="listContainerRow">
                      <div className="listContainerRowLeft">
                        <img src={circle1Image} alt="number 1 image" />

                        <div className="lineContainer">
                          <div></div>
                        </div>
                      </div>
                      <div className="listContainerRowRight">
                        <h5>Get a Quote</h5>
                        <p>
                          Through True Rich Attended does no end it his mother
                          since real had half every
                        </p>
                      </div>
                    </div>

                    <div className="listContainerRow">
                      <div className="listContainerRowLeft">
                        <img src={circle2Image} alt="number 2 image" />

                        <div className="lineContainer">
                          <div></div>
                        </div>
                      </div>
                      <div className="listContainerRowRight">
                        <h5>Book an Appointment</h5>
                        <p>
                          Through True Rich Attended does no end it his mother
                          since real
                        </p>
                      </div>
                    </div>

                    <div className="listContainerRow">
                      <div className="listContainerRowLeft">
                        <img src={circle3Image} alt="number 3 image" />

                        <div className="lineContainer"></div>
                      </div>
                      <div className="listContainerRowRight">
                        <h5>Get your Service Done</h5>
                        <p>
                          Ecstatic unsatiable saw his giving Remain expense you
                          position concluded.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="imageExpertService">
                  <img src={expertServiceImage} alt="expert service image" />
                </div>
              </div>
            </div>
          </StyledSectionWrapper>
        </StyledSectionPrimary>

        <StyledSectionThreeDivBanner>
          <div
            className="colorContainer"
            style={{
              backgroundImage: `linear-gradient(
                rgba(248, 91, 41, 0.9), rgba(248, 91, 41, 0.9)
              ), url(${orangeImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <h6>Serve our customers and always deliver the customer service</h6>
            <p>
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes
            </p>
          </div>
          <div
            className="colorContainer"
            style={{
              backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)
              ), url(${blackImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <h6>
              To be the world's most eader in automotive business solutions.
            </h6>
            <p>
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes
            </p>
          </div>
          <div
            className="colorContainer"
            style={{
              backgroundImage: `linear-gradient(
                rgba(116, 67, 202, 0.9), rgba(116, 67, 202, 0.9)
              ), url(${purpleImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <h6>
              We value the service we provide and our loyal returning customers
            </h6>
            <p>
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes
            </p>
          </div>
        </StyledSectionThreeDivBanner>

        <StyledSectionSecondary>
          <StyledSectionWrapper>
            <div className="servicesLayoutContainer">
              <h3>Services we provide to our valued customers</h3>
              <div className="layout">
                <div className="serviceCard">
                  <ServiceCard
                    icon="fa-solid fa-screwdriver-wrench"
                    headline="Convenient Service"
                    about="Through True Rich Attended does no end it his mother since
                    real had half every him end it his mother"
                  />
                </div>

                <div className="serviceCard">
                  <ServiceCard
                    icon="fa-solid fa-circle-user"
                    headline="Expert Mechanics"
                    about="hrough True Rich Attended does no end it his mother since
                  real had half every him end it his mother"
                  />
                </div>

                <div className="serviceCard">
                  <ServiceCard
                    icon="fa-solid fa-circle-dollar-to-slot"
                    headline="Transparent Pricing"
                    about="Through True Rich Attended does no end it his mother since
                    real had half every him end it his mother"
                  />
                </div>
              </div>

              <div className="numbersContainer">
                <div>
                  <div className="number">20+</div>
                  <p>Proffesionals</p>
                </div>

                <div>
                  <div className="number">10+</div>
                  <p>Years Eperience</p>
                </div>

                <div>
                  <div className="number">12K+</div>
                  <p>Services Closed</p>
                </div>

                <div>
                  <div className="number">100%</div>
                  <p>Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </StyledSectionWrapper>
        </StyledSectionSecondary>

        <StyledSectionPrimary>
          <StyledSectionWrapper>
            <div className="meetOurTeamContainer">
              <h3>Meet our Team</h3>
              <div className="layout">
                <TeamMemberCard
                  name="Javena Melo"
                  about="Founder, Director"
                  image={team1Image}
                />

                <TeamMemberCard
                  name="Paul Honson"
                  about="Head Technician"
                  image={team2Image}
                />
                <TeamMemberCard
                  name="Devon Lane"
                  about="Technician"
                  image={team3Image}
                />
                <TeamMemberCard
                  name="Jalen Davies"
                  about="Marketing Manager"
                  image={team4Image}
                />
                <TeamMemberCard
                  name="Kylee Danford"
                  about="Sales Manager"
                  image={team5Image}
                />
                <TeamMemberCard
                  name="Luisa Wilson"
                  about="Support Assistant"
                  image={team6Image}
                />
              </div>
            </div>
          </StyledSectionWrapper>
        </StyledSectionPrimary>

        {/* <CallToAction /> */}
        <ContactUs />
      </main>
    </>
  );
};

export default AboutUsPage;
