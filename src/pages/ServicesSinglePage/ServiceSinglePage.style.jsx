import styled from "styled-components";

const device = {
  mobile: `(max-width: 628px)`,
  tablet: `(max-width: 1280px)`,
};

export const StyledSectionPrimary = styled.div`
  width: 100%;
`;

export const StyledSectionWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  row-gap: 96px;

  padding: 80px 0 128px 0;

  h3 {
    color: #1e1b1b;

    font-weight: 800;
    font-size: 64px;
    line-height: 84px;
    letter-spacing: -0.03em;
  }

  .layout {
    display: flex;
    flex-direction: row;
    gap: 96px;

    .left {
      display: flex;
      flex-direction: column;
      gap: 48px;

      .otherServices {
        background-color: #f5f5f5;
        padding: 32px;

        display: flex;
        flex-direction: column;
        gap: 24px;

        h5 {
          color: #1e1b1b;

          font-weight: 700;
          font-size: 32px;
          line-height: 48px;
          letter-spacing: -0.03em;
        }
      }

      .additionalServices {
        display: flex;
        flex-direction: column;
        gap: 32px;

        .row {
          display: flex;
          flex-direction: row;
          gap: 16px;

          .circle {
            width: 47px;
            height: 47px;

            background-color: #f5f5f5;
            border-radius: 50%;

            display: flex;
            align-items: center;

            i {
              width: 100%;
              font-size: 24px;
              text-align: center;
            }
          }

          .content {
            width: calc(100% - 47px - 16px);

            display: flex;
            flex-direction: column;
            gap: 8px;

            h6 {
              color: #1e1b1b;

              font-weight: 600;
              font-size: 24px;
              line-height: 36px;
              letter-spacing: -0.03em;
            }

            p {
              color: #1e1b1b;
              opacity: 0.6;

              font-weight: 600;
              font-size: 16px;
              line-height: 28px;
            }
          }
        }
      }
    }

    .right {
      .imageAutoDiagnostics {
        width: 100%;
        height: 334px;
        margin-bottom: 56px;
      }

      h3 {
        color: #1e1b1b;

        font-weight: 700;
        font-size: 40px;
        line-height: 56px;
        letter-spacing: -0.03em;

        margin-bottom: 24px;
      }

      p {
        color: #232536;
        opacity: 0.6;

        font-weight: 600;
        font-size: 18px;
        line-height: 32px;

        margin-bottom: 32px;
      }

      h4 {
        color: #1e1b1b;

        font-weight: 700;
        font-size: 32px;
        line-height: 48px;
        letter-spacing: -0.03em;

        margin: 32px 0 24px 0;
      }

      p:last-child {
        margin-bottom: 24px;
      }

      .innerLayout {
        border-left: 3px solid #1e1b1b;
        padding-left: 32px;

        h6 {
          color: #232536;
          opacity: 0.6;

          font-weight: 600;
          font-size: 18px;
          line-height: 32px;

          margin: 4px 0;
        }
      }
    }
  }

  @media ${device.tablet} {
    padding: 80px 24px;
    row-gap: 48px;

    h3 {
      font-size: 48px;
      line-height: 60px;
    }

    .layout {
      gap: 32px;
    }
  }

  @media ${device.mobile} {
    h3 {
      text-align: center;
    }

    .layout {
      flex-direction: column;
      gap: 96px;

      .right {
        h3 {
          text-align: left;
        }
      }
    }
  }
`;
