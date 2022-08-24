import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  max-width: 1200px;
  margin: 0 auto;
`;
