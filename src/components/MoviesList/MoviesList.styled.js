import styled from 'styled-components';

export const MoviesContainer = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${p => p.theme.space[5]}px;
  margin-top: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[1]}px;
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
  height: 570px;
  margin-bottom: ${p => p.theme.space[3]}px;
  object-fit: cover;
`;
export const MovieTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
`;
