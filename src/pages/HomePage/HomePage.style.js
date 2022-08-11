import styled from 'styled-components';

// -------------------- Header

export const StyledHomeHeader = styled.div`
  height: 632px;
  margin-top: 80px;
  margin-bottom: 128px;

  .StyledHomeHeaderWrapper {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
  }
  .StyledHomeHeaderText {
    margin-top: 44px;
    width: 624px;
    height: 452px;

    h1 {
      font-weight: 800;
      font-size: 64px;
      line-height: 84px;
      letter-spacing: -3%;
    }
  }
  .StyledHomeHeaderTextOpen {
    display: flex;
    align-items: center;
    margin-top: 48px;

    div i {
      font-size: 31px;
      color: #e2e6e9;
    }
  }

  .StyledHomeHeaderTextInside {
    margin-left: 13px;

    p {
      margin: 0;
      color: #1e1b1b;
      font-weight: 600;
      font-size: 18px;
      line-height: 31.5px;
    }

    p:nth-child(1) {
      color: #939191;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -3%;
    }
  }

  .StyledHomeHeaderImage {
    margin-left: 51px;
    position: relative;

    display: flex;
    flex-direction: column;

    width: 605px;
    height: 632px;

    color: white;
    font-size: 48px;
    background-repeat: no-repeat;
  }

  .StyledHomeHeaderImageTextCircleShadow {
    margin-left: 50px;

    margin-left: 0px;
    height: 124px;
    width: 301.64px;
    border-radius: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(225, 225, 225, 0.43);

    margin-top: 70px;
    margin-right: 10px;
  }
  .StyledHomeHeaderImageTextCircle {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 102px;
    width: 281.64px;
    background-color: #ffffff;
    border-radius: 118px;

    stroke: solid;

    color: #1e1b1b;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -3%;
  }
  .StyledHomeHeaderImageGreenCircle {
    background-color: #5cba99;
    height: 70px;
    width: 69.66px;
    margin-right: 14.41px;

    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;

    p {
      color: #ffffff;
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
    }

    p:nth-child(1) {
      color: #ffffff;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      letter-spacing: -3%;
    }
  }
  .StyledHomeHeaderImageCircleSecondShadow {
    margin-top: 260px;
    margin-left: 300px;

    height: 124px;
    width: 348px;
    border-radius: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(225, 225, 225, 0.43);
  }
  .StyledHomeHeaderImageCircleSecondInside {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 102px;
    width: 326px;
    background-color: #ffffff;
    border-radius: 118px;

    stroke: solid;

    color: #1e1b1b;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -3%;
  }
  .StyledHeaderSecondText {
    p {
      margin: 0;
      color: #000000;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      margin-right: 15px;
    }

    p:nth-child(1) {
      margin: 0;
      color: #000000;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      letter-spacing: -3%;
    }
  }
  .StyledHeaderSecondStars {
    display: flex;
    color: #ffb648;

    font-size: 36px;
  }
`;

// -------------------- Quote

export const StyledQuote = styled.div`
  height: 894px;
  background-color: #e2e6e9;

  .StyledQuoteMargins {
    max-width: 1280px;
    height: 100%;

    gap: 91px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .StyledQuoteLeft {
    height: 638px;
    width: 584px;

    h2 {
      margin: 0;
      margin-bottom: 53px;
      font-weight: 800;
      font-size: 58px;
      line-height: 76px;
      letter-spacing: -3%;

      text-shadow: 0px 4px rgba(0, 0, 0, 0.25);

      border: 1px #000000;
    }
  }

  .StyledQuoteLeftFeature {
    height: 105px;
    width: 385px;
    gap: 16px;
    display: flex;
    margin-bottom: 32px;
  }
  .StyledQuoteLeftFeatureCircle {
    height: 47px;
    width: 95px;
    background-color: #ffffff;
    border-radius: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .StyledQuoteLeftFeatureText {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    p {
      margin: 0;

      color: #000000;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }

    p:nth-child(1) {
      color: #000000;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      letter-spacing: -3%;
    }
  }
  .StyledQuoteLeftBottom {
    display: flex;

    align-items: center;
    gap: 21px;

    margin-left: 62px;
    margin-bottom: 128px;

    p {
      margin: 0;
      margin-top: 0;
      font-size: 18px;
      line-height: 31.5px;
      font-weight: 600;
      color: #1e1b1b;
      text-align: center;
    }

    img {
      height: 10px;
      width: 52px;
    }
  }

  .StyledQuoteRight {
    height: 638px;
    width: 625px;

    h3 {
      margin: 0;
      margin-bottom: 32px;

      font-weight: 700;
      font-size: 48px;
      line-height: 67.2px;
      letter-spacing: -3%;
      color: #1e1b1b;
    }
  }
  .StyledQuoteRightInput {
    height: 72px;
    border-radius: 2px;
    width: 624px;
    border: none;
    margin-bottom: 4px;
    ::placeholder {
      color: #1e1b1b;
      padding: 40px;
    }
  }
  .StyledQuoteRightButtonContainer {
    margin-top: 32px;
  }
`;

// -------------------- Process Section

export const StyledProcessSection = styled.div`
  max-width: 1280px;
  margin: 128px auto;

  .StyledProcessSectionMargins {
    height: 527px;
    width: 1087px;
    display: flex;
    gap: 131px;
  }

  .StyledProcessSectionLeft {
    width: 524px;
    height: 396px;
    h2 {
      margin: 0;
      font-weight: 800;
      font-size: 54px;
      line-height: 76px;
      letter-spacing: -3%;
    }

    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
      color: #1e1b1b;
      margin-bottom: 32px;
    }
  }

  .StyledProcessSectionRight {
    width: 432px;
    height: 527px;
  }

  .StyledProcessSectionRightStep {
    height: 165px;
    width: 432px;

    margin-bottom: 16px;
    display: flex;
    gap: 24px;

    .StyledProcessSectionRightStep {
      height: 165px;
      width: 432px;

      margin-bottom: 16px;
      display: flex;
      gap: 24px;
    }
    .StyledProcessSectionRightCircleWrapper {
      text-align: center;
      img {
        margin-top: 19px;
      }
    }
    .StyledProcessSectionRightCircle {
      height: 72px;
      width: 72px;
      background-color: #661ce7;
      border-radius: 100px;

      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-weight: 600;
      font-size: 32px;
    }
    .StyledProcessSectionRightText {
      margin-top: 13px;

      display: flex;
      flex-direction: column;
      p {
        margin: 0;
      }
      p:nth-child(2) {
        color: #1e1b1b;
        font-weight: 600;
        font-size: 18px;
        line-height: 31.5px;
        opacity: 68%;
      }

      p:nth-child(1) {
        color: #000000;
        font-weight: 700;
        font-size: 30px;
        line-height: 48px;
        letter-spacing: -3%;
        margin-bottom: 15px;
      }
    }
  }
`;

// -------------------- Offer
export const StyledOffer = styled.div`
  background-color: #f2f2f2;

  .StyledOffer {
    height: 1052px;
    width: 1924px;
    margin: 0 auto;
  }

  .StyledOfferWrapper {
    padding-top: 128px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      letter-spacing: -3%;
      color: #1e1b1b;
      margin: 0;
    }
    h2 {
      width: 900px;
      font-weight: 800;
      font-size: 58px;
      line-height: 76px;
      letter-spacing: -3%;
      color: #1e1b1b;
      text-align: center;
      margin: 0;
      margin-top: 8px;
      margin-bottom: 64px;
    }
  }

  .StyledArrows {
    margin-top: 32px;
    width: 65%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: flex-end;
    p {
      margin-right: 16px;
      font-size: 18px;
      font-weight: 600;
      line-height: 31.5px;
    }
  }
`;

export const StyledCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
`;

// -------------------- Experience

export const StyledExpierence = styled.div`
  height: 210px;
  width: 100%;
  background-color: #f2f2f2;

  .expierenceMargins {
    margin: 0 auto;
    height: 210px;
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .expierenceNumber {
    height: 114px;
    width: 270px;

    h2 {
      margin: 0;
      font-weight: 800;
      font-size: 58px;
      line-height: 76px;
      letter-spacing: -3%;
      align-items: center;
      color: #661ce7;
    }
    p {
      margin: 0;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      letter-spacing: -3%;
      color: #1e1b1b;
    }
  }
`;

// -------------------- Brands

export const StyledBrands = styled.div`
  margin: 0 auto;
  max-width: 1280px;

  width: 1920px;
  height: 411px;
  .brandsText {
    font-weight: 700;
    font-size: 48px;
    line-height: 67.2px;
    letter-spacing: -3%;
    color: #1e1b1b;
    text-align: center;
    margin-top: 128px;
  }
  .brandLogoContainer {
    margin-top: 41px;
    display: flex;
    gap: 38px;
    justify-content: center;
  }
  .brandlogo {
    display: flex;
    flex-direction: column;
    width: 224px;
  }
`;

// -------------------- Testimonials

export const StyledTestimonials = styled.div`
  height: 938px;

  background-color: #f2f2f2;
  .testimonialsWrapper {
    margin: 0 auto;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      margin: 0;
      margin-top: 128px;
      text-align: center;
      width: 909px;

      font-size: 48px;
      font-weight: 700;
      line-height: 67.2px;
      letter-spacing: -3%;
      color: #1e1b1b;
    }
    .testimonialContainer {
      display: flex;
      gap: 48px;
      margin-top: 94px;
    }
    .testimonialFirst {
      height: 376px;
      width: 616px;
      background-color: #ffffff;
      .textimonialText {
        height: 232px;
        width: 472px;
        margin: 70px;
      }

      .textimonialTextContainer {
        margin-top: 25px;

        font-size: 22px;
        font-weight: 600;
        line-height: 36px;
        letter-spacing: -3%;
        color: #1e1b1b;
      }
      .textimonialTextUp {
        display: flex;

        .img {
          font-size: 64px;
        }

        .testimonialTextName {
          margin-left: 20px;

          p {
            margin: 0;
            color: #000000;
            font-weight: 600;
            font-size: 24px;
            line-height: 36px;
            letter-spacing: -3%;
          }
          p:nth-child(2) {
            margin: 0;
            color: #939191;
            font-weight: 600;
            font-size: 16px;
            line-height: 28px;
            letter-spacing: -3%;
          }
        }
      }
    }

    .testimonialLines {
      margin-top: 47px;
      align-items: center;
      display: flex;
      gap: 15px;
    }
    .testimonialLines1 {
      width: 32px;
      height: 4px;
      background-color: #939191;
    }
    .testimonialLines2 {
      width: 32px;
      height: 4px;
      background-color: #ff6433;
    }
  }
`;

// -------------------- FAQ
export const StyledFaq = styled.div`
  height: 1140px;
  background-color: #e2e6e9;

  .faqWrapper {
    margin: 0 auto;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      margin: 0;
      padding-top: 128px;
      text-align: center;
      width: 909px;

      font-weight: 700;
      font-size: 48px;
      line-height: 67.2px;
      letter-spacing: -3%;
      color: #1e1b1b;
    }
    .faq1 {
      margin-top: 95px;
      height: 226px;
      width: 896px;
      background-color: #ffffff;
    }
    .faq2 {
      margin-top: 12px;
      height: 112px;
      width: 896px;
      background-color: #ffffff;
    }
    .faq1-upper {
      padding: 10px 40px 0 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -3%;
      }
    }
    .faq-bottom {
      padding: 0 40px 0;
      width: 701px;
      height: 96px;
      p {
        margin: 0;
        font-weight: 600;
        font-size: 18px;
        line-height: 31.5px;
        color: #939191;
      }
    }
    .faq-orangeBox {
      width: 51px;
      height: 48px;
      background-color: #ff6433;
      color: white;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 48px;
      font-weight: 300;
    }
  }
`;
