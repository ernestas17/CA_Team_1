import { StyledLayout, StyledInnerWrapper } from "./ContactUs.style";

const ContactUs = () => {
  return (
    <StyledLayout>
      <StyledInnerWrapper>
        <div className="left">
          <h3>Get in touch with us for your service</h3>
          <div className="socialIcons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
        <div className="right">
          <div className="row">
            <p>Help line Number</p>
            <h6>1800 265 24 52</h6>
          </div>
          <div className="row">
            <p>Address</p>
            <h6>NH 234 Public Square San Francisco 65368</h6>
          </div>
          <div className="row">
            <p>We are open</p>
            <h6>Monday to Friday 9:00 AM to 10:00 AM</h6>
          </div>
        </div>
      </StyledInnerWrapper>
    </StyledLayout>
  );
};

export default ContactUs;
