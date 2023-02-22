import 'styled-components';
import { ITheme, ThemeEnum } from './src/interfaces/styled';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum;
  }
}

// declare module 'styled-components' {
//   // export interface DefaultTheme {
//   //   colors: {
//   //     black: string;
//   //     white: string;
//   //     text: string;
//   //     background: string;
//   //     primary: string;
//   //     secondary: string;
//   //     accent: string;
//   //     muted: string;
//   //   };
//   //   space: number[];
//   //   fonts: {
//   //     body: string;
//   //   };
//   //   fontSizes: {
//   //     xs: string;
//   //     s: string;
//   //     m: string;
//   //     l: string;
//   //     xl: string;
//   //   };
//   //   fontWeights: {
//   //     normal: number;
//   //     medium: number;
//   //     semiBold: number;
//   //     bold: number;
//   //   };
//   //   lineHeights: {
//   //     body: number;
//   //     heading: number;
//   //   };
//   //   borders: {
//   //     none: string;
//   //     normal: string;
//   //   };
//   //   radii: {
//   //     none: string;
//   //     sm: string;
//   //     md: string;
//   //     lg: string;
//   //     round: string;
//   //   };
//   // }
// }
