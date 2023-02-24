import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;

  padding: 8px 16px;

  border-radius: ${p => p.theme.radii.sm};
  text-decoration: none;
  border: none;
  background: ${p => p.theme.colors.bg};
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.medium};
  box-shadow: ${p => p.theme.boxShadows.primary};
  transition: ${p => p.theme.transition};

  &:hover,
  :focus {
    color: ${p => p.theme.colors.accent};
    transform: scale(1.01);
    cursor: pointer;
  }
`;
