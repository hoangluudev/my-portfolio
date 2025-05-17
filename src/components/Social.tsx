import { Box, Link as MuiLink, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";

const socialIcons = [
  {
    icon: <FaGithub />,
    name: "Github",
    path: "#",
  },
  {
    icon: <FaTelegram />,
    name: "Telegram",
    path: "#",
  },
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    path: "#",
  },
];
const Social: React.FC = () => {
  return (
    <Stack
      component={"div"}
      flexDirection={"row"}
      justifyContent="center"
      alignItems="center"
      sx={{ my: 2, columnGap: 2 }}
    >
      {socialIcons.map((item, index) => {
        return (
          <MuiLink
            component={Link}
            key={index}
            href={item.path}
            sx={{
              fontSize: "20px",
              color: "#02FC99",
              border: "1px solid #02FC99",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 1,
              transition: "all 0.4s ease-in-out",
              "&:hover": {
                background: "#02FC99",
                color: "#000",
              },
            }}
          >
            {item.icon}
          </MuiLink>
        );
      })}
    </Stack>
  );
};

export default Social;
