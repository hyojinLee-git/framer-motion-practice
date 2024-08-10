import { useMotionValue, useTransform, motion } from "framer-motion";
import { useState } from "react";

export default function Transition() {
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const size = useTransform(x, [0, 300], [200, 50]);

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          backgroundColor: "blue",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 300 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onDrag={(_, info) => x.set(info.point.x)}
      />
    </div>
  );
}
