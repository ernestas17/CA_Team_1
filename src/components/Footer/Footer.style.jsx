import styled from 'styled-components';

export const StyledFooter = styled.div`
  width: 100%;
  height: 706px;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

// ---------------- Footer Top

export const StyledFooterTopWrapper = styled.div`
  background-color: #1e1b1b;
  opacity: 0.98;
  height: 549px;
  width: 100%;
`;

// ----- Footer Top Left
export const StyledFooterTopLeft = styled.div`
  width: 463px;
  height: 222px;

  position: absolute;
  left: 320px;
  top: 228px;
  h3 {
    color: #ffffff;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 140%;
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
`;

// ----- Footer Top Right

export const StyledFooterTopRight = styled.div`
  width: 471px;
  height: 292px;

  position: absolute;
  left: 976px;
  top: 228px;
`;

export const StyledFooterTopRightHelp = styled.div`
  margin-bottom: 32px;
  p {
    color: #ffffff;
    font-family: 'Manrope';
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
`;
export const StyledFooterTopRightAdress = styled.div`
  margin-bottom: 32px;
  p {
    color: #ffffff;
    font-family: 'Manrope';
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
`;
export const StyledFooterTopRightOpenTime = styled.div`
  p {
    color: #ffffff;
    font-family: 'Manrope';
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
`;

// ---------------- Footer Bottom

export const StyledFooterBottom = styled.div`
  background-color: #1e1b1b;
  height: 157px;
  width: 1920px;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  img {
    width: 122px;
  }
`;

export const StyledFooterBottomWrapper = styled.div`
  margin: 0 auto;

  max-width: 1280px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

export const StyledFooterBottomCopyRight = styled.div`
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: #939191;
  }
`;
