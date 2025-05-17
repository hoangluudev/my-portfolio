"use client";
import React from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Link as LinkMUI,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Close, Segment } from "@mui/icons-material";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const MobileAppBar: React.FC = () => {
  const pathName = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Stack
        flexDirection="row"
        justifyContent="right"
        alignItems="center"
        sx={{ my: 1, px: 2 }}
      >
        <IconButton onClick={handleDrawerToggle}>
          <Close sx={{ color: "#02ca7a" }} />
        </IconButton>
      </Stack>
      <Typography sx={{ my: 10 }}>
        <Logo />
      </Typography>
      <Divider />
      <List>
        {navLinks.map((link, index) => (
          <ListItem
            key={index}
            sx={{ flexDirection: "row", justifyContent: "center" }}
          >
            <LinkMUI
              key={index}
              component={Link}
              href={link.path}
              sx={{
                width: "max-content",
                color: pathName === link.path ? "#02FC99" : "#fff",
                fontSize: "1rem",
                fontWeight: 500,
                borderBottom: "2px solid transparent",
                textDecoration: "none",
                transition: "0.25s ease-in-out",
                "&:hover": {
                  color: "#02FC99",
                  borderBottom: "2px solid #02FC99",
                },
              }}
            >
              {link.name}
            </LinkMUI>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      component={"div"}
      sx={{ display: { xs: "block", sm: "none" }, mt: "5rem" }}
    >
      <AppBar component="nav" sx={{ background: "#1c1b22", zIndex: 30 }}>
        <Toolbar>
          <Logo />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: "auto", display: { sm: "none" } }}
          >
            <Segment />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          disableScrollLock
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              background: "#1C1B22",
              color: "#fff",
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default MobileAppBar;
