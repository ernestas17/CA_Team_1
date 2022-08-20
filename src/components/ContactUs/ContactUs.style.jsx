import styled from "styled-components";

const device = {
  mobile: `(max-width: 628px)`,
  tablet: `(max-width: 1280px)`,
};

export const StyledLayout = styled.div`
  background: #1e1b1b;
  opacity: 0.98;

  padding: 128px 0;

  @media ${device.tablet} {
    padding: 96px 24px;
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
      color: #ffffff;

      font-weight: 700;
      font-size: 48px;
      line-height: 67px;

      letter-spacing: -0.03em;
    }

    .socialIcons {
      display: flex;
      gap: 24px;

      i {
        color: #ffffff;
        font-size: 24px;

        &:hover {
          cursor: pointer;
          color: #ff6433;
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
        color: #ffffff;
        opacity: 0.6;

        font-weight: 600;
        font-size: 18px;
        line-height: 32px;
      }

      h6 {
        color: #ffffff;

        font-weight: 600;
        font-size: 24px;
        line-height: 36px;

        letter-spacing: -0.03em;
      }
    }
  }

  @media ${device.tablet} {
    gap: 48px;

    .left {
      width: 1000px;
    }
  }

  @media ${device.mobile} {
    flex-direction: column;
    gap: 48px;

    .left {
      width: 100%;
      gap: 32px;
      text-align: center;

      .socialIcons {
        justify-content: center;
      }
    }

    .right {
      text-align: center;
    }
  }
`;
