import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.css";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <button onClick={toggleAccordion}>{isOpen ? "Close" : "Open"}</button>
      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {Array.from({ length: 10 }, (_, index) => index + 1).map((_, idx) => (
          <li key={idx}>{idx}</li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Accordion;
