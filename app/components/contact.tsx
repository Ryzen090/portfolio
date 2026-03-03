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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h1 className="text-5xl md:text-7xl font-Fugaz text-gray-900 leading-tight">
                Let&apos;s work <br /> together!
              </h1>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 md:gap-6 mt-8"
        >
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400 },
                }}
                className={`
                  group w-12 h-12 md:w-14 md:h-14 rounded-2xl
                  flex items-center justify-center
                  bg-white shadow-md
                  transition-all duration-300
                  ${social.hover}
                `}
              >
                <Icon className="w-6 h-6 md:w-7 md:h-7 group-hover:text-white transition-colors duration-300" />
              </motion.a>
            );
          })}
        </motion.div>
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
