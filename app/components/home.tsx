"use client";

import { Avatar } from "./page";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-32">
        <h1 className="text-4xl font-Fugaz md:text-6xl font-bold text-white text-center px-4">
          Hi, I'm San Chhayly
        </h1>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl text-center px-4">
          Passionate about creating beautiful and functional web experiences
        </p>
        <p className="text-gray-400 mt-2 text-base max-w-xl text-center px-4">
          Specializing in React, Next.js, and modern web technologies
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-0">
        <Avatar />
      </div>

      <div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)",
        }}
      ></div>
    </div>
  );
}
