import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${p => p.theme.space[4]}px;
  gap: ${p => p.theme.space[3]}px;
`;

export const GenreItem = styled.div`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: ${p => p.theme.boxShadows.primary};
  font-weight: ${p => p.theme.fontWeights.medium};
  transition: ${p => p.theme.transition};

  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.accent};
    transform: scale(1.01);
    cursor: pointer;
  }
  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
`;
