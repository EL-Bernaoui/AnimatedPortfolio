import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Home", "Services", "Portfolio", "Contact", "More"];

  return (
    <motion.ul
      className="links h-100 d-flex flex-column align-items-center justify-content-center gap-3"
      variants={variants}
    >
      {items.map((item) => (
        <motion.li
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href={`#${item}`}>{item}</a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Links;
