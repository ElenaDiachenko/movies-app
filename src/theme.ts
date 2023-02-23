import { DefaultTheme } from 'styled-components';
import { ITheme, ThemeEnum } from 'interfaces/styled';

const theme: ITheme = {
  colors: {
    black: '#000',
    white: '#fff',
    accent: '#cc7c12',
    primary: '#07c',
    secondary: '#05a',
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
  boxShadows: {
    primary: `0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)`,
  },
  transition: `all 250ms cubic-bezier(0.4, 0, 0.2, 1)`,
};

export const lightTheme: DefaultTheme = {
  ...theme,
  type: ThemeEnum.light,

  colors: {
    ...theme.colors,
    bg: '#edebf6',
    text: '#19191B',
  },
  boxShadows: {
    ...theme.boxShadows,
    accent: `0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)`,
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
  boxShadows: {
    ...theme.boxShadows,
    accent: `0 8px 18px rgb(255 255 255 / 25%), 0 5px 7px rgb(255 255 255 / 22%)`,
  },
};
