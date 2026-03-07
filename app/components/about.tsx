"use client";

import {
  TABS,
  TOOLS,
  TECHNOLOGY,
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
  Experiences,
  Testimonials,
  Certifications,
  Technologies,
} from "../utils/components/about";
import { TabId, Technology } from "../type";
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
  const [activeTab, setActiveTab] = useState<TabId>("experiences");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  const technology: Technology[] = TECHNOLOGY;

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
        <header className="mb-16 md:mb-24 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          <div className="relative group w-full lg:w-auto">
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.75]">
              SYSTEM
              <br />
              <span className="text-[#E03A3C] italic">CAPABILITIES</span>
            </h2>
          </div>

          <div className="hidden lg:block w-full lg:w-auto max-w-md">
            <div className="border-4 border-[#0A1A2F] p-4 bg-[#F7D44A] shadow-[4px_4px_0px_0px_#E03A3C] rotate-3 hover:rotate-0 transition-transform cursor-help">
              <p className="font-mono text-[10px] font-black uppercase">
                Profile Analysis: Experienced across multiple modern frontend
                frameworks and technologies.
              </p>
            </div>
          </div>

          <div className="lg:hidden w-full">
            <div className="border-4 border-[#0A1A2F] p-4 bg-[#F7D44A] shadow-[4px_4px_0px_0px_#E03A3C] hover:rotate-0 transition-transform cursor-help">
              <p className="font-mono text-[10px] font-black uppercase text-center">
                Experienced across multiple modern frontend frameworks and
                technologies.
              </p>
            </div>
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
          {activeTab === "technologies" && (
            <LayoutGroup>
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {technology.map((tech) => (
                  <Technologies key={tech.name} tech={tech} />
                ))}
              </motion.div>
            </LayoutGroup>
          )}

          {activeTab === "experiences" && (
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
