import styled from "styled-components";

export const StyledHeader = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;

  img {
    width: 122px;
  }
`;

export const StyledNav = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const StyledLinksWrapper = styled.ul`
  display: flex;
  gap: 40px;
  padding-right: 32px;

  a {
    text-decoration: none;
    color: #1e1b1b;

    font-size: 16px;
    line-height: 28px;
    font-weight: 600;
  }

  a:hover {
    color: #ff6433;
  }
`;

export const StyledAssistanceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  border-left: 1px solid #939191;
  padding-left: 32px;

  i {
    font-size: 24px;
    color: #61c4a1;
  }

  div {
    p {
      color: #1e1b1b;
      font-weight: 600;
      font-size: 18px;
      line-height: 32px;
    }

    p:nth-child(1) {
      opacity: 0.7;

      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
