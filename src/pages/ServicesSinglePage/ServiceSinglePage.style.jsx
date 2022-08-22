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

  h1 {
    color: ${(props) => props.theme.primary.colors.dark};

    font-weight: ${(props) => props.theme.primary.headings.h1.fontWeight};
    font-size: ${(props) => props.theme.primary.headings.h1.fontSize};
    line-height: ${(props) => props.theme.primary.headings.h1.lineHeaght};
    letter-spacing: ${(props) => props.theme.primary.headings.h1.letterSpacing};
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
        background-color: ${(props) => props.theme.primary.colors.lightGrey};
        padding: 32px;

        display: flex;
        flex-direction: column;
        gap: 24px;

        h5 {
          color: ${(props) => props.theme.primary.colors.dark};

          font-weight: ${(props) => props.theme.primary.headings.h5.fontWeight};
          font-size: ${(props) => props.theme.primary.headings.h5.fontSize};
          line-height: ${(props) => props.theme.primary.headings.h5.lineHeaght};
          letter-spacing: ${(props) =>
            props.theme.primary.headings.h5.letterSpacing};
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

            background-color: ${(props) =>
              props.theme.primary.colors.lightGrey};
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
              color: ${(props) => props.theme.primary.colors.dark};

              font-weight: 600;
              font-size: 24px;
              line-height: 36px;
              letter-spacing: -0.03em;
            }

            p {
              color: ${(props) => props.theme.primary.colors.dark};
              opacity: 0.6;

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
    }

    .right {
      .imageAutoDiagnostics {
        width: 100%;
        height: 334px;
        margin-bottom: 56px;
      }

      h4 {
        color: ${(props) => props.theme.primary.colors.dark};

        font-weight: ${(props) => props.theme.primary.headings.h4.fontWeight};
        font-size: ${(props) => props.theme.primary.headings.h4.fontSize};
        line-height: ${(props) => props.theme.primary.headings.h4.lineHeaght};
        letter-spacing: ${(props) =>
          props.theme.primary.headings.h4.letterSpacing};

        margin-bottom: 24px;
      }

      p {
        color: ${(props) => props.theme.primary.colors.dark};
        opacity: 0.6;

        font-weight: ${(props) =>
          props.theme.primary.paragraphs.large.fontWeight};
        font-size: ${(props) => props.theme.primary.paragraphs.large.fontSize};
        line-height: ${(props) =>
          props.theme.primary.paragraphs.large.lineHeaght};

        margin-bottom: 32px;
      }

      h5 {
        color: ${(props) => props.theme.primary.colors.dark};

        font-weight: ${(props) => props.theme.primary.headings.h5.fontWeight};
        font-size: ${(props) => props.theme.primary.headings.h5.fontSize};
        line-height: ${(props) => props.theme.primary.headings.h5.lineHeaght};
        letter-spacing: ${(props) =>
          props.theme.primary.headings.h5.letterSpacing};

        margin: 32px 0 24px 0;
      }

      p:last-child {
        margin-bottom: 24px;
      }

      .innerLayout {
        border-left: 3px solid ${(props) => props.theme.primary.colors.dark};
        padding-left: 32px;

        p {
          color: ${(props) => props.theme.primary.colors.dark};
          opacity: 0.6;

          font-weight: ${(props) =>
            props.theme.primary.paragraphs.large.fontWeight};
          font-size: ${(props) =>
            props.theme.primary.paragraphs.large.fontSize};
          line-height: ${(props) =>
            props.theme.primary.paragraphs.large.lineHeaght};

          margin: 4px 0;
        }
      }
    }
  }

  @media ${device.tablet} {
    padding: 80px 24px;
    row-gap: 48px;

    h1 {
      ${(props) => props.theme.primary.headings.h3.fontSize};
      line-height: ${(props) => props.theme.primary.headings.h3.lineHeaght};
    }

    .layout {
      gap: 32px;
    }
  }

  @media ${device.mobile} {
    h1 {
      text-align: center;
    }

    .layout {
      flex-direction: column;
      gap: 96px;

      .right {
        h4 {
          text-align: left;
        }
      }
    }
  }
`;
