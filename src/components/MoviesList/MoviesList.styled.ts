import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[2]}px;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieItem = styled.li`
  width: 100%;
  min-height: 350px;
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: ${p => p.theme.boxShadows.accent};
  transition: ${p => p.theme.transition};

  :hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;
export const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: ${p => p.theme.space[3]}px;
  object-fit: cover;
`;
export const MovieTitle = styled.h2`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
`;
export const StyledLink = styled(Link)`
  padding: 8px;
  border-radius: ${p => p.theme.radii.sm};
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.medium};
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: ${p => p.theme.transition};

  :hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
