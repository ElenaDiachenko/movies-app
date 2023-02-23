import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  position: relative;
  background: ${p => p.theme.colors.bg};
  color: ${p => p.theme.colors.text};
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
export const Switch = styled.div`
  cursor: pointer;
  margin-right: 32px;
  transition: ${p => p.theme.transition};
  :hover {
    transform: scale(1.03);
  }
`;
export const HeaderWrap = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 11;
  height: 64px;
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px 0;
  background: ${p => p.theme.colors.bg};
  padding: 0 ${p => p.theme.space[4]}px;

  > nav {
    display: flex;
    gap: ${p => p.theme.space[5]}px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: ${p => p.theme.radii.sm};
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.medium};
  box-shadow: ${p => p.theme.boxShadows.primary};
  transition: ${p => p.theme.transition};

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
    transform: scale(1.03);
  }
  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
`;
