import styled from 'styled-components';

const device = {
  mobile: `(max-width: 628px)`,

  tablet: `(max-width: 1280px)`,
};

export const StyledFooter = styled.div`
  height: 706px;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media ${device.tablet} {
  }
  @media ${device.mobile} {
    height: auto;
    width: 100%;
  }
`;

// ---------------- Footer Top

export const StyledFooterTopWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  height: 549px;

  display: flex;

  @media ${device.tablet} {
    width: 90%;
  }
  @media ${device.mobile} {
    width: 100%;
    flex-direction: column;
  }
`;

export const StyledFooterTopWrapperOut = styled.div`
  width: 100%;
  background-color: #1e1b1b;
  opacity: 0.98;
`;

// ----- Footer Top Left

export const StyledFooterTopLeft = styled.div`
  width: 463px;
  height: 222px;

  margin-top: 128px;

  h3 {
    color: #ffffff;

    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 140%;
  }

  @media ${device.tablet} {
    width: 50%;

    h3 {
      font-size: 38px;
    }
  }
  @media ${device.mobile} {
    margin-top: 50px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      text-align: center;
      width: 80%;
      font-size: 24px;
    }
  }
`;
export const StyledFooterTopLeftIcons = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: flex-end;

  gap: 23.67px;

  i {
    height: 23.85px;
    width: 24px;
    color: #ffffff;
  }

  i:hover {
    color: #ff6433;
  }

  @media ${device.tablet} {
  }
  @media ${device.mobile} {
    width: auto;
    i {
      text-align: center;
    }
  }
`;

// ----- Footer Top Right

export const StyledFooterTopRight = styled.div`
  width: 471px;
  height: 292px;

  margin-top: 128px;
  margin-left: 192px;

  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.mobile} {
    height: auto;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 25px;
  }
`;

export const StyledFooterTopRightHelp = styled.div`
  margin-bottom: 32px;
  p {
    color: #ffffff;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }

  p:nth-child(1) {
    opacity: 0.6;

    color: #ffffff;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 31.5px;
  }

  @media ${device.tablet} {
  }
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;

    justify-items: center;
    align-items: center;
    p {
      font-size: 16px;
    }

    p:nth-child(1) {
      font-size: 12px;
    }
  }
`;
export const StyledFooterTopRightAdress = styled.div`
  margin-bottom: 32px;
  p {
    color: #ffffff;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }

  p:nth-child(1) {
    opacity: 0.6;
    color: #ffffff;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 31.5px;
  }
  @media ${device.tablet} {
  }
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;

    justify-items: center;
    align-items: center;
    p {
      text-align: center;
      width: 50%;
      font-size: 16px;
    }

    p:nth-child(1) {
      font-size: 12px;
    }
  }
`;
export const StyledFooterTopRightOpenTime = styled.div`
  p {
    color: #ffffff;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }

  p:nth-child(1) {
    opacity: 0.6;
    color: #ffffff;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 31.5px;
  }
  @media ${device.tablet} {
  }
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;

    justify-items: center;
    align-items: center;
    p {
      width: 50%;
      text-align: center;
      font-size: 15px;
    }

    p:nth-child(1) {
      font-size: 12px;
    }
  }
`;

// ---------------- Footer Bottom
export const StyledFooterBottomWrapperOut = styled.div`
  background-color: #1e1b1b;
  width: 100%;
`;

export const StyledFooterBottom = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  height: 157px;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  img {
    width: 122px;
  }
  @media ${device.tablet} {
    width: 90%;
    img {
      width: 80px;
    }
  }
  @media ${device.mobile} {
    height: auto;
    img {
      width: 66px;
      margin-bottom: 10px;
    }
  }
`;

export const StyledFooterBottomWrapper = styled.div`
  margin: 0 auto;

  max-width: 1280px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
  }
  @media ${device.mobile} {
    flex-direction: column;

    img {
      margin-top: 25px;
    }
  }
`;

export const StyledFooterBottomLinks = styled.ul`
  display: flex;
  gap: 40px;
  padding-right: 32px;

  a {
    text-decoration: none;
    color: #ffffff;

    font-size: 16px;
    line-height: 28px;
    font-weight: 600;
  }

  a:hover {
    color: #ff6433;
  }
  @media ${device.tablet} {
    a {
      font-size: 14px;
    }
  }
  @media ${device.mobile} {
    display: none;
  }
`;

export const StyledFooterBottomCopyRight = styled.div`
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: #939191;
  }

  @media ${device.tablet} {
    p {
      font-size: 12px;
    }
  }
`;
