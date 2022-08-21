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
      background-color: #ff6433;

      max-width: 729px;
      height: 100%;
      padding: 128px 80px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 48px;

      h3 {
        color: #ffffff;

        font-weight: 700;
        font-size: 48px;
        line-height: 67px;
        letter-spacing: -0.03em;
      }
    }
  }

  @media ${device.tablet} {
    height: 400px;

    .CTAContainer {
      .innerLayout {
        padding: 96px 48px;

        h3 {
          font-size: 40px;
          line-height: 52px;
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
          font-size: 32px;
          line-height: 48px;
        }
      }
    }
  }
`;
