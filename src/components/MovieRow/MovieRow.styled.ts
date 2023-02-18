import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export const Title = styled.h3`
  padding: ${p => p.theme.space[4]};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
`;

export const RowBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Left = styled(MdChevronLeft)`
  background: ${p => p.theme.colors.white};
  left: 0;
  border-radius: 50%;
  opacity: 0.5;
`;
export const Slider = styled.div`
  width: 100%;
  height: 100%;
  owerflow-x: scroll;
  white-space: nowrap;
  scroll-behavior: smooth;
`;
