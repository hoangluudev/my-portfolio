"use client";

import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ScrollArea from "../ui/ScrollArea";

interface ExperienceInfoProps {
  title: string;
  description: string;
  items: {
    name: string;
    position: string;
    duration: string;
  }[];
}
const experienceInfo: ExperienceInfoProps = {
  title: "My experience",
  description: `I gained practical experience in both fullstack development and system administration through internships,
   working with modern web technologies and Linux-based infrastructure.`,
  items: [
    {
      name: "MaskCodex",
      position: "Front-End Developer Intern",
      duration: "05/2020 - 07/2022",
    },
    {
      name: "Bach Kim Network Solutions",
      position: "System Adminstrator Intern",
      duration: "04/2025 - 05/2025",
    },
  ],
};

const Experience: React.FC = () => {
  return (
    <Box width={"100%"}>
      <Typography
        sx={{ textAlign: "center", fontSize: "2rem", fontWeight: 700 }}
      >
        {experienceInfo.title}
      </Typography>
      <Typography sx={{ textAlign: "center", my: 4 }}>
        {experienceInfo.description}
      </Typography>
      <ScrollArea height={"380px"} thumbColor="#02FC99">
        <Grid container spacing={3} sx={{ width: "100%" }}>
          {experienceInfo.items.map((item, index) => {
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
                  {item.position}
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

export default Experience;
