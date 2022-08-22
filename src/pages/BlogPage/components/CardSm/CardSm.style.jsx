import styled from 'styled-components';
const device = {
  mobile: `(max-width: 628px)`,

  tablet: `(max-width: 1280px)`,
};
export const StyledCardSm = styled.div`
  width: 695px;
  height: 192px;
  margin-top: 32px;
  margin-bottom: 32px;
  &:hover {
    border: 1px solid #ffffff;
  }
  @media ${device.tablet} {
    width: 100%;
  }
  @media ${device.mobile} {
    width: 90%;
  }

  .photo {
    height: 192px;
    width: 192px;
    @media ${device.tablet} {
      height: 120px;
      width: 120px;
      background-repeat: no-repeat;
    }
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 24px;

    @media ${device.tablet} {
      width: 100%;
      gap: 15px;
    }

    h4 {
      width: 478px;
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
      color: #1e1b1b;
      text-decoration: none;

      @media ${device.tablet} {
        font-size: 16px;
        line-height: 26px;
        width: 80%;
      }
    }
    p {
      margin-top: 4px;
      color: #939191;
      font-size: 16px;
      line-height: 28px;
      font-weight: 600;
      opacity: 80%;
    }
  }
`;
