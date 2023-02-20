import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  width: 100%;
`;
export const Container = styled.div`
  margin: 0 auto;
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
  padding: ${p => p.theme.space[4]}px;
  cursor: grab;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonIcon = styled.div`
  background-color: rgb(225, 225, 225, 0.5);
  color: black;
  position: absolute;
  border: 1px solid ${p => p.theme.colors.black};
  padding: ${p => p.theme.space[1]}px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;
  z-index: 10;
  bottom: calc(50% - 20px); ;
`;

export const Left = styled(ButtonIcon)`
  left: 0;
`;
export const Right = styled(ButtonIcon)`
  right: 0;
`;
