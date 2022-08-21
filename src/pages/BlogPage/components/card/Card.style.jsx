import styled from 'styled-components';
const device = {
  mobile: `(max-width: 628px)`,

  tablet: `(max-width: 1280px)`,
};

export const StyledCard = styled.div`
  height: 746px;
  max-width: 537px;
  background-color: #ffffff;
  padding: 32px 32px 48px 32px;
  @media ${device.tablet} {
    height: auto;
    width: 100%;
  }
  @media ${device.mobile} {
  }

  .container {
    height: 100%;
    width: 100%;

    .image {
      height: 330px;
      width: 100%;
      background-color: blue;
    }
    .posted-data {
      margin-top: 32px;
      color: #939191;
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
      opacity: 80%;
    }
    h4 {
      width: 100%;
      color: #1e1b1b;
      font-weight: 700;
      font-size: 40px;
      line-height: 56px;
      letter-spacing: -1.5px;
    }
    p {
      margin-top: 16px;
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
      opacity: 60%;
    }
    .arrow {
      display: flex;

      gap: 16px;
      margin-top: 32px;
      font-size: 18px;
      font-weight: 700;
      line-height: 31.5px;
      color: #1e1b1b;
    }

    @media ${device.tablet} {
      h4 {
        font-size: 28px;
        line-height: 38px;
      }
    }
    @media ${device.mobile} {
    }
  }
`;
