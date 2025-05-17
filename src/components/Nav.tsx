"use client";
import React from "react";
import { Stack } from "@mui/material";
import { usePathname } from "next/navigation";
import MuiLink from "./MuiLink";

type NavLink = {
  name: string;
  path: string;
};

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "Service", path: "/service" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const Nav: React.FC = () => {
  const pathName = usePathname();

  return (
    <Stack flexDirection={"row"} alignItems={"center"} columnGap={3}>
      {navLinks.map((link) => (
        <MuiLink
          href={link.path}
          key={link.path}
          sx={{
            color: pathName === link.path ? "#02FC99" : "#fff",
            fontSize: "1rem",
            fontWeight: 500,
            borderBottom:
              pathName === link.path
                ? "2px solid #02FC99"
                : "2px solid transparent",
            textDecoration: "none",
            transition: "0.25s ease-in-out",
            "&:hover": {
              color: "#02FC99",
              borderBottom: "2px solid #02FC99",
            },
          }}
        >
          {link.name}
        </MuiLink>
      ))}
    </Stack>
  );
};

export default Nav;
