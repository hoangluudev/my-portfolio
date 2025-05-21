"use client";

import React from "react";
import { Box, Grid, Tooltip, Typography } from "@mui/material";
import ScrollArea from "../ui/ScrollArea";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMysql, SiTypescript, SiVite } from "react-icons/si";
import { IconType } from "react-icons/lib";

interface SkillsProps {
  title: string;
  description: string;
  items: { icon: IconType; name: string }[];
}

const skillInfo: SkillsProps = {
  title: "My skills",
  description: `I have developed strong front-end and back-end skills through hands-on practice with modern technologies.
   My focus includes building responsive UIs with React Vite, and Material UI, and developing scalable
    server-side applications using Express.js and MongoDB.`,
  items: [
    {
      icon: FaHtml5,
      name: "HTML5",
    },
    {
      icon: FaCss3,
      name: "CSS3",
    },
    {
      icon: FaJs,
      name: "Javascript",
    },
    {
      icon: SiTypescript,
      name: "Typescript",
    },
    {
      icon: FaReact,
      name: "React JS",
    },
    {
      icon: SiVite,
      name: "Vite",
    },
    {
      icon: RiNextjsFill,
      name: "Next.JS",
    },
    {
      icon: RiTailwindCssFill,
      name: "Tailwind CSS",
    },
    {
      icon: FaNode,
      name: "Node.JS",
    },
    {
      icon: FaFigma,
      name: "Figma",
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
    },
    {
      icon: SiMysql,
      name: "MySQL",
    },
  ],
};

const Skills: React.FC = () => {
  return (
    <Box width={"100%"}>
      <Typography
        sx={{ textAlign: "center", fontSize: "2rem", fontWeight: 700 }}
      >
        {skillInfo.title}
      </Typography>
      <Typography sx={{ textAlign: "center", my: 4 }}>
        {skillInfo.description}
      </Typography>
      <ScrollArea height={"380px"} thumbColor="#02FC99">
        <Grid container spacing={2} sx={{ width: "100%" }}>
          {skillInfo.items.map((item, index) => {
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
