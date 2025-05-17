import React from "react";
import { Stack } from "@mui/material";
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";
import MuiLink from "./MuiLink";

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
