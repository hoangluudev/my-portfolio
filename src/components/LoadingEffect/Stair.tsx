"use client";
import { motion } from "framer-motion";

const stairAnimation = {
  initial: { y: 0 },
  animate: { y: "100%" },
  exit: { y: 0 },
};

const reverseIndex = (index: number): number => 5 - index;

const Stair = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
            delay: reverseIndex(index) * 0.1,
          }}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#02ca7a",
            pointerEvents: "none",
            overflow: "hidden",
          }}
        />
      ))}
    </>
  );
};

export default Stair;
