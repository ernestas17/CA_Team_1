import { useState } from "react";
import { Link } from "react-router-dom";

import companyLogo from "./Logo.png";
import roadAssistanceIcon from "./roadAssistance.png";

import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledBurgerNav,
  StyledNav,
  StyledLinksWrapper,
  StyledAssistanceWrapper,
} from "./Header.style";

const Header = ({ deviceSize }) => {
  // State
  // -- for navigation
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Fuctions
  const handleBurgerNavbar = () => setIsNavbarOpen(!isNavbarOpen);

  return (
    <StyledHeader deviceSize={deviceSize}>
      <StyledHeaderWrapper>
        <img
          src={companyLogo}
          className="companyLogoBlack"
          alt="company logo"
        />

        <StyledBurgerNav>
          <i class="fa-solid fa-bars" onClick={handleBurgerNavbar}></i>

          <ul className={`${isNavbarOpen ? " showMenu" : "hideMenu"}`}>
            <Link to={`/`} onClick={handleBurgerNavbar}>
              Home
            </Link>
            <Link to={`/aboutus`} onClick={handleBurgerNavbar}>
              About us
            </Link>
            <Link to={`/services`} onClick={handleBurgerNavbar}>
              Services
            </Link>
            <Link to={`/blog`} onClick={handleBurgerNavbar}>
              Blog
            </Link>
            <Link to={`/contact`} onClick={handleBurgerNavbar}>
              Contact
            </Link>
          </ul>
        </StyledBurgerNav>

        <StyledNav>
          <StyledLinksWrapper>
            <Link to={`/`}>Home</Link>
            <Link to={`/aboutus`}>About us</Link>
            <Link to={`/services`}>Services</Link>
            <Link to={`/blog`}>Blog</Link>
            <Link to={`/contact`}>Contact</Link>
          </StyledLinksWrapper>

          <StyledAssistanceWrapper>
            <img
              src={roadAssistanceIcon}
              className="roadAssistanceIcon"
              alt="call icon"
            />

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
