"use client";

import { Avatar } from "./view";
import Image from "./utils/Image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col items-center">
      <section className="z-10 flex flex-col items-center text-center pt-30 px-4">
        <h1 className="text-4xl md:text-6xl font-Fugaz font-bold text-white">
          Hi, I'm Chhayly
        </h1>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl capitalize">
          Passionate about creating beautiful and functional web experiences
        </p>

        <p className="text-gray-500 mt-2 text-base md:text-lg max-w-xl">
          React • Next.js • Angular • Frontend Excellence
        </p>
      </section>

      <section className="z-10 mt-20 w-full max-w-5xl px-8">
        <div className="flex justify-center md:justify-between items-center gap-12">
          <Image
            src="/icon/angular.png"
            alt="React"
            className="w-24 h-24 md:w-32 md:h-32 transition duration-300 hover:scale-110 hover:-translate-y-2"
          />
          <Image
            src="/icon/react.png"
            alt="Angular"
            className="w-24 h-24 md:w-32 md:h-32 transition duration-300 hover:scale-110 hover:-translate-y-2"
          />
        </div>
      </section>

      <h1 className="absolute bottom-10 z-20 text-4xl md:text-6xl font-Fugaz font-bold text-zinc-400 uppercase">
        Frontend Developer
      </h1>

      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <Avatar />
      </div>
    </main>
  );
}
