import Button from "../Button";

import { StyledCallToActionContainer } from "./CallToAction.style";
import Photo1 from "./photos/Image1.png";
import Photo2 from "./photos/ovGrEUgrkyE.png";

const CallToAction = () => {
  return (
    <>
      <StyledCallToActionContainer>
        <div className="CTAContainer">
          <div className="innerLayout">
            <h3>Get in touch with us for your service related query</h3>
            <Button buttontext="Contact Us" type="secondary" href="/contact" />
          </div>
        </div>

        <div
          className="photoContainer"
          style={{
            backgroundImage: `url(${Photo1})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            backgroundSize: "cover",
          }}
        ></div>

        <div
          className="photoContainer"
          style={{
            backgroundImage: `url(${Photo2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </StyledCallToActionContainer>
    </>
  );
};

export default CallToAction;
