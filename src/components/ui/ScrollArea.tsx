import React from "react";
import { Box } from "@mui/material";

interface ScrollAreaProps {
  children: React.ReactNode;
  height?: string | number;
  width?: string | number;
  scrollbarColor?: string;
  thumbColor?: string;
}

const ScrollArea: React.FC<ScrollAreaProps> = ({
  children,
  height = "100%",
  width = "100%",
  scrollbarColor = "transparent",
  thumbColor = "#888",
}) => {
  return (
    <Box
      sx={{
        height,
        width,
        overflow: "hidden",
        overflowY: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: `${thumbColor} ${scrollbarColor}`,
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: scrollbarColor,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: thumbColor,
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#555",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ScrollArea;
