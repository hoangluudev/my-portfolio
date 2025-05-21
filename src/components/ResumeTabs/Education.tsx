"use client";

import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ScrollArea from "../ui/ScrollArea";

interface EducationProps {
  title: string;
  description: string;
  items: { name: string; degree: string; duration: string }[];
}

const educationInfo: EducationProps = {
  title: "My education",
  description: `I've built a strong foundation in IT through formal education and enhanced my
   web development skills with a focus on the MERN stack through full-stack training programs.`,
  items: [
    {
      name: "Information Technology College HCM",
      degree: "Associate Degree in Information Technology",
      duration: "09/2020 - 09/2023",
    },
    {
      name: "Onschool Bootcamp",
      degree: "Full Stack Javascript Web Development",
      duration: "11/2023 - Present",
    },
  ],
};

const Education: React.FC = () => {
  return (
    <Box width={"100%"}>
      <Typography
        sx={{ textAlign: "center", fontSize: "2rem", fontWeight: 700 }}
      >
        {educationInfo.title}
      </Typography>
      <Typography sx={{ textAlign: "center", my: 4 }}>
        {educationInfo.description}
      </Typography>
      <ScrollArea height={"380px"} thumbColor="#02FC99">
        <Grid container spacing={3} sx={{ width: "100%" }}>
          {educationInfo.items.map((item, index) => {
            return (
              <Grid
                key={index}
                size={{ xs: 12, md: 6 }}
                sx={{
                  background: "#232329",
                  textAlign: { xs: "center", md: "left" },
                  p: 5,
                  "&:hover": {
                    background: "#2f2f37",
                    h3: {
                      color: "#02FC99",
                    },
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#02FC99",
                  }}
                >
                  {item.duration}
                </Typography>
                <Typography
                  component={"h3"}
                  sx={{ mb: 2, fontSize: "1.25rem" }}
                >
                  {item.degree}
                </Typography>
                <Stack
                  flexDirection="row"
                  justifyContent={{ xs: "center", md: "start" }}
                  alignItems={"center"}
                  columnGap={2}
                >
                  <Typography
                    component={"span"}
                    sx={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#02FC99",
                    }}
                  ></Typography>
                  <Typography sx={{ color: "#999999" }}>{item.name}</Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </ScrollArea>
    </Box>
  );
};

export default Education;
