import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// list
export const Wrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;
// listTitle
export const Title = styled.h3`
  margin-left: 50px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
`;

// wrappre=>arrow=> container=>arrow
export const RowBox = styled.div`
  position: relative;
`;

export const Left = styled.div`
  width: 50px;
  height: 100%;
  background-color: rgb(22, 22, 22, 0.5);
  color: white;
  position: absolute;
  left: 0;
  z-index: 9;
  top: 0;
  bottom: 0;
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

// export const Title = styled.h3`
//   padding: ${p => p.theme.space[4]}px;
//   font-weight: ${p => p.theme.fontWeights.bold};
//   font-size: ${p => p.theme.fontSizes.l};
// `;

// export const RowBox = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
// `;

// export const Left = styled(MdChevronLeft)`
//   background: ${p => p.theme.colors.white};
//   z-index: 10;
//   left: 0;
//   border-radius: 50%;
//   opacity: 0.5;
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

//   :hover {
//     opacity: 1;
//   }
// `;
// export const Right = styled(MdChevronRight)`
//   background: ${p => p.theme.colors.white};
//   z-index: 10;
//   right: 0;
//   border-radius: 50%;
//   opacity: 0.5;
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

//   :hover {
//     opacity: 1;
//   }
// `;
// export const Slider = styled.div`
//   width: 100%;
//   height: 100%;
//   owerflow-x: scroll;
//   white-space: nowrap;
//   scroll-behavior: smooth;
// `;
