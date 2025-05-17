import React from "react";
import { Typography, Link as MuiLink } from "@mui/material";
import { Link } from "@/lib/next";

const Logo = () => {
  return (
    <MuiLink
      component={Link}
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
