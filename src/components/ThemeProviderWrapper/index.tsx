"use client";

import { ThemeProvider } from "styled-components";
import theme from "@theme/theme";
import GlobalStyle from "@theme/global";

export function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
