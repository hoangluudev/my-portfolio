"use client";

import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";

const cache = createCache({ key: "css", prepend: true });

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cache}>
        <CssBaseline />
        {children}
      </CacheProvider>
    </ThemeProvider>
  );
}
