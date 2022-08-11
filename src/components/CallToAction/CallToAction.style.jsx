import styled from 'styled-components';

export const StyledCallToActionContainer = styled.div`
  height: 502px;
  width: 100%;
  background-color: #ff6433;

  .CTAcontainer {
    max-width: 1920px;
    display: flex;
    margin: 0 auto;
  }

  .photo1 {
    width: 976px;
    height: 502px;
    z-index: 1;
  }
  .orange {
    margin-left: 318px;
    width: 729px;
    height: 502px;
    background-color: #ff6433;
    position: absolute;
    z-index: 2;
    .button {
      margin-left: 80px;
    }
    h3 {
      margin: 128px 80px 48px 80px;
      height: 134px;
      width: 620px;
      font-weight: 700;
      font-size: 48px;
      line-height: 67.2px;
      letter-spacing: -3%;
      color: #ffffff;
    }
  }
  .photo2 {
    width: 944px;
    height: 502px;
  }
`;
