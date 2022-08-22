import styled from 'styled-components';

const device = {
  mobile: `(max-width: 628px)`,

  tablet: `(max-width: 1280px)`,
};

// -------------------- Header

export const StyledHomeHeader = styled.div`
  height: 632px;
  margin-top: 80px;
  margin-bottom: 128px;

  @media ${device.tablet} {
    height: 532px;
    margin-bottom: 64px;
    margin-top: 40px;
  }
  @media ${device.mobile} {
    height: 432px;
    margin-bottom: 0;
    margin-top: 0;
  }

  .StyledHomeHeaderWrapper {
    max-width: 1280px;
    display: flex;
    margin: 0 auto;
    @media ${device.tablet} {
      margin: 0 auto;
      display: flex;
    }
    @media ${device.mobile} {
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .StyledHomeHeaderText {
    margin-top: 44px;
    width: 624px;
    height: 100%;
    @media ${device.tablet} {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    @media ${device.mobile} {
      width: 90%;
      height: 362px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      z-index: 1;
    }

    h1 {
      margin-bottom: 32px;
      font-size: 64px;
      font-weight: 800;
      letter-spacing: -3%;

      @media ${device.tablet} {
        text-align: center;
        font-size: 42px;
        line-height: 54px;
        letter-spacing: -3%;
      }
      @media ${device.mobile} {
        text-align: center;
        font-size: 32px;
        line-height: 32px;
        width: 90%;
      }
    }
  }
  .StyledHomeHeaderTextOpen {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 48px;

    @media ${device.tablet} {
      margin-top: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media ${device.mobile} {
      margin-top: 16px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    div i {
      font-size: 31px;
      color: #e2e6e9;

      @media ${device.tablet} {
        font-size: 28px;
      }
      @media ${device.mobile} {
        font-size: 22px;
      }
    }
  }

  .StyledHomeHeaderTextInside {
    margin-left: 13px;

    @media ${device.tablet} {
    }

    @media ${device.mobile} {
      margin-left: 0;
      width: 80%;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
    }
    p {
      margin: 0;
      color: #1e1b1b;
      font-weight: 600;
      font-size: 18px;
      line-height: 31.5px;

      @media ${device.tablet} {
        font-size: 16px;
      }
      @media ${device.mobile} {
        margin-left: 5px;
        font-size: 12px;
        line-height: 16px;
        width: 100%;
      }
    }

    p:nth-child(1) {
      color: #939191;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -3%;

      @media ${device.tablet} {
        font-size: 14px;
      }
      @media ${device.mobile} {
        font-size: 12px;
        line-height: 14px;
      }
    }
  }

  .StyledHomeHeaderImage {
    position: relative;

    display: flex;
    flex-direction: column;

    width: 655px;
    height: 632px;

    color: white;
    font-size: 48px;
    background-repeat: no-repeat;

    @media ${device.tablet} {
      height: 552px;
      width: 48%;
    }
    @media ${device.mobile} {
      margin: 0;
      display: block;
      position: absolute;
      background-position: center center;
      opacity: 0.4;
      width: 100%;
      height: 352px;
      z-index: 0;
    }
  }

  .StyledHomeHeader {
    margin-left: 51px;
    position: absolute;
    width: 605px;
    height: 100%;
    z-index: 1;
    @media ${device.mobile} {
      margin-left: 0;
    }
  }
  .StyledHomeHeaderImageTextCircleShadow {
    z-index: 2;
    height: 124px;
    width: 301.64px;
    border-radius: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(225, 225, 225, 0.43);

    margin-top: 70px;
    margin-right: 10px;

    @media ${device.mobile} {
      display: none;
    }
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
    z-index: 2;
    margin-top: 260px;
    margin-left: 350px;

    height: 124px;
    width: 348px;
    border-radius: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(225, 225, 225, 0.43);
    @media ${device.tablet} {
      margin-top: 50%;
      margin-left: 5%;
    }
    @media ${device.mobile} {
      display: none;
    }
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

  @media ${device.tablet} {
    margin-bottom: 64px;
    margin-top: 40px;
    height: 894px;
    width: 100%;
  }
  @media ${device.mobile} {
    margin-bottom: 42px;
    margin-top: 0;
    height: 100%;
  }

  .StyledQuoteMargins {
    max-width: 1280px;
    height: 100%;

    gap: 91px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.tablet} {
      width: 100%;
      gap: 4%;
    }
    @media ${device.mobile} {
      flex-direction: column;
      width: 100%;
    }
  }

  .StyledQuoteLeft {
    height: 638px;
    width: 584px;

    @media ${device.tablet} {
      width: 48%;
      margin: 0 auto;
    }
    @media ${device.mobile} {
      height: fit-content;

      width: 100%;
    }

    h2 {
      margin: 0;
      margin-bottom: 53px;
      font-weight: 800;
      font-size: 58px;
      line-height: 76px;
      letter-spacing: -3%;

      text-shadow: 0px 4px rgba(0, 0, 0, 0.25);

      border: 1px #000000;

      @media ${device.tablet} {
        text-align: center;
        font-size: 46px;
        line-height: 42px;
      }
      @media ${device.mobile} {
        margin-top: 42px;
        text-align: center;
        width: 100%;
        font-size: 25px;
        line-height: 28px;
      }
    }
  }

  .StyledQuoteLeftFeature {
    height: 105px;
    width: 385px;
    gap: 16px;
    display: flex;
    margin-bottom: 32px;
    @media ${device.tablet} {
      width: 90%;
    }
    @media ${device.mobile} {
      width: 100%;
      justify-content: center;
      align-items: center;
      height: 150px;
      flex-direction: column;
      margin-top: 40px;
    }
  }

  .StyledQuoteLeftFeatureCircleS {
    height: 47px;
    width: 47px;
    background-color: #ffffff;
    border-radius: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.tablet} {
    }
    @media ${device.mobile} {
      height: 60px;
      width: 60px;

      img {
        height: 30px;
      }
    }
  }
  .StyledQuoteLeftFeatureCircle {
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
    @media ${device.tablet} {
    }
    @media ${device.mobile} {
      align-items: center;
      p {
        text-align: center;
        font-size: 14px;
        width: 80%;
      }
      p:nth-child(1) {
        font-size: 18px;
      }
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
    @media ${device.tablet} {
    }
    @media ${device.mobile} {
      gap: 0;

      flex-direction: column;
      margin: 0;
      margin-top: 60px;
      width: 100%;
      p {
        font-weight: 600;
        font-size: 19px;
      }
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

    @media ${device.tablet} {
      width: 48%;
    }
    @media ${device.mobile} {
      height: fit-content;
      width: 100%;
      h3 {
        text-align: center;
        font-size: 26px;
        line-height: 28px;
      }
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

    @media ${device.tablet} {
      display: flex;
      width: 95%;

      ::placeholder {
        font-size: 16px;
      }
    }
    @media ${device.mobile} {
      height: 50px;
      display: flex;
      margin: 5px auto;
      width: 90%;
    }
  }
  .StyledQuoteRightButtonContainer {
    margin-top: 32px;
    @media ${device.tablet} {
    }
    @media ${device.mobile} {
      text-align: center;
      margin-bottom: 50px;
    }
  }
`;

// -------------------- Process Section

export const StyledProcessSection = styled.div`
  max-width: 1280px;
  margin: 128px auto;
  height: 632px;
  margin-top: 128px;
  margin-bottom: 128px;

  @media ${device.tablet} {
  }
  @media ${device.mobile} {
    margin-bottom: 50px;
    margin-top: 50px;
    height: auto;
  }

  .StyledProcessSectionMargins {
    height: 527px;
    width: 1087px;
    display: flex;
    gap: 131px;

    @media ${device.tablet} {
      margin: 0 auto;
      height: auto;
      width: 90%;
      gap: 20px;
    }
    @media ${device.mobile} {
      height: auto;
      margin: 0 auto;
      flex-direction: column;
      align-items: center;
      width: 90%;
      gap: 0;
    }
  }

  .listContainer {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .listContainerRow {
      display: flex;
      flex-wrap: wrap;
      column-gap: 24px;

      .listContainerRowLeft {
        width: 72px;
        display: flex;
        flex-direction: column;
        gap: 14px;

        @media ${device.tablet} {
        }
        @media ${device.mobile} {
          align-items: center;
        }
      }

      .listContainerRowRight {
        width: calc(100% - 72px - 24px);

        display: flex;
        flex-direction: column;

        gap: 8px;
      }

      img {
        width: 72px;
        height: 72px;
        @media ${device.tablet} {
        }
        @media ${device.mobile} {
          width: 48px;
          height: 48px;
        }
      }

      .lineContainer {
        width: 72px;
        height: 100%;
        display: flex;

        div {
          width: 50%;
        }

        div:nth-child(1) {
          border-right: 2px dashed #ff6433;
        }
      }

      h5 {
        color: #1e1b1b;

        font-weight: 700;
        font-size: 32px;
        line-height: 48px;

        margin-top: 12px;

        @media ${device.tablet} {
          line-height: 28px;
          font-size: 22px;
        }
        @media ${device.mobile} {
          font-size: 22px;
        }
      }

      p {
        color: #1e1b1b;
        opacity: 0.6;

        font-weight: 600;
        font-size: 18px;
        line-height: 32px;

        margin-bottom: 0;

        @media ${device.tablet} {
        }
        @media ${device.mobile} {
          width: 90%;
          font-size: 14px;
        }
      }
    }
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
      @media ${device.tablet} {
        width: 90%;
        font-size: 42px;
        line-height: 54px;
      }
    }

    p {
      margin-top: 16px;
      max-width: 437px;
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
      color: #1e1b1b;
      margin-bottom: 32px;
    }

    @media ${device.tablet} {
      height: 100%;
      justify-content: space-between;
    }
    @media ${device.mobile} {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        margin-top: 0;
        margin-bottom: 50px;
        width: 100%;
        font-size: 22px;
        line-height: 28px;
        text-align: center;
      }
      p {
        text-align: center;
      }
    }
  }

  .StyledProcessSectionRight {
    width: 432px;
    height: 527px;

    @media ${device.tablet} {
    }
    @media ${device.mobile} {
      margin-top: 50px;
      width: 100%;
      height: fit-content;
    }
  }
`;

// -------------------- Offer
export const StyledOffer = styled.div`
  background-color: #f2f2f2;

  .StyledOffer {
    height: 1052px;
    width: 100%;
    margin: 0 auto;

    @media ${device.tablet} {
      height: auto;
      width: 100%;
    }
    @media ${device.mobile} {
      height: auto;
      width: 100%;
    }
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
    @media ${device.tablet} {
      h2 {
        margin-top: 50px;
        width: 80%;
        font-size: 36px;
        line-height: 42px;
      }
    }
    @media ${device.mobile} {
      padding-top: 50px;
      height: auto;
      width: 100%;

      h2 {
        margin-top: 50px;
        width: 95%;
        font-size: 26px;
        line-height: 22px;
      }
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

    @media ${device.tablet} {
      gap: 10px;
      flex-direction: column;
      width: 100%;
      margin: 50px 0 50px 0;
    }
    @media ${device.mobile} {
      gap: 10px;
      flex-direction: column;
      width: 100%;
      margin: 50px 0 50px 0;
    }
  }
`;

export const StyledCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;

  @media ${device.tablet} {
    height: 700px;
    max-height: 700px;
    width: 90%;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(4, 25%);
  }
  @media ${device.mobile} {
    height: 700px;
    max-height: 700px;
    width: 90%;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(4, 25%);
  }
`;

// -------------------- Experience

export const StyledExpierence = styled.div`
  height: 210px;
  width: 100%;
  background-color: #f2f2f2;

  @media ${device.tablet} {
  }
  @media ${device.mobile} {
    height: 220px;
  }

  .expierenceMargins {
    margin: 0 auto;
    height: 210px;
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${device.tablet} {
      width: 90%;
      margin: 0 auto;
    }
    @media ${device.mobile} {
      margin: 0 auto;
      height: 200px;
      width: 90%;
      display: grid;
      text-align: center;
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: repeat(2, 50%);
      grid-column-gap: 5px;
      grid-row-gap: 5px;
    }
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
    @media ${device.tablet} {
      p {
        line-height: 26px;
        text-align: center;
        font-size: 18px;
        width: 70%;
      }
    }
    @media ${device.mobile} {
      width: 100%;
      h2 {
        font-size: 36px;
        margin-bottom: 0;
      }
      p {
        font-size: 16px;
      }
    }
  }
`;

// -------------------- Brands

export const StyledBrands = styled.div`
  margin: 0 auto;
  max-width: 1280px;

  width: 100%;
  height: 411px;

  @media ${device.tablet} {
  }
  @media ${device.mobile} {
    width: 100%;
    height: auto;
  }
  .brandsText {
    font-weight: 700;
    font-size: 48px;
    line-height: 67.2px;
    letter-spacing: -3%;
    color: #1e1b1b;
    text-align: center;
    margin-top: 128px;
    @media ${device.tablet} {
      margin-top: 50px;
      font-size: 36px;
    }
    @media ${device.mobile} {
      margin-top: 50px;
      font-size: 36px;
    }
  }
  .brandLogoContainer {
    margin-top: 41px;
    display: flex;
    gap: 38px;
    justify-content: center;

    @media ${device.tablet} {
    }
  }
  .brandlogo {
    display: flex;
    flex-direction: column;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: repeat(2, 50%);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    @media ${device.tablet} {
      display: grid;
      grid-template-columns: repeat(5, 20%);
      grid-template-rows: repeat(2, 50%);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      img {
        height: 70%;
      }
    }
    @media ${device.mobile} {
      margin: 0 auto;
      width: 90%;
      display: grid;
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: repeat(5, 20%);
      grid-column-gap: 0px;
      grid-row-gap: 0px;

      img {
        height: 80%;
      }
    }
  }
`;

// -------------------- Testimonials

export const StyledTestimonials = styled.div`
  height: 938px;

  background-color: #f2f2f2;
  .testimonialsWrapper {
    margin: 0 auto;

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
      @media ${device.tablet} {
        height: auto;
        line-height: 52px;
        font-size: 38px;
        width: 80%;
      }
    }
    .testimonialContainer {
      display: flex;
      gap: 48px;
      margin-top: 94px;
      @media ${device.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 90%;
        gap: 24px;
        margin-top: 50px;
      }
      @media ${device.mobile} {
        width: 90%;
        gap: 24px;
        margin-top: 50px;
      }
    }
    .testimonialFirst {
      height: 376px;
      width: 616px;
      background-color: #ffffff;
      .textimonialText {
        height: 232px;
        width: 472px;
        margin: 70px;

        @media ${device.mobile} {
          max-width: 100%;
          height: auto;
          margin: 30px;
        }
      }

      .textimonialTextContainer {
        margin-top: 25px;

        font-size: 22px;
        font-weight: 600;
        line-height: 36px;
        letter-spacing: -3%;
        color: #1e1b1b;
        @media ${device.mobile} {
          font-size: 14px;
          width: 90%;
        }
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

            @media ${device.mobile} {
              font-size: 14px;
            }
          }
        }
      }
      @media ${device.tablet} {
        height: auto;
        width: 100%;
      }
      @media ${device.mobile} {
        height: auto;
        width: 100%;
      }
    }

    .testimonialLines {
      margin-top: 47px;
      align-items: center;
      display: flex;
      gap: 15px;
      @media ${device.tablet} {
        margin-bottom: 50px;
      }
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
    @media ${device.tablet} {
    }
    @media ${device.mobile} {
      width: 100%;
      h3 {
        margin-top: 50px;
        width: 80%;
        font-size: 26px;
        line-height: 32px;
      }

      .testimonialContainer {
        flex-direction: column;
      }
    }
  }
  @media ${device.tablet} {
    height: auto;
  }
`;

// -------------------- FAQ

export const StyledFaq = styled.div`
  height: 100%;

  background-color: #e2e6e9;
  @media ${device.mobile} {
    width: 100%;
    height: auto;
  }

  .faqWrapper {
    margin: 0 auto;

    max-width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.mobile} {
      width: 100%;
      height: auto;
    }

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

      @media ${device.mobile} {
        padding-top: 50px;
        width: 100%;
        font-size: 36px;
      }
    }
    .faq1 {
      margin-top: 95px;
      height: 226px;
      width: 896px;
      background-color: #ffffff;

      @media ${device.mobile} {
        width: 90%;
      }
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
