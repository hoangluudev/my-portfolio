"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stair from "./Stair";

const StairTransition: React.FC = () => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 50,
          display: "flex",
          overflow: "hidden",
        }}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.7,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <Stair />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;
