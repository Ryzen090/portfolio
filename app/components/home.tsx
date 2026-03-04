"use client";

import { Avatar } from "../constants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black rounded-b-[4rem] overflow-hidden flex flex-col items-center">
      <section className="z-10 flex flex-col items-center text-center pt-30 px-4">
        <h1 className="text-4xl md:text-6xl font-Fugaz font-bold text-white">
          Hi, I&apos;m Chhayly
        </h1>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl capitalize">
          Passionate about creating beautiful and functional web experiences
        </p>

        <p className="text-gray-500 mt-2 text-base md:text-lg max-w-xl">
          React • Next.js • Angular • Frontend Excellence
        </p>
      </section>
      <h1 className="absolute bottom-10 z-20 text-4xl md:text-6xl font-Fugaz font-bold text-zinc-400 uppercase">
        Frontend Developer
      </h1>
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <Avatar />
      </div>

      <div
        className="block absolute w-full h-60 bottom-0 left-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15, 33, 69, 0) 0%, black 100%)",
          pointerEvents: "none",
        }}
      ></div>

      <div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)",
        }}
      ></div>

      <motion.div
        className="absolute bottom-26 left-1/2 -translate-x-1/2 z-20 hidden lg:block"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          y: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/40 rounded-full mt-2" />
        </div>
      </motion.div>
    </main>
  );
}
