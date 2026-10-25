"use client";

import { createGlobalStyle } from "styled-components";

export const ThemeGlobalStyles = createGlobalStyle`
  :root {
    --background: #0a0a0b;
    --surface: #111114;
    --surface-elevated: #18181c;
    --border: rgba(255, 255, 255, 0.08);
    --border-hover: rgba(198, 255, 61, 0.35);
    --foreground: #f4f4f0;
    --muted: #8a8a93;
    --accent: #c6ff3d;
    --accent-dim: rgba(198, 255, 61, 0.12);
  }

  html, body {
    background-color: #0a0a0b !important;
    color: #f4f4f0 !important;
  }
`;
