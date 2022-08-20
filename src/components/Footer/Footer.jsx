import { Link } from "react-router-dom";

import { StyledWrapper, StyledInnerWrapper } from "./Footer.style";
import logo from "./Logo-white.png";

const Footer = () => {
  return (
    <footer>
      <StyledWrapper>
        <StyledInnerWrapper>
          <div className="logo">
            <img src={logo} className="Web-logo" alt="logo" />
          </div>

          <div className="navigation">
            <Link to={`/`}>Home</Link>
            <Link to={`/aboutus`}>About us</Link>
            <Link to={`/services`}>Services</Link>
            <Link to={`/blog`}>Blog</Link>
            <Link to={`/contact`}>Contact</Link>
          </div>

          <div className="copyright">@ Copyright Finsweet 2021</div>
        </StyledInnerWrapper>
      </StyledWrapper>
    </footer>
  );
};

export default Footer;
