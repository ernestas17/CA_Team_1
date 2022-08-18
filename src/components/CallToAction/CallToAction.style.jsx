import styled from 'styled-components';
const device = {
  mobile: `(max-width: 628px)`,

  tablet: `(max-width: 1280px)`,
};

export const StyledCallToActionContainer = styled.div`
  height: 502px;
  width: 100%;
  background-color: #ff6433;

  @media only screen and (max-width: 640px) {
    height: 300px;
    .CTAcontainer {
      max-width: 100%;
      display: flex;
      margin: 0 auto;
    }

    .orange {
      margin-left: 0px;
      width: 100%;
      height: 300px;
      background-color: #ff6433;
      opacity: 1;
      position: absolute;
      z-index: 2;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .button {
        display: flex;
        justify-content: center;
      }
      h3 {
        text-align: center;
        margin: 0;
        height: 134px;
        width: 300px;
        font-weight: 700;
        font-size: 22px;
        line-height: 40px;
        letter-spacing: -3%;
        color: #ffffff;
      }
    }
    .photo2 {
      display: none;
    }
  }

  @media only screen and (min-width: 641px) {
    height: 300px;
    .photo1 {
      position: absolute;
      width: 30%;
      height: 300px;
      z-index: 1;
    }
    .orange {
      margin-left: 30%;
      width: 100%;
      height: 300px;
      background-color: #ff6433;
      opacity: 1;
      position: absolute;
      z-index: 2;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .button {
        width: 100%;
        margin-top: 50px;
      }
      h3 {
        text-align: start;
        margin: 0;
        height: 134px;
        width: 40%;
        font-weight: 700;
        font-size: 28px;
        line-height: 40px;
        letter-spacing: -3%;
        color: #ffffff;
      }
    }
  }
  @media only screen and (min-width: 1064px) {
    .photo1 {
      width: 17%;
      height: 502px;
      z-index: 1;
    }
    .orange {
      margin-left: 17%;
      width: 42%;
      height: 502px;
      background-color: #ff6433;
      position: absolute;
      z-index: 4;
      .orange-wrapper {
        margin: 60px 80px 48px 80px;
      }
      justify-content: flex-start;
      .button {
        width: 60%;
        margin-top: 48px;
      }
      h3 {
        text-align: start;
        margin: 0;
        height: 134px;
        width: 80%;

        font-weight: 700;
        font-size: 32px;
        line-height: 32.2px;
        letter-spacing: -3%;
        color: #ffffff;
      }
    }
    .photo2 {
      float: right;
      width: 50%;
      height: 502px;
      z-index: 1;
    }
  }
  /* Desktop */
  @media only screen and (min-width: 1920px) {
    .photo1 {
      width: 17%;
      height: 502px;
      z-index: 1;
      background-repeat: no-repeat;
    }
    .orange {
      margin-left: 17%;
      width: 42%;
      height: 502px;
      background-color: #ff6433;
      position: absolute;
      z-index: 4;
      .orange-wrapper {
        margin: 128px 80px 48px 80px;
      }
      justify-content: flex-start;
      .button {
        width: 60%;
        margin-top: 48px;
      }
      h3 {
        text-align: start;
        margin: 0;
        height: 134px;
        width: 100%;
        font-weight: 700;
        font-size: 48px;
        line-height: 67.2px;
        letter-spacing: -3%;
        color: #ffffff;
      }
    }
    .photo2 {
      float: right;
      width: 41%;
      height: 502px;
      z-index: 1;
      background-repeat: no-repeat;
    }
  }
`;
