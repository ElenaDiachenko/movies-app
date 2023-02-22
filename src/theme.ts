import { DefaultTheme } from 'styled-components';
import { ITheme, ThemeEnum } from 'interfaces/styled';

const theme: ITheme = {
  colors: {
    black: '#000',
    white: '#fff',
    primary: '#07c',
    secondary: '#05a',
    accent: '#3498db',
    muted: '#f6f6f6',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.33,
  },
  borders: {
    none: 'none',
    normal: '2px solid black',
  },
  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    round: '50%',
  },
};

export const lightTheme: DefaultTheme = {
  ...theme,
  type: ThemeEnum.light,

  colors: {
    ...theme.colors,
    bg: '#E5E4E8',
    text: '#19191B',
  },
};

export const darkTheme: DefaultTheme = {
  ...theme,
  type: ThemeEnum.dark,

  colors: {
    ...theme.colors,
    bg: '#19191B',
    text: '#E5E4E8',
  },
};