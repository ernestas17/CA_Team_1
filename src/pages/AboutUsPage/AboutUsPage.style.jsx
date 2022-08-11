import styled from "styled-components";

export const StyledSectionPrimary = styled.div`
  width: 100%;
`;

export const StyledSectionSecondary = styled.div`
  width: 100%;
  background: #f5f5f5;
`;

export const StyledSectionWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  display: flex;

  padding: 80px 0 128px 0;

  .aboutUsLayoutContainer {
    display: flex;
    flex-direction: column;
    gap: 128px;

    .aboutUsContainer {
      display: flex;

      .imageAboutUs {
        width: 100%;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .textsAboutUs {
        background-color: #1e1b1b;

        padding: 96px 96px 146px 96px;

        h4 {
          font-weight: 800;
          font-size: 64px;
          line-height: 84px;

          color: #f2f2f2;

          margin-bottom: 16px;
        }

        p {
          font-weight: 500;
          font-size: 18px;
          line-height: 32px;

          color: #f2f2f2;

          margin-bottom: 48px;
        }
      }
    }

    .expertServiceContainer {
      display: flex;
      gap: 93px;

      .imageExpertService {
        width: 50%;

        img {
          width: 100%;
        }
      }

      .textsExpertService {
        width: 50%;

        display: flex;
        flex-direction: column;

        h4 {
          color: #1e1b1b;

          font-weight: 700;
          font-size: 48px;
          line-height: 67px;

          margin-bottom: 16px;
        }

        p {
          color: #232536;
          opacity: 0.6;

          font-weight: 600;
          font-size: 24px;
          line-height: 36px;

          margin-bottom: 48px;
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
            }

            p {
              color: #1e1b1b;
              opacity: 0.6;

              font-weight: 600;
              font-size: 18px;
              line-height: 32px;

              margin-bottom: 0;
            }
          }
        }
      }
    }
  }

  .servicesLayoutContainer {
    display: flex;
    flex-direction: column;
    gap: 64px;

    h3 {
      color: #1e1b1b;

      font-weight: 800;
      font-size: 58px;
      line-height: 76px;
      text-align: center;

      padding: 0 250px;
    }

    .servicesContainer {
      display: flex;

      div {
        background-color: #fff;
        width: calc(100% / 3);
        border-right: 2px solid #f2f2f2;

        padding: 88px 66px;

        .iconInCircleContainer {
          border-right: 0;
          padding: 0;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .circle {
          padding: 0;
          height: 64px;
          width: 64px;
          border-radius: 50%;
          background-color: #ffdace;

          display: flex;
          align-items: center;
          text-align: center;

          margin-bottom: 24px;

          i {
            width: 100%;
            font-size: 32px;
          }
        }

        h6 {
          color: #000000;

          font-weight: 700;
          font-size: 32px;
          line-height: 48px;

          text-align: center;
          letter-spacing: -0.03em;

          margin-bottom: 16px;
        }

        p {
          color: #232536;
          opacity: 0.6;

          font-weight: 600;
          font-size: 18px;
          line-height: 32px;

          text-align: center;
        }
      }

      div:last-child {
        border: 0;
      }
    }

    .numbersContainer {
      display: flex;
      justify-content: space-between;
      gap: 24px;

      .number {
        color: #661ce7;

        font-weight: 800;
        font-size: 58px;
        line-height: 76px;
      }

      p {
        color: #1e1b1b;
        opacity: 0.7;

        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
      }
    }
  }
`;

export const StyledSectionThreeDivBanner = styled.div`
  display: flex;

  .colorContainer {
    padding: 142px 101px;

    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  h6 {
    color: #ffffff;

    font-weight: 700;
    font-size: 40px;
    line-height: 56px;
  }

  p {
    color: #ffffff;
    opacity: 0.7;

    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }
`;
