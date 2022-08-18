import styled from "styled-components";

const device = {
  mobile: `(max-width: 628px)`,
  tablet: `(max-width: 1280px)`,
};

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;

  padding: 88px 66px;

  .circle {
    height: 64px;
    width: 64px;
    border-radius: 50%;

    background-color: #ffdace;

    display: flex;
    align-items: center;
    text-align: center;

    margin-bottom: 24px;

    i {
      width: 100%;
      font-size: 32px;
    }
  }

  h6 {
    color: #000000;

    font-weight: 700;
    font-size: 32px;
    line-height: 48px;

    text-align: center;
    letter-spacing: -0.03em;

    margin-bottom: 16px;
  }

  p {
    color: #232536;
    opacity: 0.6;

    font-weight: 600;
    font-size: 18px;
    line-height: 32px;

    text-align: center;
  }
`;
