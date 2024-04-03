import { motion } from "framer-motion";

import "./hero.scss";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const backgroundText = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 100,
    },
  },
};

function Hero() {
  return (
    <div className="hero postition-relative">
      <div className="container">
        <motion.div
          className="background_text"
          variants={backgroundText}
          initial="initial"
          animate="animate"
        >
          Leve Palestina och krossa sionismen
        </motion.div>
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <motion.div
              className="box position-relative z-3"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              <motion.h3 variants={textVariants}>HARVEY TYLER</motion.h3>
              <motion.h1 variants={textVariants}>
                Web developer and UI designer
              </motion.h1>
              <div className="actions d-flex align-items-center">
                <motion.a
                  href="#portfolio"
                  variants={textVariants}
                  initial={{
                    backgroundColor: "transparent",
                    borderColor: "#fff",
                  }}
                  whileHover={{
                    backgroundColor: "rebeccapurple",
                    borderColor: "rebeccapurple",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  See The Latest Works
                </motion.a>
                <motion.a
                  href="#contact"
                  variants={textVariants}
                  initial={{
                    backgroundColor: "transparent",
                    borderColor: "#fff",
                  }}
                  whileHover={{
                    backgroundColor: "rebeccapurple",
                    borderColor: "rebeccapurple",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  Contact Me
                </motion.a>
              </div>
              <motion.img
                src="/scroll.png"
                alt="scroll"
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: 20, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
          <div className="col">
            <div className="hero_img">
              <motion.img src="/hero.png" alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
