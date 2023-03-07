import styled from 'styled-components';

export const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[4]}px auto;

  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.space[4]}px;
    margin: ${p => p.theme.space[5]}px auto;
  }
`;

export const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${p => p.theme.radii.sm};
  border: transparent;
  color: ${p => p.theme.colors.text};
  background: ${p => p.theme.colors.bg};
  font-weight: ${p => p.theme.fontWeights.bold};
  box-shadow: ${p => p.theme.boxShadows.primary};
  transition: ${p => p.theme.transition};

  :hover {
    color: ${p => p.theme.colors.accent};
  }
  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
  &.hidden {
    @media screen and (max-width: 499px) {
      display: none;
    }
  }
`;
