import styled from 'styled-components';

const device = {
  mobile: `(max-width: 628px)`,

  tablet: `(max-width: 1280px)`,
};

export const StyledBlogHeader = styled.div`
  height: 624px;
  width: 100%;

  display: flex;
  @media ${device.tablet} {
    height: 524px;
  }
  @media ${device.mobile} {
    flex-direction: column;
    height: 100%;
  }
  .headerImage {
    width: 45%;
    height: 100%;

    opacity: 99%;
    z-index: 1;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.mobile} {
      width: 100%;
      height: 250px;
    }
    .backgroundphoto {
      height: 100%;
      width: 100%;
      position: absolute;
      @media ${device.mobile} {
      }
    }
    .overlay {
      height: 100%;
      width: 100%;
      background-color: black;
      z-index: 2;
      opacity: 60%;

      position: absolute;
      @media ${device.mobile} {
        width: 100%;
      }
    }
    .text {
      z-index: 3;
      h1 {
        color: white;
        font-size: 64px;
        line-height: 84px;
        letter-spacing: -3%;

        @media ${device.tablet} {
          font-size: 52px;
        }
        @media ${device.mobile} {
        }
      }
    }
  }

  .headerText {
    width: 55%;
    height: 100%;
    background-color: #1e1b1b;

    @media ${device.mobile} {
      width: 100%;
    }

    .headerTextContainer {
      padding: 128px 0px 128px 64px;

      @media ${device.tablet} {
        padding: 64px 0 64px 32px;
      }
      @media ${device.mobile} {
      }
    }
    .Headerheadline {
      color: #ff6433;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 3px;

      @media ${device.tablet} {
        font-size: 14px;
      }
      @media ${device.mobile} {
      }
    }

    .HeaderUnderLine {
      width: 582px;
      color: #ffffff;
      font-weight: 700;
      font-size: 40px;
      line-height: 56px;
      letter-spacing: -3%;
      padding-bottom: 16px;
      @media ${device.tablet} {
        width: 90%;
        line-height: 38px;
        font-size: 28px;
      }
      @media ${device.mobile} {
      }
    }
    .headerSecondP {
      width: 614px;
      color: #ffffff;
      font-weight: 600;
      font-size: 18px;
      line-height: 31.5px;
      padding-bottom: 48px;

      @media ${device.tablet} {
        padding-bottom: 24px;
        font-size: 14px;
        width: 90%;
      }
      @media ${device.mobile} {
      }
    }
    .headerTextBottom {
      display: flex;
      align-items: center;
      gap: 32px;

      @media ${device.tablet} {
      }
      @media ${device.mobile} {
        align-items: flex-start;
        flex-direction: column;
      }

      .HeaderTextBottom {
        height: 100%;
        color: #ffffff;
        font-weight: 600;
        font-size: 18px;
        line-height: 31.5px;
        opacity: 80%;

        @media ${device.tablet} {
          font-size: 14px;
        }
        @media ${device.mobile} {
        }
      }
    }
  }
`;

export const StyledBlogFourSection = styled.div`
  padding-top: 128px;
  height: 1002px;
  width: 100%;
  background-color: #f5f5f5;

  .wrapper {
    max-width: 1280px;
    display: flex;

    margin: 0 auto;
    gap: 32px;
  }
  @media ${device.tablet} {
    width: 100%;
    .wrapper {
      width: 100%;
      gap: 25px;

      .first {
        width: 40%;
      }
      .second {
        width: 60%;
      }
    }
  }
  @media ${device.mobile} {
    height: auto;
    .wrapper {
      width: 95%;
      flex-direction: column;
      .first {
        width: 100%;
      }
      .second {
        width: 100%;
      }
    }
  }
`;

export const StyledCards = styled.div`
  height: auto;
  width: 100%;
  background-color: #ffffff;
  .wrapper {
    max-width: 1280px;
    margin: 128px auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 64px;
  }

  @media ${device.tablet} {
    height: 2250px;
    .wrapper {
      max-width: 90%;
      height: fit-content;
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: repeat(3, 36%);
      grid-column-gap: 0px;
      grid-row-gap: 48px;
    }
  }
`;
// @media ${device.tablet} {
// }
// @media ${device.mobile} {
// }
