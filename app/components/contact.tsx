"use client";

import { Scene } from "./view";
import { socialLinks } from "../data";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full h-screen bg-orange-50">
      <div className="absolute top-20 left-2/9 transform -translate-x-1/2 z-50">
        <h1 className="text-7xl font-Fugaz text-gray-900">
          Let&apos;s work <br /> together!
        </h1>
        <div className="flex justify-center gap-6 mt-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={
                  social.href.startsWith("mailto:") ? undefined : "_blank"
                }
                rel="noopener noreferrer"
                aria-label={social.label}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                group w-10 h-10 rounded-2xl
                flex items-center justify-center
                bg-white shadow-md
                transition-all duration-300
                ${social.hover}
              `}
              >
                <Icon className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
              </motion.a>
            );
          })}
        </div>
      </div>

      <Canvas shadows camera={{ position: [5, 3.5, 8], fov: 45 }}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[5, 5, 5]} intensity={1.3} castShadow />
        <directionalLight position={[-4, 2, 3]} intensity={0.4} />
        <directionalLight position={[-6, 6, -4]} intensity={0.9} />

        <Environment preset="city" />

        <Scene
          scale={0.5}
          position={[2, -1.3, 1]}
          rotation={[0, Math.PI - 0.2, 0]}
        />
      </Canvas>
    </section>
  );
}
