import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[4]}px 0;
  gap: 16px;
  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledItem = styled.div`
  width: 100%;
  height: 350px;
  padding: ${p => p.theme.space[2]}px;
  background-color: rgb(199, 199, 199, 0.7);
  border-radius: ${p => p.theme.borders.sm};

  @media screen and (min-width: 768px) {
    height: 370px;
  }
  @media screen and (min-width: 960px) {
    height: 390px;
  }
`;
