import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./parallax.scss";

function Parallax({ type }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax position-relative d-flex align-items-center justify-content-center overflow-hidden w-100 h-100"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h2 style={{ y: yText }}>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h2>
      <motion.div className="mountains w-100 h-100 position-absolute z-3"></motion.div>
      <motion.div
        className="planets w-100 h-100 position-absolute z-2"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "planets.png" : "sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div
        style={{ x: yBg }}
        className="stars w-100 h-100 position-absolute z-1"
      ></motion.div>
    </div>
  );
}

export default Parallax;
