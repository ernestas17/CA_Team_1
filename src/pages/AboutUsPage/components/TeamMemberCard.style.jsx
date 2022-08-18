import styled from "styled-components";

const device = {
  mobile: `(max-width: 628px)`,
  tablet: `(max-width: 1280px)`,
};

export const StyledCard = styled.div`
  width: calc(100% / 3 - 32px);

  .teamImage {
    width: 100%;
    height: 316px;
  }

  .content {
    background-color: #161616;
    padding: 24px;

    h6 {
      color: #ffffff;

      font-weight: 600;
      font-size: 24px;
      line-height: 36px;

      text-align: center;
      letter-spacing: -0.03em;
    }

    p {
      color: #ffffff;
      opacity: 0.7;

      font-weight: 600;
      font-size: 16px;
      line-height: 28px;

      text-align: center;
    }
  }

  @media ${device.tablet} {
    width: calc(100% / 2 - 32px);
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;
