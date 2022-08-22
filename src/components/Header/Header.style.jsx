import styled from "styled-components";

const device = {
  mobile: `(max-width: 268px)`,
  tablet: `(max-width: 1280px)`,
};

export const StyledHeader = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  background-color: ${(props) => props.theme.primary.colors.light};
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
    background-color: ${(props) => props.theme.primary.colors.light};

    display: flex;
    flex-direction: column;
    gap: 32px;

    padding: 24px 0 32px 0;
    z-index: 9;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.primary.colors.dark};

      font-weight: ${(props) =>
        props.theme.primary.paragraphs.medium.fontWeight};
      font-size: ${(props) => props.theme.primary.paragraphs.medium.fontSize};
      line-height: ${(props) =>
        props.theme.primary.paragraphs.medium.lineHeaght};

      text-align: center;

      text-decoration: underline;
      text-underline-position: under left;
      text-decoration-color: ${(props) => props.theme.primary.colors.primary};
    }

    a:hover {
      color: ${(props) => props.theme.primary.colors.primary};
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
    color: ${(props) => props.theme.primary.colors.dark};

    font-weight: ${(props) => props.theme.primary.paragraphs.medium.fontWeight};
    font-size: ${(props) => props.theme.primary.paragraphs.medium.fontSize};
    line-height: ${(props) => props.theme.primary.paragraphs.medium.lineHeaght};
  }

  a:hover {
    color: ${(props) => props.theme.primary.colors.primary};
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
      color: ${(props) => props.theme.primary.colors.dark};

      font-weight: ${(props) =>
        props.theme.primary.paragraphs.large.fontWeight};
      font-size: ${(props) => props.theme.primary.paragraphs.large.fontSize};
      line-height: ${(props) =>
        props.theme.primary.paragraphs.large.lineHeaght};
    }

    p:nth-child(1) {
      opacity: 0.7;

      font-weight: ${(props) =>
        props.theme.primary.paragraphs.small.fontWeight};
      font-size: ${(props) => props.theme.primary.paragraphs.small.fontSize};
      line-height: ${(props) =>
        props.theme.primary.paragraphs.small.lineHeaght};
    }
  }
`;
