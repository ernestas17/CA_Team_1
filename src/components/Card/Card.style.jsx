import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  background-color: #fff;
  padding: 62px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: 100%;
  height: 100%;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  i {
    color: #1e1b1b;
    font-size: 46px;
    text-align: center;
  }

  h4 {
    color: #1e1b1b;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
  }

  &:hover {
    background-color: #ff6433;

    i {
      color: #fff;
    }

    h4 {
      color: #fff;
    }
  }
`;
