import styled from 'styled-components';

export const Container = styled.div`
  background: ${p => p.theme.colors.bg};
  color: ${p => p.theme.colors.text};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;
export const Switch = styled.div`
  cursor: pointer;
  margin-right: 23px;
  transition: ${p => p.theme.transition};
  :hover {
    transform: scale(1.03);
  }
`;
export const LogOutText = styled.p`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const HeaderWrap = styled.header`
  top: 0;
  position: sticky;
  z-index: 999;
  width: 100vw;
  min-height: 64px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  background: ${p => p.theme.colors.bg};
`;

export const Navmenu = styled.div`
  display: flex;
  align-items: center;
`;
