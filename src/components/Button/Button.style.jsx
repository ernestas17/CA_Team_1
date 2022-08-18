import styled from 'styled-components';
const device = {
  mobile: `(max-width: 268px)`,
  tablet: `(max-width: 1280px)`,
};
export const StyledAnchor = styled.a``;
export const StyledButton = styled.button`
  border-radius: 12px;
  border: none;
  color: white;
  padding: 16px 40px;
  gap: 10px;

  font-size: 18px;
  font-weight: 400;
  line-height: 31.5px;
  cursor: pointer;

  @media ${device.tablet} {
    padding: 14px 30px;
    font-size: 16px;
  }

  @media ${device.mobile} {
    padding: 8px 20px;
    font-size: 14px;
  }
`;
