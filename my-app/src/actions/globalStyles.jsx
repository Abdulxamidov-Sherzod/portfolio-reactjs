import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
html{
    &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: darkblue;
  }
}
body{
    font-family:  'Abril Fatface', cursive;
    width: 100%;
}
h2{
    font-family: sans-serif;
    color: red;
}
`;

export default GlobalStyles;
