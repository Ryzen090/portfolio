"use client";

import {
  TABS,
  TOOLS,
  SKILLS,
  EXPERIENCES,
  TESTIMONIALS,
  CERTIFICATIONS,
} from "../data";
import {
  motion,
  useSpring,
  LayoutGroup,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import {
  Tools,
  Skills,
  Experiences,
  Testimonials,
  Certifications,
} from "../utils/components/about";
import { Skill, TabId } from "../type";
import { useEffect, useState, useRef } from "react";

const PixelGrid = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none">
    <div
      className="absolute inset-0 opacity-[0.1]"
      style={{
        backgroundImage: `linear-gradient(#0A1A2F 1px, transparent 1px),
                          linear-gradient(90deg, #0A1A2F 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    />
  </div>
);

export default function About() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>("skills");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [selectedTimeline, setSelectedTimeline] = useState<number | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredSkills: Skill[] = SKILLS;

  return (
    <main
      ref={containerRef}
      className="bg-[#FDF5E6] border-y-12 border-[#0A1A2F] text-[#0A1A2F] min-h-screen relative font-sans selection:bg-[#E03A3C] selection:text-[#F7D44A]"
    >
      <PixelGrid />

      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed w-8 h-8 border-4 border-[#E03A3C] bg-[#2E8B57] pointer-events-none z-50 hidden md:block"
      />

      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <header className="mb-24 flex items-start justify-between">
          <div className="relative group">
            <h2 className="text-9xl font-black uppercase tracking-tighter leading-[0.75]">
              SYSTEM
              <br />
              <span className="text-[#E23636] italic">CAPABILITIES</span>
            </h2>
          </div>

          <div className="hidden lg:block border-4 border-[#0B1C2F] p-4 bg-[#FFD966] shadow-[4px_4px_0px_0px_#2E8B57] rotate-3 hover:rotate-0 transition-transform cursor-help">
            <p className="font-mono text-[10px] font-black uppercase max-w-37.5">
              Profile Analysis: Experienced across multiple modern frontend
              frameworks and technologies.
            </p>
          </div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 border-4 border-[#0A1A2F] font-black uppercase transition-all shadow-[4px_4px_0px_0px_#0A1A2F] active:shadow-none active:translate-x-1 active:translate-y-1 ${
                activeTab === tab.id
                  ? "bg-[#E03A3C] text-white"
                  : "bg-white hover:bg-[#F7D44A]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "skills" && (
            <LayoutGroup>
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {filteredSkills.map((skill) => (
                  <Skills
                    key={skill.name}
                    skill={skill}
                    isSelected={selectedSkill === skill.name}
                    onSelect={() =>
                      setSelectedSkill(
                        selectedSkill === skill.name ? null : skill.name,
                      )
                    }
                    viewMode="grid"
                  />
                ))}
              </motion.div>
            </LayoutGroup>
          )}

          {activeTab === "Experiences" && (
            <Experiences
              items={EXPERIENCES}
              selectedItem={selectedTimeline}
              onSelect={setSelectedTimeline}
            />
          )}

          {activeTab === "certifications" && (
            <Certifications items={CERTIFICATIONS} />
          )}

          {activeTab === "tools" && <Tools items={TOOLS} />}

          {activeTab === "testimonials" && (
            <Testimonials
              items={TESTIMONIALS}
              currentIndex={currentTestimonial}
              onNavigate={setCurrentTestimonial}
            />
          )}
        </AnimatePresence>

        <div className="mt-24 border-8 border-[#0B1C2F] p-10 bg-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-[12px_12px_0px_0px_#E23636]">
          <div className="text-5xl font-black uppercase italic leading-none max-w-xl">
            Precision
            <span className="text-[#E23636] underline decoration-[#0B1C2F]">
              Built
            </span>
            <br />
            Frontend Architecture.
          </div>
          <div className="flex flex-col items-end gap-2 text-right font-mono text-[10px] font-black uppercase">
            <span>Build: Portfolio_V1.0</span>
            <span>Env: Frontend_Engineering</span>
            <div className="w-20 h-4 bg-[#0B1C2F] flex items-center px-1 gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-[#FFD966]" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
