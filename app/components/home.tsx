/* eslint-disable @next/next/no-img-element */
"use client";

import { Avatar } from "./page";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col items-center">
      <section className="z-10 flex flex-col items-center text-center pt-32 px-4">
        <h1 className="text-4xl md:text-6xl font-Fugaz font-bold text-white">
          Specializing
        </h1>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl">
          Passionate about creating beautiful and functional web experiences
        </p>

        <p className="text-gray-500 mt-2 text-base max-w-xl">
          Specializing in React, Next.js, and modern web technologies
        </p>
      </section>

      <section className="z-10 mt-20 w-full max-w-5xl px-8">
        <div className="flex justify-center md:justify-between items-center gap-12">
          <img
            src="/icon/framer.png"
            alt="React"
            className="w-24 h-24 md:w-32 md:h-32 transition duration-300 hover:scale-110 hover:-translate-y-2"
          />
          <img
            src="/icon/framer.png"
            alt="Angular"
            className="w-24 h-24 md:w-32 md:h-32 transition duration-300 hover:scale-110 hover:-translate-y-2"
          />
        </div>
      </section>

      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <Avatar />
      </div>
    </main>
  );
}
