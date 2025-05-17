"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import Image from "next/image";
import profilePhoto from "@/public/images/photo.png";

const MotionBox = motion.create(Box);

const Photo = () => {
  return (
    <Box
      sx={{
        width: { xs: "250px", sm: "350px", lg: "450px" },
        height: { xs: "250px", sm: "350px", lg: "450px" },
        position: "relative",
        mx: "auto",
      }}
    >
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
        {/* Image */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          sx={{
            width: "100%",
            height: "100%",
            mixBlendMode: "lighten",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Image
            src={profilePhoto}
            alt="Profile Image"
            draggable="false"
            priority
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              userSelect: "none",
            }}
          />
        </MotionBox>

        {/* Circle */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <motion.svg
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#00ff99"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </Box>
      </MotionBox>
    </Box>
  );
};

export default Photo;
