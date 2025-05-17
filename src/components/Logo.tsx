import React from "react";
import { Typography } from "@mui/material";
import MuiLink from "./MuiLink";

const Logo = () => {
  return (
    <MuiLink
      href={"/"}
      sx={{
        color: "#fff",
        fontSize: "2.25rem",
        fontWeight: 600,
        textDecoration: "none",
      }}
    >
      Luu
      <Typography
        component={"span"}
        sx={{
          color: "#02FC99",
          fontSize: "2.25rem",
        }}
      >
        .
      </Typography>
    </MuiLink>
  );
};

export default Logo;
