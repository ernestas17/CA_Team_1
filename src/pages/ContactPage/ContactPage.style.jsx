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

  h1 {
    width: 38%;

    color: ${(props) => props.theme.primary.colors.dark};

    font-weight: ${(props) => props.theme.primary.headings.h1.fontWeight};
    font-size: ${(props) => props.theme.primary.headings.h1.fontSize};
    line-height: ${(props) => props.theme.primary.headings.h1.lineHeaght};
    letter-spacing: ${(props) => props.theme.primary.headings.h1.letterSpacing};
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
          background: ${(props) => props.theme.primary.colors.extraLightGrey};

          border: 0;
          border-radius: 2px;

          padding: 23px 40px;

          ::placeholder {
            color: ${(props) => props.theme.primary.colors.dark};

            font-weight: ${(props) =>
              props.theme.primary.paragraphs.medium.fontWeight};
            font-size: ${(props) =>
              props.theme.primary.paragraphs.medium.fontSize};
            line-height: ${(props) =>
              props.theme.primary.paragraphs.medium.lineHeaght};
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
        color: ${(props) => props.theme.primary.colors.dark};
        opacity: 0.7;

        font-weight: ${(props) =>
          props.theme.primary.paragraphs.medium.fontWeight};
        font-size: ${(props) => props.theme.primary.paragraphs.medium.fontSize};
        line-height: ${(props) =>
          props.theme.primary.paragraphs.medium.lineHeaght};
      }

      h6 {
        color: ${(props) => props.theme.primary.colors.dark};

        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -0.03em;
      }
    }
  }

  @media ${device.tablet} {
    padding: 80px 24px;

    h1 {
      font-size: ${(props) => props.theme.primary.headings.h3.fontSize};
      line-height: ${(props) => props.theme.primary.headings.h3.lineHeaght};
      width: 100%;
    }

    .layout {
      .form {
        gap: 32px;

        .inputs {
          input {
            ::placeholder {
              font-size: ${(props) =>
                props.theme.primary.paragraphs.small.fontSize};
              line-height: ${(props) =>
                props.theme.primary.paragraphs.small.lineHeaght};
            }
          }
        }
      }

      .moreInformation {
        gap: 18px;

        h6 {
          font-size: ${(props) => props.theme.primary.headings.h6.fontSize};
          line-height: ${(props) => props.theme.primary.headings.h6.lineHeaght};
          width: 100%;
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
