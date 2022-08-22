import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  background-color: ${(props) => props.theme.primary.colors.light};
  padding: 62px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: 100%;
  height: 100%;

  i {
    color: ${(props) => props.theme.primary.colors.dark};
    font-size: 46px;
    text-align: center;
  }

  h4 {
    color: ${(props) => props.theme.primary.colors.dark};
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
  }

  &:hover {
    background-color: ${(props) => props.theme.primary.colors.primary};

    i {
      color: ${(props) => props.theme.primary.colors.light};
    }

    h4 {
      color: ${(props) => props.theme.primary.colors.light};
    }
  }
`;
