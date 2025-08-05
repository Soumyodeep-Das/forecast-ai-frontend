import { motion, AnimatePresence } from "framer-motion";

export default function ThemeTransition({
  isActive,
  color,
}: {
  isActive: boolean;
  color: "black" | "white";
}) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ scale: 0, opacity: 1, x: "-50%", y: "50%" }}
          animate={{
            scale: 50,
            opacity: 1,
            x: "-50%",
            y: "-50%",
            transition: { duration: 1.5, ease: "easeInOut" },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 1.0, ease: "easeInOut" },
          }}
          className={`fixed bottom-0 left-0 w-[200px] h-[200px] rounded-full z-[9999] pointer-events-none origin-bottom-left ${
            color === "black" ? "bg-black" : "bg-white"
          }`}
        />
      )}
    </AnimatePresence>
  );
}
