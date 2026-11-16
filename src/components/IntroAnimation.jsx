
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function IntroAnimation({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#10271f]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Background */}
      <motion.img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=90"
        alt="Luxury ESTORA home"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
      />

      <div className="absolute inset-0 bg-[#071b13]/65" />

      {/* Animated light */}
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-[#c3d6bd]/20 blur-[100px]"
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Border */}
      <div className="absolute inset-5 border border-white/30 sm:inset-10" />

      {/* Logo and title */}
      <div className="relative z-10 flex flex-col items-center px-5 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 flex h-20 w-20 items-center justify-center border border-[#c3d6bd] bg-[#183d32]/80"
        >
          <svg
            viewBox="0 0 60 60"
            className="h-12 w-12"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
          >
            <path d="M8 27 30 9l22 18" />
            <path d="M14 25v27h32V25" />
            <path d="M24 52V35h12v17" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-display text-5xl font-bold text-white sm:text-7xl"
        >
          ESTORA
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 110 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-6 h-px bg-[#c3d6bd]"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-6 text-xs font-semibold tracking-[0.35em] text-[#dce9d7] sm:text-sm"
        >
          FIND YOUR PERFECT SPACE
        </motion.p>

        {/* Loading bar */}
        <div className="mt-14 h-[2px] w-56 overflow-hidden bg-white/30">
          <motion.div
            className="h-full bg-[#c3d6bd]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4.5, ease: "linear" }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-4 text-[9px] tracking-[0.3em] text-white/70"
        >
          PREPARING YOUR EXPERIENCE
        </motion.p>
      </div>

      <p className="absolute bottom-10 text-[9px] tracking-[0.35em] text-white/60">
        LUXURY · COMFORT · LIFESTYLE
      </p>
    </motion.div>
  );
}
