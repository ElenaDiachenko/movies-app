import styled from 'styled-components';

export const Like = styled.div`
  position: absolute;
  top: 6px;
  right: 4px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  transition: ${p => p.theme.transition};
  opacity: 0.6;

  :hover {
    opacity: 1;
  }
`;
