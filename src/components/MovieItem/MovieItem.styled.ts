import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImageBox = styled.li`
  position: relative;
  width: 160px;
  display: inline-block;
  cursor: pointer;
  border-radius: ${p => p.theme.borders.none};

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  @media screen and (min-width: 768px) {
    width: 200px;
  }
  @media screen and (min-width: 1200px) {
    width: 280px;
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
  opacity: 0;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  :hover {
    opacity: 1;
  }
`;
export const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  white-space: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
`;
