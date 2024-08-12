import { useState } from "react";
import { motion, PanInfo } from "framer-motion";
import styles from "./style.module.css";
import sampleImage from "../../assets/sample.png";
import pet from "../../assets/pet.jpeg";
import cat from "../../assets/cat.png";

const items = [sampleImage, pet, cat];

const Swiper = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50 && selectedIndex < items.length - 1) {
      setSelectedIndex((prev) => prev + 1);
    } else if (info.offset.x > 50 && selectedIndex > 0) {
      setSelectedIndex((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index}>
          <motion.img
            src={item}
            layout
            initial={false}
            key={index}
            dragElastic={0}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            style={{
              width: selectedIndex === index ? 200 : 100,
              height: selectedIndex === index ? 200 : 100,
            }}
            className={styles.circle}
          />
        </div>
      ))}
    </div>
  );
};

export default Swiper;
