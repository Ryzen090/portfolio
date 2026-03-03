"use client";

import Image from "next/image";
import { experiences } from "../data";
import { useRef, useState, useMemo, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
}

const SKILLS: Skill[] = [
  { name: "Angular", icon: "/icon/angular.png", color: "#DD0031" },
  { name: "CSS", icon: "/icon/css.png", color: "#264DE4" },
  { name: "HTML", icon: "/icon/html.png", color: "#E34F26" },
  { name: "JavaScript", icon: "/icon/javascript.png", color: "#F7DF1E" },
  { name: "React", icon: "/icon/react.png", color: "#61DAFB" },
  { name: "Tailwind", icon: "/icon/tailwind.png", color: "#38B2AC" },
  { name: "TypeScript", icon: "/icon/typescript.png", color: "#3178C6" },
  { name: "Vue", icon: "/icon/vue.png", color: "#4FC08D" },
];

const CIRCLE_RADIUS = 200;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const calculateCircularPosition = (index: number, total: number) => {
  const angle = (index / total) * Math.PI * 2;
  return {
    x: Math.cos(angle) * CIRCLE_RADIUS,
    y: Math.sin(angle) * CIRCLE_RADIUS,
  };
};

const SectionTitle = () => (
  <motion.div {...fadeInUp} className="text-center mb-16">
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-sm font-mono text-purple-600 block mb-4"
    >
      — ABOUT ME —
    </motion.span>
  </motion.div>
);

const SkillCard = ({
  skill,
  isActive,
  onHoverStart,
  onHoverEnd,
  position,
}: {
  skill: Skill;
  isActive: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  position: { x: number; y: number };
}) => (
  <motion.div
    className="absolute left-1/2 top-1/2"
    initial={{ x: position.x, y: position.y, opacity: 0, scale: 0 }}
    animate={{ x: position.x, y: position.y, opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    drag
    dragElastic={0.1}
    dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
    onHoverStart={onHoverStart}
    onHoverEnd={onHoverEnd}
    transition={{
      type: "spring",
      stiffness: 50,
      damping: 10,
    }}
  >
    <div className="relative group cursor-pointer">
      {isActive && (
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: `0 0 30px ${skill.color}`,
            opacity: 0.3,
          }}
        />
      )}

      <div
        className="relative w-16 h-16 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 p-4 shadow-2xl transition-all duration-300 group-hover:border-purple-500/50"
        style={{ boxShadow: isActive ? `0 0 20px ${skill.color}` : "none" }}
      >
        <Image
          src={skill.icon}
          alt={skill.name}
          width={40}
          height={40}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  </motion.div>
);

const ExperienceItem = ({ exp, index }: { exp: Experience; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.2 }}
    viewport={{ once: true, margin: "-50px" }}
    className="group relative pl-12"
  >
    <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-purple-600 via-blue-600 to-transparent" />

    <div className="absolute -left-1 w-2 h-2 rounded-full bg-purple-600 group-hover:scale-150 transition-all duration-300" />

    <div className="relative bg-black/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/5">
      <div className="text-sm text-purple-400 mb-2 font-mono">{exp.year}</div>

      <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-purple-400 transition-colors">
        {exp.title}
      </h3>

      <div className="text-gray-400 mb-4 flex items-center gap-2">
        <span>{exp.company}</span>
        <span className="w-1 h-1 rounded-full bg-gray-600" />
        <span>Full-time</span>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

      <div className="space-y-2">
        {exp.achievements.map((achievement, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + i * 0.05 }}
            viewport={{ once: true }}
            className="flex items-start gap-2 text-sm text-gray-400"
          >
            <span className="text-purple-400 mt-1">→</span>
            <span>{achievement}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  const skillPositions = useMemo(
    () =>
      SKILLS.map((_, index) => calculateCircularPosition(index, SKILLS.length)),
    [],
  );

  const handleSkillHover = useCallback((skillName: string | null) => {
    setActiveSkill(skillName);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white overflow-hidden"
    >
      <div className="relative z-10">
        <div className="container mx-auto px-6 max-w-6xl py-20">
          <SectionTitle />

          <motion.div style={{ opacity }} className="relative mb-40">
            <motion.div
              ref={skillsRef}
              className="relative h-125 hidden lg:block"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              {SKILLS.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  isActive={activeSkill === skill.name}
                  onHoverStart={() => handleSkillHover(skill.name)}
                  onHoverEnd={() => handleSkillHover(null)}
                  position={skillPositions[index]}
                />
              ))}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 rounded-full bg-purple-600/20 blur-2xl" />
              </div>
            </motion.div>

            <div className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-4">
              {SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-4 bg-black/30 backdrop-blur-sm border border-white/5 rounded-xl"
                >
                  <div className="w-12 h-12 mb-2">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-gray-400">{skill.name}</span>
                </div>
              ))}
            </div>
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
                <ExperienceItem key={exp.year} exp={exp} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
