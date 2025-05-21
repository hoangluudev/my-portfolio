"use client";

import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ScrollArea from "../ui/ScrollArea";
import { config } from "@/config/environment/env";

interface AboutProps {
  title: string;
  description: string;
  items: { fieldName: string; fieldValue: string }[];
}

const aboutInfo: AboutProps = {
  title: "About me",
  description: `I'm a passionate web developer focused on building responsive and user-friendly applications
   using modern JavaScript technologies. With over a year of hands-on learning and project experience,
    I'm continuously improving through real practice and self-study.`,
  items: [
    {
      fieldName: "Name",
      fieldValue: "Luu Nguyen",
    },
    {
      fieldName: "Phone",
      fieldValue: config.personalPhoneNumber,
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Telegram",
      fieldValue: config.personalTelegramUrl,
    },
    {
      fieldName: "Nationality",
      fieldValue: "Vietnamese",
    },
    {
      fieldName: "Email",
      fieldValue: config.personalEmail,
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English (Basic), Vietnamese (Native)",
    },
  ],
};

const About: React.FC = () => {
  return (
    <Box width={"100%"}>
      <Typography
        sx={{ textAlign: "center", fontSize: "2rem", fontWeight: 700 }}
      >
        {aboutInfo.title}
      </Typography>
      <Typography sx={{ textAlign: "center", my: 4 }}>
        {aboutInfo.description}
      </Typography>
      <ScrollArea height={"380px"} thumbColor="#02FC99">
        <Grid container spacing={3} sx={{ width: "100%" }}>
          {aboutInfo.items.map((item, index) => {
            return (
              <Grid
                key={index}
                size={{ xs: 12, md: 6 }}
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  display: "flex",
                  justifyContent: { xs: "center", md: "left" },
                  alignItems: "center",
                  "&:hover": {},
                }}
              >
                <Stack
                  flexDirection="row"
                  justifyContent={{ xs: "center", md: "left" }}
                  justifyItems="center"
                  flexWrap={{ xs: "wrap", md: "nowrap" }}
                  columnGap={3}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "0.7rem", md: "0.9rem" },
                      color: "#999999",
                    }}
                  >
                    {item.fieldName}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.8rem", md: "1rem" },
                    }}
                  >
                    {item.fieldValue}
                  </Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </ScrollArea>
    </Box>
  );
};

export default About;
