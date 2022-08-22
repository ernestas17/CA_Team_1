import styled from "styled-components";

const device = {
  mobile: `(max-width: 628px)`,
  tablet: `(max-width: 1280px)`,
};

export const StyledSectionPrimary = styled.div`
  width: 100%;
`;

export const StyledSectionSecondary = styled.div`
  /* width: 100%;
  background: ${(props) => props.theme.primary.colors.lightGrey}; ; */
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
    background-color: ${(props) => props.theme.primary.colors.dark};

    padding: 96px 96px 146px 96px;

    h1 {
      font-weight: ${(props) => props.theme.primary.headings.h1.fontWeight};
      font-size: ${(props) => props.theme.primary.headings.h1.fontSize};
      line-height: ${(props) => props.theme.primary.headings.h1.lineHeaght};
      letter-spacing: ${(props) =>
        props.theme.primary.headings.h1.letterSpacing};

      color: ${(props) => props.theme.primary.colors.extraLightGrey};

      margin-bottom: 16px;
    }

    p {
      font-weight: ${(props) =>
        props.theme.primary.paragraphs.large.fontWeight};
      font-size: ${(props) => props.theme.primary.paragraphs.large.fontSize};
      line-height: ${(props) =>
        props.theme.primary.paragraphs.large.lineHeaght};

      color: ${(props) => props.theme.primary.colors.extraLightGrey};

      margin-bottom: 48px;
    }
  }

  .layout {
    display: flex;
    gap: 32px;

    .autoDiagnostics {
      padding: 64px 48px 43px 48px;
      background-color: ${(props) => props.theme.primary.colors.light};

      .autoDiagnosticsCTA {
        p:hover {
          color: ${(props) => props.theme.primary.colors.primary};
        }

        i:hover {
          color: ${(props) => props.theme.primary.colors.primary};
        }
      }

      .imageAutoDiagnostics {
        width: 100%;

        img {
          width: 100%;
          height: 100%;
        }

        margin-bottom: 32px;
      }

      h3 {
        font-weight: ${(props) => props.theme.primary.headings.h3.fontWeight};
        font-size: ${(props) => props.theme.primary.headings.h3.fontSize};
        line-height: ${(props) => props.theme.primary.headings.h3.lineHeaght};
        letter-spacing: ${(props) =>
          props.theme.primary.headings.h3.letterSpacing};

        color: ${(props) => props.theme.primary.colors.dark};

        margin-bottom: 16px;
      }

      p {
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;

        color: ${(props) => props.theme.primary.colors.dark};
        opacity: 0.6;

        margin-bottom: 32px;
      }

      .autoDiagnosticsCTA {
        display: flex;
        align-items: center;
        gap: 16px;

        p {
          font-weight: ${(props) =>
            props.theme.primary.paragraphs.large.fontWeight};
          font-size: ${(props) =>
            props.theme.primary.paragraphs.large.fontSize};
          line-height: ${(props) =>
            props.theme.primary.paragraphs.large.lineHeaght};
          opacity: 1;

          color: ${(props) => props.theme.primary.colors.dark};
          margin-bottom: 0px;
        }

        i {
          font-size: 18px;
          line-height: 32px;
          color: ${(props) => props.theme.primary.colors.dark};
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

      h3 {
        color: ${(props) => props.theme.primary.colors.dark};

        font-weight: ${(props) => props.theme.primary.headings.h3.fontWeight};
        font-size: ${(props) => props.theme.primary.headings.h3.fontSize};
        line-height: ${(props) => props.theme.primary.headings.h3.lineHeaght};
        letter-spacing: ${(props) =>
          props.theme.primary.headings.h3.letterSpacing};

        margin-bottom: 32px;
      }

      p {
        color: ${(props) => props.theme.primary.colors.dark};

        font-weight: ${(props) =>
          props.theme.primary.paragraphs.large.fontWeight};
        font-size: ${(props) => props.theme.primary.paragraphs.large.fontSize};
        line-height: ${(props) =>
          props.theme.primary.paragraphs.large.lineHeaght};
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
            color: ${(props) => props.theme.primary.colors.green};
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
      row-gap: 48px;

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
    padding: 80px 24px;

    .ourServices {
      padding: 48px;
      h1 {
        font-size: ${(props) => props.theme.primary.headings.h3.fontSize};
        line-height: ${(props) => props.theme.primary.headings.h3.lineHeaght};
      }
    }
  }

  @media ${device.mobile} {
    .imageOurServices {
      display: none;
    }

    .ourServices {
      h2 {
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
