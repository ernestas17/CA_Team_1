import styled from "styled-components";

const device = {
  mobile: `(max-width: 628px)`,
  tablet: `(max-width: 1280px)`,
};

export const StyledCallToActionContainer = styled.div`
  width: 100%;
  height: 502px;

  display: flex;
  position: relative;

  .photoContainer {
    width: 50%;
    height: 100%;

    z-index: 0;
  }

  .CTAContainer {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;

    z-index: 2;

    max-width: 1280px;
    height: 100%;

    .innerLayout {
      background-color: ${(props) => props.theme.primary.colors.primary};

      max-width: 729px;
      height: 100%;
      padding: 128px 80px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 48px;

      h3 {
        color: ${(props) => props.theme.primary.colors.light};

        font-weight: ${(props) => props.theme.primary.headings.h3.fontWeight};
        font-size: ${(props) => props.theme.primary.headings.h3.fontSize};
        line-height: ${(props) => props.theme.primary.headings.h3.lineHeaght};
        letter-spacing: ${(props) =>
          props.theme.primary.headings.h3.letterSpacing};
      }
    }
  }

  @media ${device.tablet} {
    height: 400px;

    .CTAContainer {
      .innerLayout {
        padding: 96px 48px;

        h3 {
          font-size: ${(props) => props.theme.primary.headings.h4.fontSize};
          line-height: ${(props) => props.theme.primary.headings.h4.lineHeaght};
        }
      }
    }
  }

  @media ${device.mobile} {
    height: 300px;

    .photoContainer {
      display: none;
    }
    .CTAContainer {
      .innerLayout {
        text-align: center;
        padding: 32px 32px;

        h3 {
          font-size: ${(props) => props.theme.primary.headings.h5.fontSize};
          line-height: ${(props) => props.theme.primary.headings.h5.lineHeaght};
        }
      }
    }
  }
`;
