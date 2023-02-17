import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
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
export const AuthorName = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const Content = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
`;
