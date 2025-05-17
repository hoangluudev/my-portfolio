"use client";
import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";

interface PageTransitionProps {
  children: ReactNode;
}
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      <Box component={"div"} key={pathName}>
        <motion.div
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            backgroundColor: "#1c1b22",
            pointerEvents: "none",
            overflow: "hidden",
          }}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.1, ease: "easeInOut" },
          }}
        />
        {children}
      </Box>
    </AnimatePresence>
  );
};

export default PageTransition;
