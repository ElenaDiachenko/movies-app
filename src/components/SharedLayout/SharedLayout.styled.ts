import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  background: ${p => p.theme.colors.bg};
  color: ${p => p.theme.colors.text};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-width: 100%;
  min-height: 100%;
  margin: 0 auto;
`;
export const Switch = styled.div`
  cursor: pointer;
  margin-right: 23px;
  transition: ${p => p.theme.transition};
  :hover {
    transform: scale(1.03);
  }
  @media screen and (min-width: 768px) {
    margin-right: 32px;
  }
`;
export const LogOutText = styled.p`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const HeaderWrap = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 999;
  height: 64px;
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  background: ${p => p.theme.colors.bg};
`;

export const Navmenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
