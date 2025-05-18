"use client";

import React from "react";
import { Box, Grid, Tooltip, Typography } from "@mui/material";
import ScrollArea from "../ui/ScrollArea";
import { IconType } from "react-icons/lib";

interface SkillsItemsProps {
  icon: IconType;
  name: string;
}
interface SkillsProps {
  data: {
    title: String;
    description: String;
    items: SkillsItemsProps[];
  };
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
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
        <Grid container spacing={2} sx={{ width: "100%" }}>
          {data.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Tooltip key={index} title={item.name}>
                <Grid
                  size={{ xs: 6, md: 3 }}
                  sx={{
                    background: "#232329",
                    textAlign: { xs: "center", md: "left" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 5,
                    "&:hover": {
                      background: "#2f2f37",
                      ".icon": {
                        color: "#02FC99",
                      },
                    },
                  }}
                >
                  <Icon className="icon" size={32} />
                </Grid>
              </Tooltip>
            );
          })}
        </Grid>
      </ScrollArea>
    </Box>
  );
};

export default Skills;
