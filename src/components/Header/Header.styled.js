import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p => p.theme.space[4]}px;
  height: 65px;
  max-width: 1200px;
  padding: 8px 16px;
  margin: 0 auto;
  > nav {
    display: flex;
    gap: ${p => p.theme.space[5]}px;
  }
`;

export const HeaderWrap = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  background-color: ${p => p.theme.colors.white};
  margin-bottom: ${p => p.theme.space[4]}px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: ${p => p.theme.radii.sm};
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.medium};

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
`;
