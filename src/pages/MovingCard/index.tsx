import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  PanInfo,
} from "framer-motion";
import styles from "./style.module.css";
import sampleImage from "../../assets/pet.jpeg";

export default function MovingCard() {
  const x = useMotionValue(0);
  const buttonWidth = useTransform(x, [-200, 0], [100, 0]);
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x > 0) {
      animate(x, 0);
    } else {
      animate(x, -200);
    }
  };

  return (
    <div className={styles.container}>
      <motion.div
        layout
        dragConstraints={{ left: -200, right: 0 }}
        dragElastic={0}
        drag="x"
        style={{ x }}
        whileDrag={{ cursor: "grabbing" }}
        onDragEnd={handleDragEnd}
        className={styles.contents}
      >
        <img src={sampleImage} />
      </motion.div>
      <div className={styles.container__button}>
        <motion.button
          layout
          initial={{ width: 0 }}
          style={{ x, width: buttonWidth }}
        >
          삭제
        </motion.button>
        <motion.button
          layout
          initial={{ width: 0 }}
          style={{ x, width: buttonWidth }}
        >
          차단
        </motion.button>
      </div>
    </div>
  );
}
