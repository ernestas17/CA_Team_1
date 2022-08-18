import styled from 'styled-components';
const device = {
  mobile: `(max-width: 628px)`,

  tablet: `(max-width: 1280px)`,
};
export const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: auto;

  @media only screen and (min-width: 629px) {
    width: 78%;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    font-size: 14px;
    width: 80%;

    color: black;

    display: flex;

    align-items: center;

    @media only screen and (min-width: 629px) {
      font-size: 24px;
      font-weight: 600;
      line-height: 36px;
      letter-spacing: -3%;
    }
  }

  div {
    height: 48px;
    width: 48px;

    background-color: #ff6433;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 40px;
    font-weight: 100;

    cursor: pointer;

    p {
      color: #ffffff;
      font-size: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media only screen and (min-width: 629px) {
      font-size: 16px;
      font-weight: 500;
      line-height: 31.5px;
      letter-spacing: -3%;
    }
  }
`;

export const Anwser = styled.div`
  height: auto;
  width: 90%;

  font-size: 18px;
  line-height: 31.5px;

  & > p {
    margin: 0;
    font-size: 14px;
    width: 100%;
    color: #939191;
  }

  @media only screen and (min-width: 629px) {
    width: 80%;
  }
`;
