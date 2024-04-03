import { motion } from "framer-motion";
import "./header.scss";
// import facebookImg

function Header() {
  return (
    <header className="d-flex">
      <div className="container d-flex justify-content-between align-items-center">
        <motion.div
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a className="fw-bold fs-4" href="#home">
            GB_05
          </a>
        </motion.div>
        <div className="social_media d-flex justify-content-center align-items-center gap-3">
          <a href="https://facebook.com" target="blank">
            <img src="../../assets/facebook.png" alt="facebook" />
          </a>
          <a href="https://instagram.com" target="blank">
            <img src="/instagram.png" alt="instagram" />
          </a>
          <a href="https://youtube.com" target="blank">
            <img src="/youtube.png" alt="youtube" />
          </a>
          <a href="https://dribbble.com/" target="blank">
            <img src="/dribble.png" alt="dribble" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
