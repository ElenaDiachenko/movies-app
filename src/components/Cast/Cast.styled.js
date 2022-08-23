import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  grid-gap: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[1]}px;
  padding: ${p => p.theme.space[2]}px;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.borders.sm};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: ${p => p.theme.space[3]}px;
  object-fit: cover;
`;
export const Description = styled.h2`
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.heading};
`;
