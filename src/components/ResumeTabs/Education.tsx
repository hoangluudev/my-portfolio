"use client";

import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ScrollArea from "../ui/ScrollArea";

interface EducationItemsProps {
  name: string;
  degree: string;
  duration: string;
}
interface EducationProps {
  data: {
    icon: string;
    title: string;
    description: string;
    items: EducationItemsProps[];
  };
}

const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <Box width={"100%"}>
      <Typography
        sx={{ textAlign: "center", fontSize: "2rem", fontWeight: 700 }}
      >
        {data.title}
      </Typography>
      <Typography sx={{ textAlign: "center", my: 4 }}>
        {data.description}
      </Typography>
      <ScrollArea height={"380px"} thumbColor="#02FC99">
        <Grid container spacing={3} sx={{ width: "100%" }}>
          {data.items.map((item, index) => {
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
