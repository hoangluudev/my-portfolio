"use client";

import React from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { BsArrowDownRight } from "react-icons/bs";
import ComponentFadeIn from "@/components/ComponentEffect/ComponentFadeIn";
import MuiLink from "@/components/MuiLink";

const serviceList = [
  {
    num: "01",
    title: "Fullstack Developer",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. Doloribus, repudiandae facere!`,
  },
  {
    num: "02",
    title: "Front-End Developer",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. Doloribus, repudiandae facere!`,
  },
  {
    num: "03",
    title: "Back-End Developer",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. Doloribus, repudiandae facere!`,
  },
  {
    num: "04",
    title: "UI/UX Designer",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. Doloribus, repudiandae facere!`,
  },
];

const ServicePage = () => {
  return (
    <section>
      <Container>
        <ComponentFadeIn>
          <Grid container spacing={3}>
            {serviceList.map((item, index) => {
              return (
                <Grid
                  key={index}
                  size={{ xs: 12, sm: 6 }}
                  sx={{
                    borderBottom: "1px solid gray",
                    py: { xs: 2, sm: 3 },
                    "&:hover": {
                      ".service-number": {
                        WebkitTextStroke: "1px #02FC99",
                      },
                      ".CustomMuiLink": {
                        background: "#02FC99!important",
                        rotate: "-45deg",
                      },
                      ".service-title": {
                        color: "#02FC99",
                      },
                    },
                  }}
                >
                  <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography
                      component="h3"
                      className="service-number"
                      sx={{
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        WebkitTextStroke: "1px #ffffff",
                        color: "transparent",
                        transition: "all 0.2s ease-in-out",
                      }}
                    >
                      {item.num}
                    </Typography>
                    <MuiLink
                      href="#"
                      sx={{
                        width: "max-content",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#000",
                        background: "#fff",
                        fontSize: "1.5rem",
                        transition: "all 0.2s ease-in-out",
                        p: 1.5,
                      }}
                    >
                      <BsArrowDownRight />
                    </MuiLink>
                  </Stack>
                  <Typography
                    className="service-title"
                    sx={{
                      fontSize: "2rem",
                      fontWeight: 700,
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#999999",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </ComponentFadeIn>
      </Container>
    </section>
  );
};

export default ServicePage;
