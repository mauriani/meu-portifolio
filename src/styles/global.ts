import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --white:#FFFFFF;
  --gray-100: #f2f2f2;
  --gray-150: #F0EDF5;
  --gray-200: #d9d9d9;
  --gray-300: #808080;
  --gray-400: #333333;
  --gray-500: #262626;
  --gray-600: #1a1a1a;
  --gray-700: #0d0d0d;
  --gray-800: #202024;
  --gray-850: #1e232a;
  --gray-870: #191920;
  --gray-900: #121214;
  --gray-950: #06050b;


  --blue-300: #4ea8de;
  --blue-700: #1e6f9f;

  --green-300: #52EC87;

  --yellow-300: #EBC136;

  --purple-300: #8047F8;
  --purple-400: #8284fa;
  --purple-700: #5e60ce;

  --red-500: #e25858;
}


:focus {
  outline: transparent;
  box-shadow: 0 0 0 2px var(--purple-300);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--gray-870);
  color: var(--white);
  -webkit-font-smoothing: antialiased;
}

html {
  // quando o meu usuário estiver com uma tela
  @media(max-width:1080px){
    font-size: 93.75%; // isso resulta em 15px
  }
  @media (max-width: 720px){
    font-size: 87.5%; // isso resulta em 14px
  }
}

nav, ul {
  list-style:none;
}
  
body,
input,
textarea,
button {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
`;
