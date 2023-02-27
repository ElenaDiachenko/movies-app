import 'styled-components';
import { ITheme, ThemeEnum } from './src/interfaces/styled';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum;
  }
}
