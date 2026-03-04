"use client";

import Image from "next/image";
import { EXPERIENCES } from "../data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useMemo, useCallback, useEffect } from "react";

const SKILLS: Skill[] = [
  {
    name: "Angular",
    icon: "/icon/angular.png",
    color: "#DD0031",
    category: "frontend",
    experience: 3,
    projects: 5,
  },
  {
    name: "CSS",
    icon: "/icon/css.png",
    color: "#264DE4",
    category: "frontend",
    experience: 5,
    projects: 20,
  },
  {
    name: "HTML",
    icon: "/icon/html.png",
    color: "#E34F26",
    category: "frontend",
    experience: 5,
    projects: 20,
  },
  {
    name: "JavaScript",
    icon: "/icon/javascript.png",
    color: "#F7DF1E",
    category: "frontend",
    experience: 5,
    projects: 15,
  },
  {
    name: "React",
    icon: "/icon/react.png",
    color: "#61DAFB",
    category: "frontend",
    experience: 4,
    projects: 8,
  },
  {
    name: "Tailwind",
    icon: "/icon/tailwind.png",
    color: "#38B2AC",
    category: "frontend",
    experience: 3,
    projects: 10,
  },
  {
    name: "TypeScript",
    icon: "/icon/typescript.png",
    color: "#3178C6",
    category: "frontend",
    experience: 4,
    projects: 12,
  },
  {
    name: "Vue",
    icon: "/icon/vue.png",
    color: "#4FC08D",
    category: "frontend",
    experience: 2,
    projects: 3,
  },
];

const CIRCLE_RADIUS = 220;
const SKILL_CATEGORIES = ["frontend", "backend", "tools", "database"] as const;

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const getCircularPosition = (
  index: number,
  total: number,
  radius: number = CIRCLE_RADIUS,
) => {
  const angle = (index / total) * Math.PI * 2;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
};

const GlowingBackground = () => (
  <div className="fixed inset-0 -z-10">
    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
  </div>
);

const SectionBadge = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="inline-block mb-6"
  >
    <span className="text-sm font-mono text-purple-600 bg-purple-600/10 px-4 py-2 rounded-full border border-purple-600/20">
      {children}
    </span>
  </motion.div>
);

const SkillPulseRing = ({
  color,
  isActive,
}: {
  color: string;
  isActive: boolean;
}) => (
  <>
    {isActive && (
      <>
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 rounded-full"
          style={{ boxShadow: `0 0 40px ${color}`, opacity: 0.2 }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="absolute inset-0 rounded-full"
          style={{ boxShadow: `0 0 60px ${color}`, opacity: 0.1 }}
        />
      </>
    )}
  </>
);

const DesktopSkill = ({
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
  index: number;
  total: number;
}) => {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      initial={{ x: position.x, y: position.y, opacity: 0, scale: 0 }}
      animate={{
        x: position.x,
        y: position.y,
        opacity: 1,
        scale: 1,
      }}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
      drag
      dragElastic={0.1}
      dragConstraints={{ left: -400, right: 400, top: -400, bottom: 400 }}
      onHoverStart={() => {
        onHoverStart();
      }}
      onHoverEnd={() => {
        onHoverEnd();
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 10,
      }}
    >
      <div className="relative group cursor-pointer">
        <SkillPulseRing color={skill.color} isActive={isActive} />

        <div
          className="relative w-20 h-20 rounded-2xl bg-linear-to-br from-black/80 to-black/60 backdrop-blur-xl border-2 p-5 shadow-2xl transition-all duration-300"
          style={{
            borderColor: isActive ? skill.color : "rgba(255,255,255,0.1)",
            boxShadow: isActive ? `0 0 30px ${skill.color}` : "none",
          }}
        >
          <Image
            src={skill.icon}
            alt={skill.name}
            width={48}
            height={48}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: `0 0 30px ${skill.color}` }}
        />
      </div>
    </motion.div>
  );
};

const MobileSkill = ({ skill, index }: { skill: Skill; index: number }) => (
  <motion.div
    variants={fadeInScale}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="flex flex-col items-center p-4 bg-linear-to-br from-black/40 to-black/20 backdrop-blur-sm border border-white/5 rounded-xl group cursor-pointer"
  >
    <div className="w-14 h-14 mb-3 relative">
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        style={{ backgroundColor: skill.color }}
      />
      <Image
        src={skill.icon}
        alt={skill.name}
        width={56}
        height={56}
        className="w-full h-full object-contain relative z-10"
      />
    </div>
    <span className="text-sm font-medium text-white mb-1">{skill.name}</span>
    <span className="text-xs text-gray-400">{skill.experience} yrs</span>
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
        <span>Full-Time</span>
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
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const skillPositions = useMemo(
    () => SKILLS.map((_, i) => getCircularPosition(i, SKILLS.length)),
    [],
  );

  const handleSkillHover = useCallback((name: string | null) => {
    setActiveSkill(name);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <GlowingBackground />

      <div
        ref={containerRef}
        className="min-h-screen bg-black text-white overflow-hidden"
      >
        <div className="relative z-10 container mx-auto px-6 max-w-6xl py-20">
          <motion.div style={{ opacity, scale }} className="text-center mb-32">
            <SectionBadge>ABOUT ME</SectionBadge>
          </motion.div>

          <motion.div style={{ opacity }} className="relative mb-40">
            <motion.div
              className="relative h-125 hidden lg:block"
              style={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
            >
              {SKILLS.map((skill, index) => (
                <DesktopSkill
                  key={skill.name}
                  skill={skill}
                  isActive={activeSkill === skill.name}
                  onHoverStart={() => handleSkillHover(skill.name)}
                  onHoverEnd={() => handleSkillHover(null)}
                  position={skillPositions[index]}
                  index={index}
                  total={SKILLS.length}
                />
              ))}

              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-32 h-32 rounded-full bg-linear-to-r from-purple-600 to-blue-600 blur-3xl" />
              </motion.div>
            </motion.div>

            <div className="lg:hidden">
              {SKILL_CATEGORIES.map((category) => (
                <div key={category} className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4 capitalize">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {SKILLS.filter((s) => s.category === category).map(
                      (skill, index) => (
                        <MobileSkill
                          key={skill.name}
                          skill={skill}
                          index={index}
                        />
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="mb-40">
            <div className="space-y-8">
              {EXPERIENCES.map((exp, index) => (
                <ExperienceItem key={exp.year} exp={exp} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
