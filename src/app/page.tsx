"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { FileDownloadOutlined } from "@mui/icons-material";
import { Container, Box, Typography, Stack, Button } from "@mui/material";

export default function HomePage() {
  return (
    <section>
      <Container sx={{ overflowY: "hidden" }}>
        <Stack flexDirection="column" rowGap={5}>
          <Stack
            flexDirection={{ xs: "column-reverse", md: "row" }}
            justifyContent={"space-between"}
            alignItems={"center"}
            rowGap={4}
          >
            <Box component={"div"} sx={{ flex: { xs: 0, md: 1 } }}>
              <Stack
                flexDirection={"column"}
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                <Typography sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
                  Fullstack Developer
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "3rem",
                      md: "4rem",
                    },
                    lineHeight: 1,
                    fontWeight: 600,
                  }}
                >
                  Hello I'm
                </Typography>
                <Typography
                  sx={{
                    color: "#02FC99",
                    fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                    lineHeight: 1,
                    fontWeight: 600,
                  }}
                >
                  Luu Nguyen
                </Typography>
                <Typography
                  sx={{ color: "#cccccc", fontSize: "0.9rem", my: 2 }}
                >
                  I excel at crafting elegant digital experiences and I am
                  proficent in varous programming languages and technologies.
                </Typography>
              </Stack>
              <Stack
                flexDirection={{ xs: "column", md: "row" }}
                justifyContent={{ xs: "center", md: "left" }}
                alignItems="center"
                sx={{ columnGap: 2 }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: "0.8rem",
                    color: "#02FC99",
                    borderColor: "#02FC99",
                    borderRadius: "1.5rem",
                    transition: "all 0.25s ease-in-out",
                    fontWeight: 600,
                    "&:hover": {
                      background: "#02FC99",
                      color: "#000",
                    },
                    py: 1,
                    px: 2,
                  }}
                  endIcon={<FileDownloadOutlined />}
                >
                  Download CV
                </Button>
                <Social />
              </Stack>
            </Box>
            <Box sx={{ flex: { xs: 0, md: 1 } }}>
              <Photo />
            </Box>
          </Stack>
          <Stats />
        </Stack>
      </Container>
    </section>
  );
}
