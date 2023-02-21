import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  padding: 0 ${p => p.theme.space[4]}px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
export const HeaderWrap = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 11;
  min-height: 64px;
  display: flex;
  align-items: center;
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
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

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
