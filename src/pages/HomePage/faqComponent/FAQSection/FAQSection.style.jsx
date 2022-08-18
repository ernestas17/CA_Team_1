import styled from 'styled-components';
const device = {
  mobile: `(max-width: 628px)`,

  tablet: `(max-width: 1280px)`,
};
export const Div = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 50px;
  padding-bottom: 128px;

  @media ${device.mobile} {
    padding-bottom: 50px;
  }
`;
