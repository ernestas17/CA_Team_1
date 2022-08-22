import styled from 'styled-components';
const device = {
  mobile: `(max-width: 628px)`,

  tablet: `(max-width: 1280px)`,
};

export const StyledCard = styled.div`
  height: 606px;
  width: 405px;
  &:hover {
    border: 1px solid #ffffff;
  }
  .image {
    width: 100%;
    height: 266px;
  }
  p {
    margin-top: 24px;
    margin-bottom: 16px;
    color: #939191;
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
  }
  h4 {
    margin-bottom: 16px;
    color: #1e1b1b;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -3%;
  }
  span {
    color: #232536;
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -3%;
  }

  @media ${device.tablet} {
    width: 95%;
  }

  @media ${device.mobile} {
    p {
      font-size: 12px;
    }
    h4 {
      font-size: 22px;
      line-height: 32px;
    }
    span {
      width: 90%;
    }
  }
`;
