import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import "./services.scss";
import { services } from "../../myJson.js";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

function Services() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px", once: true });

  return (
    <motion.div
      className="services h-100"
      id="services"
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <div className="container">
        <div className="services_head">
          <motion.div
            className="first position-relative d-flex justify-content-end text-end"
            variants={variants}
          >
            I focus on helping your brand grow
            <br />
            and move forward
          </motion.div>
          <motion.div
            className="second d-flex align-items-center flex-column mb-4"
            variants={variants}
          >
            <div className="mainBox d-flex justify-content-center align-items-center flex-wrap">
              <img src="people.webp" alt="meeting" />
              <p>
                <motion.b
                  initial={{ color: "#d3d3d3" }}
                  whileHover={{ color: "#ffa500" }}
                >
                  Unique
                </motion.b>{" "}
                Ideas
              </p>
            </div>
            <div className="mainBox d-flex justify-content-center align-items-center flex-wrap">
              <p>
                <motion.b
                  initial={{ color: "#d3d3d3" }}
                  whileHover={{ color: "#ffa500" }}
                >
                  For Your
                </motion.b>{" "}
                Business
              </p>
              <a href="#">what we do?</a>
            </div>
          </motion.div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div
              className="col-12 col-md-6 col-lg-3 p-sm-0"
              key={service.title}
            >
              <motion.div
                className="box"
                variants={variants}
                initial={{ backgroundColor: "#0f0f28", color: "#fff" }}
                whileHover={{ backgroundColor: "#fff", color: "#000" }}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="btn">{service.btn}</button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Services;
