import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledCard = styled(motion.div)`
  padding: ${p => p.theme.space[3]}px;

  @media screen and (min-device-width: 320px) and (max-device-width: 375px) {
    padding: ${p => p.theme.space[2]}px;
  }
`;
export const StyledCardBox = styled.div`
  padding-bottom: ${p => p.theme.space[3]}px;
  transition: ${p => p.theme.transition};

  &:hover {
    transform: scale(1.08);
  }
`;

export const ImageBox = styled(motion.div)`
  position: relative;
  width: 160px;
  @media screen and (min-width: 640px) {
    width: 200px;
  }
  @media screen and (min-width: 768px) {
    width: 240px;
  }
  @media screen and (min-width: 1440px) {
    width: 280px;
  }
  @media screen and (min-width: 1534px) {
    width: 320px;
  }
`;
export const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: ${p => p.theme.space[4]}px;
  text-align: center;
  opacity: 0;
  transition: ${p => p.theme.transition};

  :hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
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

export const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
`;