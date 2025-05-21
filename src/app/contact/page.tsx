"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ComponentFadeIn from "@/components/ComponentEffect/ComponentFadeIn";
import { config } from "@/config/environment/env";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: config.personalPhoneNumber,
  },
  { icon: <FaEnvelope />, title: "Email", description: config.personalEmail },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Ha Noi, Vietnam",
  },
];

const ContactPage = () => {
  return (
    <section>
      <Container>
        <ComponentFadeIn>
          <Grid
            container
            flexDirection={{ xs: "column-reverse", md: "row" }}
            spacing={3}
          >
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack
                sx={{ background: "#27272c", border: "1px solid grey", p: 3 }}
              >
                <Typography
                  sx={{ fontSize: "1.5rem", color: "#02FC99" }}
                >{`Let's work together`}</Typography>
                <Typography
                  sx={{
                    color: "#999999",
                  }}
                >
                  {` Got a project or collaboration in mind? Feel free to reach out
                  — I'll get back to you as soon as possible!`}
                </Typography>
                <Stack
                  component={"form"}
                  autoComplete="off"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  rowGap={2}
                  sx={{ mt: 2 }}
                >
                  <TextField
                    fullWidth
                    id="fullname"
                    label="Fullname"
                    variant="outlined"
                    color="success"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#1a1a1a",
                        color: "#fff",
                        "& input::placeholder": {
                          color: "#999999",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: " #999999",
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    variant="outlined"
                    color="success"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#1a1a1a",
                        color: "#fff",
                        "& input::placeholder": {
                          color: "#999999",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: " #999999",
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    id="message"
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    color="success"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#1a1a1a",
                        color: "#fff",
                        "& input::placeholder": {
                          color: "#999999",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: " #999999",
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      fontSize: "0.8rem",
                      background: "#02FC99",
                      color: "#000",
                      borderColor: "#02FC99",
                      borderRadius: "1.5rem",
                      transition: "all 0.25s ease-in-out",
                      fontWeight: 600,
                      textTransform: "capitalize",
                      "&:hover": {
                        background: "#02ca7a",
                      },
                      py: 1,
                      px: 2,
                    }}
                  >
                    Send message
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }} sx={{ my: "auto" }}>
              {info.map((item, index) => {
                return (
                  <Stack
                    key={index}
                    flexDirection="row"
                    justifyContent="left"
                    alignItems="center"
                    columnGap={3}
                    sx={{ py: 3 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        fontSize: "24px",
                        color: "#02FC99",
                        background: "#27272c",
                        p: 1.5,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Stack
                      flexDirection="column"
                      justifyContent="left"
                      alignItems="start"
                    >
                      <Typography fontSize={{ xs: "0.8rem", md: "0.9rem" }}>
                        {item.title}
                      </Typography>
                      <Typography fontSize={{ xs: "0.8rem", md: "0.9rem" }}>
                        {item.description}
                      </Typography>
                    </Stack>
                  </Stack>
                );
              })}
            </Grid>
          </Grid>
        </ComponentFadeIn>
      </Container>
    </section>
  );
};

export default ContactPage;
