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
  gap: 48px;

  padding: 80px 0 128px 0;

  h2 {
    width: 38%;

    color: #1e1b1b;

    font-weight: 800;
    font-size: 64px;
    line-height: 84px;
    letter-spacing: -0.03em;
  }

  .layout {
    display: flex;
    justify-content: space-between;
    gap: 24px;

    .form {
      width: 50%;

      display: flex;
      flex-direction: column;
      gap: 48px;

      .inputs {
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 4px;

        input {
          width: 100%;
          background: #f2f2f2;

          border: 0;
          border-radius: 2px;

          padding: 23px 40px;

          ::placeholder {
            color: #1e1b1b;

            font-weight: 600;
            font-size: 16px;
            line-height: 28px;
          }
        }
      }
    }

    .moreInformation {
      width: 40%;

      display: flex;
      flex-direction: column;
      gap: 32px;

      p {
        color: #1e1b1b;
        opacity: 0.7;

        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
      }

      h6 {
        color: #1e1b1b;

        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -0.03em;
      }
    }
  }

  @media ${device.tablet} {
    padding: 80px 24px;

    h2 {
      font-size: 48px;
      line-height: 60px;
      width: 100%;
    }

    .layout {
      .form {
        gap: 32px;

        .inputs {
          input {
            ::placeholder {
              font-size: 14px;
              line-height: 24px;
            }
          }
        }
      }

      .moreInformation {
        gap: 18px;

        h6 {
          font-size: 20px;
          line-height: 28px;
        }
      }
    }
  }

  @media ${device.mobile} {
    h2 {
      text-align: center;
    }

    .layout {
      flex-direction: column;
      gap: 48px;

      .form {
        width: 100%;

        button {
          width: 100%;
        }
      }

      .moreInformation {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export const StyledMapSection = styled.div`
  width: 100%;
  margin: 0 auto;

  .innerLayout {
    width: 100%;
    height: 792px;

    position: relative;

    .backgroundImage {
      position: absolute;
      bottom: 0;
      z-index: -1;
    }

    .mapContainer {
      max-width: 1280px;
      margin: 0 auto;
    }
  }

  @media ${device.tablet} {
    .innerLayout {
      height: 600px;
      .mapContainer {
        margin: 0 24px;
      }
    }
  }
`;
