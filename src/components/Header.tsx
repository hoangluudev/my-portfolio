"use client";
import React from "react";
import Nav from "./Nav";
import { Container, Stack, Button } from "@mui/material";
import Logo from "./Logo";
import MobileAppBar from "./MobileAppBar";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          sx={{ display: { xs: "none", sm: "flex" }, py: 3 }}
        >
          <Logo />
          <Stack flexDirection="row" alignItems={"center"} columnGap={1}>
            <Nav />
            <Button
              LinkComponent={Link}
              href="/contact"
              variant="contained"
              sx={{
                color: "black",
                background: "#02FC99",
                borderRadius: "10px",
                textTransform: "inherit",
                px: 2,
                py: 1,
                ml: 2,
                "&:hover": {
                  background: "#02ca7a",
                },
              }}
            >
              Hire me
            </Button>
          </Stack>
        </Stack>
        <MobileAppBar />
      </Container>
    </header>
  );
};

export default Header;
