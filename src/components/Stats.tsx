import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AnimatedNumber from "@/components/NumberEffect/AnimatedNumber";

const statArr = [
  {
    name: "Years of experience",
    value: 1,
  },
  {
    name: "Projects completed",
    value: 2,
  },
  {
    name: "Technologies mastered",
    value: 10,
  },
  {
    name: "Code commits",
    value: 100,
  },
];

const Stats: React.FC = () => {
  return (
    <Box component="div">
      <Grid container>
        {statArr.map((item, index) => {
          return (
            <Grid
              key={index}
              size={{ xs: 6, md: 3 }}
              sx={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <Stack
                flexDirection="row"
                justifyContent={{ xs: "center", md: "-moz-initial" }}
                alignItems="center"
                columnGap={1}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.25rem", sm: "2.5rem", md: "3rem" },
                    fontWeight: 700,
                  }}
                >
                  <AnimatedNumber value={item.value} delay={2} duration={5} />
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    width: "120px",
                    color: "#cccccc",
                    fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
                  }}
                >
                  {item.name}
                </Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Stats;
