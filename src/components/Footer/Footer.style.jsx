import styled from "styled-components";

const device = {
  mobile: `(max-width: 628px)`,
  tablet: `(max-width: 1280px)`,
};

export const StyledWrapper = styled.div`
  background: #1e1b1b;
  padding: 64px 0;

  @media ${device.tablet} {
    padding: 32px 24px;
  }

  @media ${device.mobile} {
    padding: 24px;
  }
`;

export const StyledInnerWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  .navigation {
    display: flex;
    gap: 36px;

    a {
      color: #ffffff;

      font-weight: 600;
      font-size: 16px;
      line-height: 28px;

      text-decoration: none;

      &:hover {
        cursor: pointer;
        color: #ff6433;
      }
    }
  }

  .copyright {
    color: #939191;

    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
  }

  @media ${device.tablet} {
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;

    .copyright {
      width: 100%;
    }
  }

  @media ${device.mobile} {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 8px;

    .navigation {
      display: none;
    }

    .copyright {
      text-align: center;
    }
  }
`;
