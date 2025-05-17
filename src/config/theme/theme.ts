import { createTheme } from "@mui/material/styles";
import { jetbrainsMono } from "./fonts/fonts";

const theme = createTheme({
  typography: {
    fontFamily: `${jetbrainsMono.style.fontFamily}`,
  },
});

export default theme;
