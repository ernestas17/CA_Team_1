import logo from './Logo-white.png';

import { Link } from 'react-router-dom';

import {
  StyledFooter,
  StyledFooterTopWrapper,
  StyledFooterTopLeft,
  StyledFooterTopLeftIcons,
  StyledFooterTopRight,
  StyledFooterTopRightHelp,
  StyledFooterTopRightAdress,
  StyledFooterTopRightOpenTime,
  StyledFooterBottom,
  StyledFooterBottomWrapper,
  StyledFooterBottomLinks,
  StyledFooterBottomCopyRight,
} from './Footer.style';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterTopWrapper>
        <StyledFooterTopLeft>
          <h3>Get in touch with us for your service</h3>
          <StyledFooterTopLeftIcons>
            <i class='fa-brands fa-facebook'></i>
            <i class='fa-brands fa-twitter'></i>
            <i class='fa-brands fa-instagram'></i>
            <i class='fa-brands fa-linkedin'></i>
          </StyledFooterTopLeftIcons>
        </StyledFooterTopLeft>
        <StyledFooterTopRight>
          <StyledFooterTopRightHelp>
            <p>Help line Noumber</p>
            <p>1800 265 24 52</p>
          </StyledFooterTopRightHelp>
          <StyledFooterTopRightAdress>
            <p>Adress</p>
            <p>NH 234 Public Square San Francisco 65368</p>
          </StyledFooterTopRightAdress>
          <StyledFooterTopRightOpenTime>
            <p>We are open</p>
            <p>Monday to Friday 9:00 AM to  10:00  AM</p>
          </StyledFooterTopRightOpenTime>
        </StyledFooterTopRight>
      </StyledFooterTopWrapper>
      <StyledFooterBottom>
        <StyledFooterBottomWrapper>
          <img src={logo} className='Web-logo' alt='logo' />
          <StyledFooterBottomLinks>
            <Link to={`/`}>Home</Link>
            <Link to={`/aboutus`}>About us</Link>
            <Link to={`/services`}>Services</Link>
            <Link to={`/blog`}>Blog</Link>
            <Link to={`/contact`}>Contact</Link>
          </StyledFooterBottomLinks>
          <StyledFooterBottomCopyRight>
            <p>@ Copyright Finsweet 2021</p>
          </StyledFooterBottomCopyRight>
        </StyledFooterBottomWrapper>
      </StyledFooterBottom>
    </StyledFooter>
  );
};

export default Footer;
