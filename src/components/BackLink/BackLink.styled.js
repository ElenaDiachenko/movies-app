import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[4]}px; 0;
  color: ${p => p.theme.colors.black};
  text-decoration: none;
  font-weight:${p => p.theme.fontWeights.medium};

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;
