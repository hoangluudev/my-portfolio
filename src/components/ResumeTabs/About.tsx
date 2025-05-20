"use client";

import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ScrollArea from "../ui/ScrollArea";

interface AboutItemsProps {
  fieldName: string;
  fieldValue: string;
}
interface AboutProps {
  data: {
    title: string;
    description: string;
    items: AboutItemsProps[];
  };
}

const About: React.FC<AboutProps> = ({ data }) => {
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
