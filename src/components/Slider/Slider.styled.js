import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  width: 100%;
`;
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 -1rem 8rem 0;
`;
export const Title = styled.h3`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
`;

export const SliderItemsBox = styled(motion.div)`
  width: 100%;
  overflow: hidden;
`;

export const SliderItemsBoxInner = styled(motion.div)`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  padding: 16px;
  cursor: grab;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonIcon = styled.div`
  border: 1px solid ${p => p.theme.colors.black};
  padding: ${p => p.theme.space[1]}px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;
`;

export const Left = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgb(22, 22, 22, 0.5);
  color: white;
  position: absolute;
  left: 0;
  z-index: 99;
  // top: 0;
  bottom: 30px;
  margin: auto;
  cursor: pointer;
`;
export const Right = styled.div`
  width: 50px;
  height: 100%;
  background-color: rgb(22, 22, 22, 0.5);
  color: white;
  position: absolute;
  right: 0;
  z-index: 99;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
`;

export const Slider = styled.div`
  margin-left: 50px;
  display: flex;
  margin-top: 10px;
  width: max-content;
  transform: translateX(0px);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;
