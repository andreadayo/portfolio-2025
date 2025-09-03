import { createGlobalStyle } from "styled-components";

import { neueMontreal } from "./fonts";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-family: ${neueMontreal.style.fontFamily}, Arial, sans-serif;
    font-weight: 450;
    font-size: 1rem;
    font-display: optional;

    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  body {
    scroll-behavior: smooth;
    align-items: center;
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme?.contentColor};
    font-family: ${neueMontreal.style.fontFamily}, Arial, sans-serif;
    font-weight: 450;
    font-display: optional;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    overflow-x: hidden;

    font-smooth: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  a {
    text-decoration: solid;
  }

  a:visited {
    color: ${({ theme }) => theme?.contentColor};
  }

  h1, h2, h3, h4 {
    font-family: ${neueMontreal.style.fontFamily}, Arial, sans-serif;
  }

  #__next {
    width: 100%;
    height: 100%;
    overflow-x: hidden;


    @media only screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
      overflow-x: initial;
    }

  }

  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation: none !important;
      transition: none !important;
    }
  }
`;

export default GlobalStyle;
