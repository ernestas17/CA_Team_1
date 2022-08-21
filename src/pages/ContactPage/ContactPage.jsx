import Button from "../../components/Button";
import Map from "./components/Map";

import {
  StyledSectionPrimary,
  StyledSectionWrapper,
  StyledMapSection,
} from "./ContactPage.style";
import contactUsBackgroundImage from "./photos/contactUsBackground.png";

const ContactPage = () => {
  return (
    <main>
      <StyledSectionPrimary>
        <StyledSectionWrapper>
          <h2>Get in touch with our experts</h2>
          <div className="layout">
            <div className="form">
              <div className="inputs">
                <input type="text" placeholder="Your full Name"></input>
                <input type="text" placeholder="Your Email"></input>
                <input type="text" placeholder="Select service type"></input>
                <input type="text" placeholder="Message"></input>
              </div>

              <Button type="primary" buttontext="Send message" />
            </div>
            <div className="moreInformation">
              <div>
                <p>Address</p>
                <h6>NH 234 Public Square San Francisco 65368</h6>
              </div>
              <div>
                <p>Contact Details</p>
                <h6>
                  1800 265 24 52 <br />
                  Finsweet@gmail.com
                </h6>
              </div>
              <div>
                <p>Opening Hours</p>
                <h6>Monday to Friday 9:00 AM to 10:00 AM</h6>
              </div>
            </div>
          </div>
        </StyledSectionWrapper>
      </StyledSectionPrimary>

      <StyledSectionPrimary>
        <StyledMapSection>
          <div className="innerLayout">
            <div className="mapContainer">
              <Map />
            </div>
            <div
              className="backgroundImage"
              style={{
                backgroundImage: `url(${contactUsBackgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center 100%",
                backgroundSize: "cover",
                width: "100%",
                height: "448px",
              }}
            ></div>
          </div>
        </StyledMapSection>
      </StyledSectionPrimary>
    </main>
  );
};

export default ContactPage;
