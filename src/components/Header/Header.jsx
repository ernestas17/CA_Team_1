import logo from "./Logo.png";

import { Link } from "react-router-dom";
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledNav,
  StyledLinksWrapper,
  StyledAssistanceWrapper,
} from "./Header.style";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <img src={logo} className="Web-logo" alt="logo" />

        <StyledNav>
          <StyledLinksWrapper>
            <Link to={`/`}>Home</Link>
            <Link to={`/aboutus`}>About us</Link>
            <Link to={`/services`}>Services</Link>
            <Link to={`/blog`}>Blog</Link>
            <Link to={`/contact`}>Contact</Link>
          </StyledLinksWrapper>

          <StyledAssistanceWrapper>
            <i class="fa-solid fa-phone"></i>
            <div>
              <p>Road Assistance</p>
              <p>1800 265 24 52</p>
            </div>
          </StyledAssistanceWrapper>
        </StyledNav>
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
