"use client";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
}

export default function AnimatedText({ text }: AnimatedTextProps) {
  return (
    <h1 className="flex flex-wrap justify-center text-4xl font-bold font-serif">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          style={{ color: `hsl(${index * 10}, 30%, 80%)` }}
          initial={{ y: 50, rotate: 90, opacity: 1 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h1>
    
  );
}

<motion.div
    className="absolute top-1/2 left-0 h-1 bg-black w-0 z-0"
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
  />
