"use client";

import Image from "next/image";
import { experiences } from "../data";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const constraintsRef = useRef(null);
  const [activeSkill, setActiveSkill] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  const skills = [
    {
      name: "Angular",
      icon: "/icon/angular.png",
      color: "#DD0031",
      level: 85,
      experience: "5 years",
    },
    {
      name: "CSS",
      icon: "/icon/css.png",
      color: "#264DE4",
      level: 92,
      experience: "6 years",
    },
    {
      name: "HTML",
      icon: "/icon/html.png",
      color: "#E34F26",
      level: 98,
      experience: "6 years",
    },
    {
      name: "JavaScript",
      icon: "/icon/javascript.png",
      color: "#F7DF1E",
      level: 95,
      experience: "5 years",
    },
    {
      name: "React",
      icon: "/icon/react.png",
      color: "#61DAFB",
      level: 90,
      experience: "4 years",
    },
    {
      name: "Tailwind",
      icon: "/icon/tailwind.png",
      color: "#38B2AC",
      level: 88,
      experience: "3 years",
    },
    {
      name: "TypeScript",
      icon: "/icon/typescript.png",
      color: "#3178C6",
      level: 82,
      experience: "3 years",
    },
    {
      name: "Vue",
      icon: "/icon/vue.png",
      color: "#4FC08D",
      level: 75,
      experience: "2 years",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="relative z-10">
        <div className="container mx-auto px-6 max-w-6xl py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm font-mono text-purple-600 block mb-4"
            >
              — GET TO KNOW ME —
            </motion.span>
          </motion.div>

          <motion.div style={{ opacity }} className="relative mb-40">
            <motion.div
              ref={constraintsRef}
              className="relative h-125 hidden lg:block"
            >
              {skills.map((skill, index) => {
                const angle = (index / skills.length) * Math.PI * 2;
                const radius = 200;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={skill.name}
                    className="absolute left-1/2 top-1/2"
                    initial={{ x, y, opacity: 0 }}
                    animate={{ x, y, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                      damping: 10,
                      delay: index * 0.1,
                    }}
                    drag
                    dragElastic={0.1}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.2 }}
                    dragConstraints={constraintsRef}
                    onHoverEnd={() => setActiveSkill(null)}
                    onHoverStart={() => setActiveSkill(skill.name)}
                  >
                    <div className="relative group cursor-pointer">
                      <motion.div
                        animate={
                          activeSkill === skill.name
                            ? {
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 0.8, 0.5],
                              }
                            : {}
                        }
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full"
                        style={{
                          boxShadow: `0 0 30px ${skill.color}`,
                          opacity: 0.3,
                        }}
                      />

                      <div className="relative w-16 h-16 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-40"
          >
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative pl-12"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-purple-600 via-blue-600 to-transparent" />

                  <div className="absolute -left-1 w-2 h-2 rounded-full bg-purple-600 group-hover:scale-150 transition-all" />

                  <div className="relative bg-black/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 group-hover:border-purple-500/30 transition-all">
                    <div className="text-sm text-purple-400 mb-2 font-mono">
                      {exp.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-1 text-white">
                      {exp.title}
                    </h3>
                    <div className="text-gray-400 mb-4">
                      {exp.company} · Full-time
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-400"
                        >
                          <span className="text-purple-400">→</span>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
