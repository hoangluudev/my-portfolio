import React from "react";
import { Link, Stack } from "@mui/material";
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";
import { config } from "@/config/environment/env";

const socialIcons = [
  {
    icon: <FaGithub />,
    name: "Github",
    path: config.personalGithubUrl,
  },
  {
    icon: <FaTelegram />,
    name: "Telegram",
    path: config.personalTelegramUrl,
  },
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    path: config.personalLinkedinUrl,
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
          <Link
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
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </Stack>
  );
};

export default Social;
