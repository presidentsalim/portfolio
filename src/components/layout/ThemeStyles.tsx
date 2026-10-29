"use client";

import { createGlobalStyle } from "styled-components";

export const ThemeGlobalStyles = createGlobalStyle`
  html, body {
    background-color: var(--background) !important;
    color: var(--foreground) !important;
  }
`;
