import styled from 'styled-components';

import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  compose,
} from 'styled-system';

export type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps;

type Tag = 'div' | 'ul' | 'li';
export const Box = styled<Tag>('div')<BoxProps>`
  ${compose(space, color, layout, flexbox, grid, background, border, position)}
`;
