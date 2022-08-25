import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 ${p => p.theme.space[4]}px;
  max-width: 1200px;
  margin: 0 auto;
`;
export const HeaderWrap = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 10;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.space[3]}px 0;
  background-color: ${p => p.theme.colors.white};

  > nav {
    display: flex;
    gap: ${p => p.theme.space[5]}px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: ${p => p.theme.radii.sm};
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.medium};
  :hover {
    color: ${p => p.theme.colors.accent};
  }
  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
`;
