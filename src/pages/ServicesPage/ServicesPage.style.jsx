import styled from "styled-components";

const device = {
  mobile: `(max-width: 628px)`,
  tablet: `(max-width: 1280px)`,
};

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

  .imageOurServices {
    width: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .ourServices {
    width: 100%;
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

  .layout {
    display: flex;
    gap: 32px;

    .autoDiagnostics {
      padding: 64px 48px 43px 48px;
      background-color: #fff;

      .imageAutoDiagnostics {
        width: 100%;

        img {
          width: 100%;
          height: 100%;
        }

        margin-bottom: 32px;
      }

      h4 {
        font-weight: 700;
        font-size: 48px;
        line-height: 67.2px;

        color: #1e1b1b;

        margin-bottom: 16px;
      }

      p {
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;

        color: #232536;
        opacity: 0.6;

        margin-bottom: 32px;
      }

      .autoDiagnosticsCTA {
        display: flex;
        align-items: center;
        gap: 16px;

        p {
          font-weight: 600;
          font-size: 18px;
          line-height: 32px;
          opacity: 1;

          color: #1e1b1b;
          margin-bottom: 0px;
        }

        i {
          font-size: 18px;
          line-height: 32px;
          color: #1e1b1b;
        }
      }
    }

    .cardsContainer {
      display: flex;
      flex-wrap: wrap;
      gap: 32px;

      .cardWrapper {
        width: calc(50% - 16px);
      }
    }

    @media ${device.tablet} {
      .autoDiagnostics {
        display: none;
      }
    }
  }

  .containerHowWeWork {
    display: flex;
    column-gap: 88px;
    row-gap: 128px;

    flex-wrap: wrap;

    .containerHowWeWorkTextLayout {
      width: calc(50% - 44px);

      h4 {
        color: #1e1b1b;

        font-weight: 700;
        font-size: 48px;
        line-height: 67px;
        letter-spacing: -0.03em;

        margin-bottom: 32px;
      }

      p {
        color: #232536;

        font-weight: 600;
        font-size: 18px;
        line-height: 32px;
        opacity: 0.6;

        margin-bottom: 32px;
      }

      .list {
        display: flex;
        flex-direction: column;
        gap: 32px;

        .listRow {
          display: flex;
          gap: 24px;

          i {
            color: #00d289;
            font-size: 48px;
          }

          p {
            font-size: 24px;
            line-height: 36px;
            letter-spacing: -0.03em;
            opacity: 1;
            margin-bottom: 0;
          }
        }
      }
    }

    .containerHowWeWorkImagesLayout {
      width: calc(50% - 44px);

      display: flex;
      gap: 16px;

      img {
        width: 50%;
      }
    }

    @media ${device.tablet} {
      flex-direction: column;
      padding: 80px 0 128px 0;

      .containerHowWeWorkTextLayout {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        h4 {
          text-align: center;
        }

        p {
          text-align: center;
        }

        .list {
          .listRow {
            p {
              text-align: left;
            }
          }
        }
      }

      .containerHowWeWorkImagesLayout {
        display: none;
      }
    }

    @media ${device.mobile} {
      .containerHowWeWorkTextLayout {
        align-items: unset;
        button {
          width: 100%;
        }
      }
    }
  }

  @media ${device.tablet} {
    padding: 0 24px;

    .layout {
      padding: 80px 0 128px 0;
    }
  }

  @media ${device.mobile} {
    .imageOurServices {
      display: none;
    }

    .ourServices {
      h4 {
        text-align: center;
      }

      p {
        text-align: center;
      }

      button {
        width: 100%;
      }
    }
  }
`;
