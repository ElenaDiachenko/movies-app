import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  max-width: 1200px;
  padding: 8px 16px;
  margin: 0 auto;
  > nav {
    display: flex;
    gap: 12px;
  }
`;

export const HeaderWrap = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  background-color: ${p => p.theme.colors.white};
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
