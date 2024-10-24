import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

function FramerMotionIcon() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Bouncing Star Icon</h2>
      <motion.div
        animate={{
          y: [0, -20, 0], // Move up and down
        }}
        transition={{
          duration: 0.5, // Animation duration
          repeat: Infinity, // Infinite bounce
          repeatType: "loop", // Loop the animation
        }}
      >
        <FaStar size={50} color="gold" />
      </motion.div>
    </div>
  );
}

export default FramerMotionIcon;
