import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MoviesContainer = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[1]}px;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: ${p => p.theme.borders.none};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: ${p => p.theme.space[3]}px;
  object-fit: cover;
`;
export const MovieTitle = styled.p`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: ${p => p.theme.radii.sm};
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.medium};
`;
