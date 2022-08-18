import styled from "styled-components";

const device = {
  mobile: `(max-width: 268px)`,
  tablet: `(max-width: 1280px)`,
};

export const StyledHeader = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  background-color: #fff;
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;

  @media ${device.tablet} {
    padding: 24px;
  }

  .companyLogoBlack {
    width: 122px;
  }
`;

export const StyledBurgerNav = styled.div`
  display: none;

  i {
    font-size: 32px;
  }

  .showMenu {
    position: fixed;
    top: 70px;
    right: 0;
    width: 100%;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    gap: 32px;

    padding: 24px 0 32px 0;
    z-index: 9;

    a {
      text-decoration: none;
      color: #1e1b1b;

      font-size: 16px;
      line-height: 28px;
      font-weight: 600;

      text-align: center;

      text-decoration: underline;
      text-underline-position: under left;
      text-decoration-color: #ff6433;
    }

    a:hover {
      color: #ff6433;
    }
  }

  .hideMenu {
    display: none;
  }

  @media ${device.tablet} {
    display: flex;
    align-items: center;
  }
`;

export const StyledNav = styled.div`
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    display: none;
  }
`;

export const StyledLinksWrapper = styled.ul`
  display: flex;
  gap: 40px;
  padding-right: 32px;

  a {
    text-decoration: none;
    color: #1e1b1b;

    font-size: 16px;
    line-height: 28px;
    font-weight: 600;
  }

  a:hover {
    color: #ff6433;
  }
`;

export const StyledAssistanceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  border-left: 1px solid #939191;
  padding-left: 32px;

  .roadAssistanceIcon {
    width: 40px;
    height: 40px;
  }

  div {
    p {
      color: #1e1b1b;
      font-weight: 600;
      font-size: 18px;
      line-height: 32px;
    }

    p:nth-child(1) {
      opacity: 0.7;

      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
