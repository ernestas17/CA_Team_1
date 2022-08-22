import styled from "styled-components";

const device = {
  mobile: `(max-width: 628px)`,
  tablet: `(max-width: 1280px)`,
};

export const StyledSectionPrimary = styled.div`
  width: 100%;

  @media ${device.tablet} {
    padding: 0 24px;
  }
`;

export const StyledSectionSecondary = styled.div`
  width: 100%;
  background: #f5f5f5;

  @media ${device.tablet} {
    padding: 0 24px;
  }
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
          font-size: ${(props) =>
            props.theme.primary.paragraphs.large.fontSize};
          line-height: ${(props) =>
            props.theme.primary.paragraphs.large.lineHeaght};

          color: ${(props) => props.theme.primary.colors.extraLightGrey};

          margin-bottom: 48px;
        }
      }

      @media ${device.tablet} {
        .textsAboutUs {
          padding: 48px;

          h1 {
            font-size: ${(props) => props.theme.primary.headings.h3.fontSize};
            line-height: ${(props) =>
              props.theme.primary.headings.h3.lineHeaght};
          }
        }
      }

      @media ${device.mobile} {
        .imageAboutUs {
          display: none;
        }

        h1 {
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

        h3 {
          color: ${(props) => props.theme.primary.colors.dark};

          font-weight: ${(props) => props.theme.primary.headings.h3.fontWeight};
          font-size: ${(props) => props.theme.primary.headings.h3.fontSize};
          line-height: ${(props) => props.theme.primary.headings.h3.lineHeaght};
          letter-spacing: ${(props) =>
            props.theme.primary.headings.h3.letterSpacing};

          margin-bottom: 16px;
        }

        p {
          color: ${(props) => props.theme.primary.colors.dark};
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
                border-right: 2px dashed
                  ${(props) => props.theme.primary.colors.primary};
              }
            }

            h5 {
              color: ${(props) => props.theme.primary.colors.dark};

              font-weight: ${(props) =>
                props.theme.primary.headings.h5.fontWeight};
              font-size: ${(props) => props.theme.primary.headings.h5.fontSize};
              line-height: ${(props) =>
                props.theme.primary.headings.h5.lineHeaght};
              letter-spacing: ${(props) =>
                props.theme.primary.headings.h5.letterSpacing};

              margin-top: 12px;
            }

            p {
              color: ${(props) => props.theme.primary.colors.dark};
              opacity: 0.6;

              font-weight: ${(props) =>
                props.theme.primary.paragraphs.large.fontWeight};
              font-size: ${(props) =>
                props.theme.primary.paragraphs.large.fontSize};
              line-height: ${(props) =>
                props.theme.primary.paragraphs.large.lineHeaght};

              margin-bottom: 0;
            }
          }
        }
      }

      @media ${device.tablet} {
        .imageExpertService {
          display: none;
        }

        .textsExpertService {
          width: 100%;

          h3 {
            text-align: center;
            font-size: 36px;
            line-height: 42px;
          }

          p {
            text-align: center;
          }

          .listContainer {
            margin: 0 auto;
            p {
              text-align: left;
            }
          }
        }
      }
    }
  }

  .servicesLayoutContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;

    h2 {
      color: ${(props) => props.theme.primary.colors.dark};

      font-weight: ${(props) => props.theme.primary.headings.h2.fontWeight};
      font-size: ${(props) => props.theme.primary.headings.h2.fontSize};
      line-height: ${(props) => props.theme.primary.headings.h2.lineHeaght};
      letter-spacing: ${(props) =>
        props.theme.primary.headings.h2.letterSpacing};

      text-align: center;

      padding: 0 250px;

      @media ${device.tablet} {
        padding: 0 24px;
        font-size: ${(props) => props.theme.primary.headings.h5.fontSize};
        line-height: ${(props) => props.theme.primary.headings.h5.lineHeaght};
      }
    }

    .layout {
      width: 100%;

      display: flex;
      justify-content: center;
      row-gap: 24px;
      flex-wrap: wrap;

      .serviceCard {
        border-right: 2px solid
          ${(props) => props.theme.primary.colors.extraLightGrey};
        width: calc(100% / 3);

        @media ${device.tablet} {
          width: calc(100% / 2);
        }

        @media ${device.mobile} {
          width: 100%;
        }
      }

      .serviceCard:last-child {
        border: 0;
      }

      @media ${device.tablet} {
        .serviceCard:nth-child(2) {
          border: 0;
        }
      }

      @media ${device.mobile} {
        .serviceCard {
          border: 0;
        }
      }
    }
  }

  .numbersContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 24px;

    .number {
      color: ${(props) => props.theme.primary.colors.purple};

      font-weight: ${(props) => props.theme.primary.headings.h2.fontWeight};
      font-size: ${(props) => props.theme.primary.headings.h2.fontSize};
      line-height: ${(props) => props.theme.primary.headings.h2.lineHeaght};
    }

    p {
      color: ${(props) => props.theme.primary.colors.dark};
      opacity: 0.7;

      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
    }

    @media ${device.tablet} {
      flex-wrap: wrap;

      justify-content: center;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc(50% - 24px);
        text-align: center;
      }
    }
  }

  .meetOurTeamContainer {
    display: flex;
    flex-direction: column;
    gap: 66px;

    h1 {
      color: ${(props) => props.theme.primary.colors.dark};

      font-weight: ${(props) => props.theme.primary.headings.h1.fontWeight};
      font-size: ${(props) => props.theme.primary.headings.h1.fontSize};
      line-height: ${(props) => props.theme.primary.headings.h1.lineHeaght};
      letter-spacing: ${(props) =>
        props.theme.primary.headings.h1.letterSpacing};

      text-align: center;
    }

    .layout {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      column-gap: 32px;
      row-gap: 48px;
    }
  }

  @media ${device.tablet} {
    padding: 80px 0;

    .aboutUsLayoutContainer {
      gap: 80px;
    }

    .meetOurTeamContainer {
      h1 {
        font-size: ${(props) => props.theme.primary.headings.h5.fontSize};
        line-height: ${(props) => props.theme.primary.headings.h5.lineHeaght};
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

  h4 {
    color: ${(props) => props.theme.primary.colors.light};

    font-weight: ${(props) => props.theme.primary.headings.h4.fontWeight};
    font-size: ${(props) => props.theme.primary.headings.h4.fontSize};
    line-height: ${(props) => props.theme.primary.headings.h4.lineHeaght};
    letter-spacing: ${(props) => props.theme.primary.headings.h4.letterSpacing};
  }

  p {
    color: #ffffff;
    opacity: 0.7;

    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }

  @media ${device.tablet} {
    flex-wrap: wrap;

    h4 {
      text-align: center;
    }

    p {
      text-align: center;
    }
  }
`;
