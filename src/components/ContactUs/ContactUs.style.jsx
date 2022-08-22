import styled from "styled-components";

const device = {
  mobile: `(max-width: 628px)`,
  tablet: `(max-width: 1280px)`,
};

export const StyledLayout = styled.div`
  background: ${(props) => props.theme.primary.colors.dark};
  opacity: 0.98;

  padding: 128px 0;

  @media ${device.tablet} {
    padding: 48px 24px;
  }

  @media ${device.mobile} {
    padding: 32px 24px;
  }
`;

export const StyledInnerWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  gap: 193px;

  .left {
    width: 463px;

    display: flex;
    flex-direction: column;
    gap: 64px;

    h3 {
      color: ${(props) => props.theme.primary.colors.light};

      font-weight: ${(props) => props.theme.primary.headings.h3.fontWeight};
      font-size: ${(props) => props.theme.primary.headings.h3.fontSize};
      line-height: ${(props) => props.theme.primary.headings.h3.lineHeaght};
      letter-spacing: ${(props) =>
        props.theme.primary.headings.h3.letterSpacing};
    }

    .socialIcons {
      display: flex;
      gap: 24px;

      i {
        color: ${(props) => props.theme.primary.colors.light};
        font-size: 24px;

        &:hover {
          cursor: pointer;
          color: ${(props) => props.theme.primary.colors.primary};
        }
      }
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 32px;

    .row {
      display: flex;
      flex-direction: column;
      gap: 8px;

      p {
        color: ${(props) => props.theme.primary.colors.light};
        opacity: 0.6;

        font-weight: ${(props) =>
          props.theme.primary.paragraphs.large.fontWeight};
        font-size: ${(props) => props.theme.primary.paragraphs.large.fontSize};
        line-height: ${(props) =>
          props.theme.primary.paragraphs.large.lineHeaght};
      }

      h6 {
        color: ${(props) => props.theme.primary.colors.light};

        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -0.03em;
      }
    }
  }

  @media ${device.tablet} {
    gap: 36px;

    .left {
      width: 1000px;
      gap: 32px;

      h3 {
        font-size: ${(props) => props.theme.primary.headings.h5.fontSize};
        line-height: ${(props) => props.theme.primary.headings.h5.lineHeaght};
      }

      .socialIcons {
        i {
          font-size: 20px;
        }
      }
    }

    .right {
      gap: 24px;

      .row {
        gap: 4px;

        p {
          font-size: ${(props) =>
            props.theme.primary.paragraphs.small.fontSize};
          line-height: ${(props) =>
            props.theme.primary.paragraphs.small.lineHeaght};
        }

        h6 {
          font-size: ${(props) => props.theme.primary.headings.h6.fontSize};
          line-height: ${(props) => props.theme.primary.headings.h6.lineHeaght};
        }
      }
    }
  }

  @media ${device.mobile} {
    flex-direction: column;
    gap: 24px;

    .left {
      width: 100%;
      gap: 16px;
      text-align: center;

      h3 {
        font-size: ${(props) => props.theme.primary.headings.h6.fontSize};
        line-height: ${(props) => props.theme.primary.headings.h6.lineHeaght};
      }

      .socialIcons {
        justify-content: center;

        i {
          font-size: 16px;
        }
      }
    }

    .right {
      gap: 16px;
      text-align: center;

      .row {
        gap: 2px;

        p {
          font-size: ${(props) =>
            props.theme.primary.paragraphs.small.fontSize};
          line-height: ${(props) =>
            props.theme.primary.paragraphs.small.lineHeaght};
        }

        h6 {
          font-size: ${(props) =>
            props.theme.primary.paragraphs.large.fontSize};
          line-height: ${(props) =>
            props.theme.primary.paragraphs.large.lineHeaght};
        }
      }
    }
  }
`;
