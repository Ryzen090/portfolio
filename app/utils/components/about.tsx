import {
  Tool,
  Experience,
  Testimonial,
  Certification,
  Technology,
} from "@/app/type";
import Image from "../Image";
import { motion, AnimatePresence } from "framer-motion";

export const Technologies = ({ tech }: { tech: Technology }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotate: -1.5 }}
      whileTap={{ scale: 0.97 }}
      className="relative w-full group"
    >
      <div className="absolute inset-0 bg-[#0A1A2F] translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform rounded-xl" />

      <div className="relative bg-[#FDF5E6] border-4 border-[#0A1A2F] rounded-xl p-6 flex flex-col items-center justify-center transition-all group-hover:-translate-x-1 group-hover:-translate-y-1">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#F7D44A] rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 blur-xl opacity-50" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-dashed border-[#E03A3C] rounded-full opacity-40"
          />

          <div className="relative w-24 h-24 flex items-center justify-center">
            {tech.image ? (
              <Image
                src={tech.image}
                alt={tech.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:rotate-12"
              />
            ) : (
              <div className="w-full h-full bg-[#0A1A2F] rounded-full flex items-center justify-center">
                <span className="text-white font-black text-2xl">
                  {tech.name[0]}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="w-full text-center space-y-2">
          <h3 className="text-2xl font-black uppercase tracking-tight text-[#0A1A2F]">
            {tech.name}
          </h3>

          <div className="inline-block px-3 py-1 bg-[#E03A3C] border-2 border-[#0A1A2F] shadow-[2px_2px_0px_0px_rgba(10,26,47,1)]">
            <span className="text-[10px] font-black text-white uppercase italic">
              Standard
            </span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t-2 border-[#0A1A2F]/10 w-full flex justify-between items-center px-2">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-[#F7D44A] border border-[#0A1A2F]"
              />
            ))}
          </div>
          <span className="text-[10px] font-mono font-black text-[#0A1A2F]/40">
            v.2023
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const Experiences = ({
  items,
  selectedItem,
  onSelect,
}: {
  items: Experience[];
  selectedItem: number | null;
  onSelect: (index: number | null) => void;
}) => (
  <motion.div
    key="experiences"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-6"
  >
    {items.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        onClick={() => onSelect(selectedItem === index ? null : index)}
        className="relative group cursor-pointer mb-10"
      >
        <div className="relative flex items-start gap-6">
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#E03A3C] rotate-3 group-hover:rotate-6 transition-transform" />
              <div className="relative bg-[#f4f0e9] border-4 border-[#0A1A2F] px-6 py-3">
                <span className="text-3xl font-black">{item.year}</span>
              </div>
            </div>

            <div className="mt-4 relative">
              <div className="absolute inset-0 bg-[#F7D44A] rounded-full translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              <div className="relative w-16 h-16 bg-[#E03A3C] border-4 border-[#0A1A2F] rounded-full flex items-center justify-center text-3xl"></div>
            </div>

            <div className="w-0.5 h-16 bg-[#0A1A2F] mt-4" />
          </div>

          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-[#0A1A2F] translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform" />
            <div className="absolute inset-0 bg-[#E03A3C] translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />

            <div className="relative bg-[#f4f0e9] border-4 border-[#0A1A2F] p-8">
              <div className="absolute -top-4 -right-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#2E8B57] rotate-2 group-hover:rotate-3 transition-transform" />
                  <div className="relative bg-[#E03A3C] border-4 border-[#0A1A2F] px-6 py-2">
                    <span className="text-white font-black uppercase tracking-wider text-sm">
                      {item.company}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#2E8B57] rotate-2" />
                    <span
                      className={`relative block px-4 py-1 text-xs font-mono font-black border-4 border-[#0A1A2F] ${
                        index === 0 ? "bg-[#E03A3C] text-white" : "bg-white"
                      }`}
                    >
                      {index === 0 ? "CURRENT" : "PREVIOUS"}
                    </span>
                  </div>
                  <div className="w-12 h-0.5 bg-[#0A1A2F]" />
                  <span className="text-xs font-mono opacity-40">
                    #{item.end}
                  </span>
                </div>
                <h3 className="text-4xl font-black uppercase leading-tight relative">
                  <span className="relative z-10">{item.event}</span>
                  <div className="absolute -bottom-2 left-0 w-1/3 h-3 bg-[#F7D44A] -z-10" />
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-[10px] font-mono bg-white border border-[#0A1A2F] px-2 py-1">
                  FULL-TIME
                </span>
                <span className="text-[10px] font-mono bg-white border border-[#0A1A2F] px-2 py-1">
                  JUNIOR
                </span>
                <span className="text-[10px] font-mono bg-white border border-[#0A1A2F] px-2 py-1">
                  REMOTE
                </span>
              </div>

              <AnimatePresence>
                {selectedItem === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4"
                  >
                    <div className="border-t-4 border-[#0A1A2F] pt-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs font-mono font-black text-[#2E8B57] mb-3">
                            RESPONSIBILITIES
                          </p>
                          <ul className="space-y-2 font-mono text-sm">
                            <li className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-[#E03A3C] rotate-45 shrink-0" />
                              <span>Lead frontend architecture</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-[#2E8B57] rotate-45 shrink-0" />
                              <span>Code review and mentoring</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-[#F7D44A] rotate-45 shrink-0" />
                              <span>Performance optimization</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-xs font-mono font-black text-[#2E8B57] mb-3">
                            TECHNOLOGIES
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 bg-[#0A1A2F] text-white text-xs font-mono font-black border border-[#0A1A2F]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#E03A3C]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export const Certifications = ({ items }: { items: Certification[] }) => (
  <motion.div
    key="certifications"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8"
  >
    {items.map((cert, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-[#E03A3C] rotate-3 group-hover:rotate-4 transition-transform duration-300" />
        <div className="absolute inset-0 bg-[#0A1A2F] -rotate-2 group-hover:-rotate-3 transition-transform duration-300" />
        <div className="absolute inset-0 bg-[#F7D44A] rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-20" />

        <div className="relative bg-[#FDF5E6] border-4 border-[#0A1A2F] p-8 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300">
          <div className="absolute top-2 left-2 w-6 h-6 border-t-4 border-l-4 border-[#E03A3C]" />
          <div className="absolute top-2 right-2 w-6 h-6 border-t-4 border-r-4 border-[#E03A3C]" />
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b-4 border-l-4 border-[#E03A3C]" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-4 border-r-4 border-[#E03A3C]" />

          <div className="absolute -top-3 right-1/2 transform translate-x-1/2 bg-[#E03A3C] px-6 py-1 border-4 border-[#0A1A2F]">
            <span className="text-white text-sm font-black">{cert.year}</span>
          </div>

          <div className="text-center mt-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-[#0A1A2F]" />
              <span className="text-xs font-mono text-[#2E8B57] font-black tracking-widest uppercase">
                {cert.title}
              </span>
              <div className="w-12 h-0.5 bg-[#0A1A2F]" />
            </div>

            <h3 className="text-3xl font-black uppercase leading-tight mb-4 px-4">
              {cert.name}
            </h3>

            <div className="relative inline-block">
              <span className="text-sm font-mono font-bold text-[#2E8B57] px-6 py-2">
                {cert.year}
              </span>
              <div className="absolute -left-2 top-1/2 w-4 h-4 border-l-4 border-b-4 border-[#E03A3C] -translate-y-1/2" />
              <div className="absolute -right-2 top-1/2 w-4 h-4 border-r-4 border-b-4 border-[#E03A3C] -translate-y-1/2" />
            </div>
          </div>

          <div className="mt-8 pt-4 border-t-2 border-[#0A1A2F]/20">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs font-mono font-black tracking-widest">
                  SAN CHHAYLY
                </p>
                <p className="text-[8px] font-mono opacity-40">Recipient</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 justify-end">
                  <span className="w-1.5 h-1.5 bg-[#2E8B57] rounded-full animate-pulse" />
                  <span className="text-[8px] font-mono">VERIFIED</span>
                </div>
                <p className="text-[8px] font-mono opacity-40 mt-1">
                  ID: {cert.year}-{String(index + 1).padStart(3, "0")}
                </p>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
          />
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export const Tools = ({ items }: { items: Tool[] }) => (
  <motion.div
    key="tools"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="grid grid-cols-2 md:grid-cols-3 gap-4"
  >
    {items.map((tool, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-[#E03A3C] translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />

        <div className="relative bg-white border-4 border-[#0A1A2F] p-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12  flex items-center justify-center shrink-0">
              <Image src={tool.image} alt={tool.name} />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-black uppercase">{tool.name}</h3>
              <p className="text-xs font-mono text-[#2E8B57]">EXPERT</p>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export const Testimonials = ({
  items,
  currentIndex,
  onNavigate,
}: {
  items: Testimonial[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}) => (
  <motion.div
    key="testimonials"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="relative"
  >
    <div className="relative min-h-75">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <div className="bg-white border-8 border-[#0A1A2F] p-8 shadow-[16px_16px_0px_0px_#E03A3C]">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-6xl font-black text-[#E03A3C] leading-none">
                &quot;
              </span>
              <p className="text-xl font-mono flex-1 pt-2">
                {items[currentIndex].text}
              </p>
              <span className="text-6xl font-black text-[#E03A3C] leading-none self-end rotate-180">
                &quot;
              </span>
            </div>

            <div className="flex items-center justify-between mt-8 pt-4 border-t-4 border-[#0A1A2F]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F7D44A] flex items-center justify-center text-xl">
                  <Image
                    src={items[currentIndex].avatar}
                    alt={items[currentIndex].author}
                  />
                </div>
                <div>
                  <span className="text-sm font-black block uppercase">
                    {items[currentIndex].author}
                  </span>
                  <span className="text-[10px] font-mono opacity-60">
                    {items[currentIndex].role} • {items[currentIndex].company}
                  </span>
                </div>
              </div>

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 border-2 border-[#0A1A2F] ${
                      i < 4 ? "bg-[#F7D44A]" : "bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

    <div className="flex items-center justify-center gap-6">
      <button
        onClick={() =>
          onNavigate(currentIndex === 0 ? items.length - 1 : currentIndex - 1)
        }
        className="w-10 h-10 border-4 border-[#0A1A2F] bg-white font-black text-xl hover:bg-[#F7D44A] transition-colors shadow-[4px_4px_0px_0px_#0A1A2F] active:shadow-none active:translate-x-1 active:translate-y-1"
      >
        ←
      </button>

      <button
        onClick={() =>
          onNavigate(currentIndex === items.length - 1 ? 0 : currentIndex + 1)
        }
        className="w-10 h-10 border-4 border-[#0A1A2F] bg-white font-black text-xl hover:bg-[#F7D44A] transition-colors shadow-[4px_4px_0px_0px_#0A1A2F] active:shadow-none active:translate-x-1 active:translate-y-1"
      >
        →
      </button>
    </div>
  </motion.div>
);
