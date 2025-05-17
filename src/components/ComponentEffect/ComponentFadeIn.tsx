import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

interface ComponentFadeInProps {
  children: ReactNode;
}

const MotionBox = motion.create(Box);

const ComponentFadeIn: React.FC<ComponentFadeInProps> = ({ children }) => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      {children}
    </MotionBox>
  );
};

export default ComponentFadeIn;
