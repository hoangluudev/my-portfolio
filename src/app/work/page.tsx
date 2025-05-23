"use client";
import React from "react";
import {
  Box,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ComponentFadeIn from "@/components/ComponentEffect/ComponentFadeIn";
import MuiLink from "@/components/MuiLink";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface projectProps {
  num: string;
  category: string;
  image: string;
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  stack: {
    name: string;
  }[];
}

const projects: projectProps[] = [
  {
    num: "01",
    category: "Frontend project",
    image: "/assets/work/thumb1.png",
    title: "Portfolio",
    description: `A personal portfolio website (this website) to my showcase projects, skills, and experience.
     Built with responsive modern UI design principles and smooth animations`,
    liveUrl: "",
    githubUrl: "",
    stack: [
      { name: "NextJS" },
      { name: "Material UI" },
      { name: "Framer Motion" },
    ],
  },
  {
    num: "02",
    category: "Fullstack project",
    image: "/assets/work/thumb2.png",
    title: "Rozal Store",
    description: `An e-commerce web application (still in progress) featuring user authentication (JWT),
     OTP-based verification, image uploads (Cloudinary + Sharp), secure payments, and product management with MongoDB.
      Includes role-based access, password encryption (bcrypt), and scheduled tasks (node-schedule).`,
    liveUrl: "",
    githubUrl: "",
    stack: [
      { name: "ReactJS" },
      { name: "Material UI" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
  },
];

const WorkPage: React.FC = () => {
  const [projectIndex, setProjectIndex] = React.useState(0);

  const handlePreviousProjectIndex = () => {
    setProjectIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextProjectIndex = () => {
    setProjectIndex((prev) => (prev < projects.length - 1 ? prev + 1 : prev));
  };

  return (
    <section>
      <Container>
        <ComponentFadeIn>
          {projects.map((item, index) => {
            return (
              projectIndex === index && (
                <Grid
                  key={index}
                  container
                  flexDirection={{ xs: "column-reverse", md: "row" }}
                  columnSpacing={6}
                  rowSpacing={3}
                >
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Stack flexDirection={"column"}>
                      <Typography
                        component="h3"
                        sx={{
                          fontSize: "4rem",
                          fontWeight: 700,
                          WebkitTextStroke: "1px #ffffff",
                          color: "transparent",
                          transition: "all 0.2s ease-in-out",
                        }}
                      >
                        {item.num}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "1.5rem",
                          textTransform: "capitalize",
                          fontWeight: 600,
                          lineHeight: 1,
                        }}
                      >
                        {`${item.title} - ${item.category}`}
                      </Typography>
                      <Typography
                        sx={{ color: "999999", fontSize: "0.9rem", mt: 1 }}
                      >
                        {item.description}
                      </Typography>
                      <Stack
                        flexDirection="row"
                        justifyContent="start"
                        alignItems="center"
                        flexWrap="wrap"
                        sx={{ gap: 1, mt: 2 }}
                      >
                        {item.stack.map((item, index) => {
                          return (
                            <Chip
                              key={index}
                              label={item.name}
                              variant="outlined"
                              size="small"
                              sx={{
                                color: "#02FC99",
                                borderColor: "#02FC99",
                                "&:hover": {
                                  color: "#02ca7a",
                                },
                              }}
                              onClick={() => {
                                return null;
                              }}
                            />
                          );
                        })}
                      </Stack>
                      <Divider sx={{ background: "#666666", my: 2 }} />
                      <Stack
                        flexDirection="row"
                        justifyContent="left"
                        alignItems="center"
                        columnGap={1}
                      >
                        <MuiLink
                          href={item.liveUrl}
                          sx={{
                            fontSize: "1.5rem",
                            background: "#333333",
                            color: "#fff",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            p: 1.5,
                            transition: "all 0.4s ease-in-out",
                            "&:hover": {
                              color: "#02FC99",
                            },
                          }}
                        >
                          <BsArrowUpRight />
                        </MuiLink>
                        <MuiLink
                          href={item.githubUrl}
                          sx={{
                            fontSize: "1.5rem",
                            background: "#333333",
                            color: "#fff",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            p: 1.5,
                            transition: "all 0.4s ease-in-out",
                            "&:hover": {
                              color: "#02FC99",
                            },
                          }}
                        >
                          <FaGithub />
                        </MuiLink>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ maxHeight: "500px", overflow: "hidden" }}>
                      <CardMedia
                        component={"img"}
                        image={item.image}
                        alt={item.title}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Stack
                      flexDirection="row"
                      justifyContent={{ xs: "center", md: "right" }}
                      alignItems="center"
                      columnGap={3}
                      sx={{ mt: 2 }}
                    >
                      <IconButton
                        sx={{
                          background: "#02FC99",
                          color: "#000",
                          borderRadius: 0,
                          "&:hover": {
                            background: "#02ca7a",
                          },
                          "&.Mui-disabled": {
                            background: "#35fdad",
                            pointerEvents: "auto",
                            cursor: "not-allowed",
                          },
                        }}
                        disabled={projectIndex === 0}
                        onClick={handlePreviousProjectIndex}
                      >
                        <ChevronLeft />
                      </IconButton>
                      <Typography>
                        {projectIndex + 1} / {projects.length}
                      </Typography>
                      <IconButton
                        sx={{
                          background: "#02FC99",
                          color: "#000",
                          borderRadius: 0,
                          "&:hover": {
                            background: "#02ca7a",
                          },
                          "&.Mui-disabled": {
                            background: "#35fdad",
                            pointerEvents: "auto",
                            cursor: "not-allowed",
                          },
                        }}
                        disabled={projectIndex === projects.length - 1}
                        onClick={handleNextProjectIndex}
                      >
                        <ChevronRight />
                      </IconButton>
                    </Stack>
                  </Grid>
                </Grid>
              )
            );
          })}
        </ComponentFadeIn>
      </Container>
    </section>
  );
};

export default WorkPage;
