import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
   min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

#root {
 min-height: 100vh;
  display: flex;
  flex-flow: column nowrap
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
}
h1,
h2,
h3,
h4,
h5,
h6,
p
 {
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
}
`;
