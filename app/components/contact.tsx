"use client";

import { ReactNode } from "react";
import { SOCIAL } from "../data";
import { motion } from "framer-motion";

interface BrutalistCardProps {
  children: ReactNode;
  className?: string;
}

const BrutalistCard = ({ children, className = "" }: BrutalistCardProps) => (
  <div
    className={`border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${className}`}
  >
    {children}
  </div>
);

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-[#fafafa] text-black overflow-hidden border-t-12 border-black flex flex-col font-mono selection:bg-cyan-400"
    >
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="text-7xl md:text-9xl font-black uppercase leading-[0.75] tracking-tighter italic mb-8">
                LET&apos;S CREATE <br />
                <span className="text-pink-500">TOGETHER.</span>
              </h1>
            </motion.div>

            <BrutalistCard className="rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4 border-b-2 border-black pb-2 font-mono text-xs font-bold">
                <span className="text-pink-500 animate-pulse">●</span> STATUS:
                OPEN_FOR_COLLABORATION
              </div>
              <p className="font-mono text-sm leading-relaxed mb-6">
                &gt; Frontend Developer building modern web experiences.
                <br />
                &gt; React, Angular, TypeScript specialist.
                <br />
                &gt; Open for new opportunities and collaborations.
              </p>
              <motion.a
                download
                href="/SAN_CHHAYLY.pdf"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 0.98 }}
                className="block bg-black text-white p-4 font-black text-center cursor-pointer hover:bg-pink-500 transition-colors uppercase shadow-[4px_4px_0px_0px_#22d3ee]"
              >
                Download Resume
              </motion.a>
            </BrutalistCard>

            <div className="hidden lg:block opacity-30 text-[10px] font-black uppercase tracking-widest leading-loose">
              SYSTEM: ONLINE <br />
              DEPLOYMENT: STABLE <br />
              LOCATION: PHNOM_PENH
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end mb-4 border-b-4 border-black pb-2">
              <span className="font-black text-xs uppercase italic tracking-widest">
                CONNECT_CHANNELS
              </span>
              <span className="text-[10px] font-bold opacity-40">
                CONTACT_NODE
              </span>
            </div>

            {SOCIAL.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 12, backgroundColor: "#000", color: "#fff" }}
                  className="bg-white border-4 border-black p-6 flex items-center justify-between group transition-all shadow-[6px_6px_0px_0px_#000] hover:shadow-none"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 border-2 border-black flex items-center justify-center bg-[#f0f0f0] group-hover:bg-white group-hover:rotate-12 transition-all">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <span className="text-3xl font-black uppercase italic tracking-tighter">
                      {social.label.split(" ")[0]}
                    </span>
                  </div>
                  <div className="font-mono text-[10px] font-black opacity-0 group-hover:opacity-100 transition-opacity text-pink-500">
                    CONNECT &gt;&gt;
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full bg-black text-white py-3 px-8 flex justify-between items-center border-t-4 border-black">
        <div className="flex gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-2 h-4 bg-white/20" />
          ))}
        </div>
        <div className="text-[10px] font-black uppercase italic tracking-widest">
          READY_FOR_COLLABORATION // SIGNAL_ACTIVE
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-[9px] font-black uppercase">Secure</span>
        </div>
      </div>
    </section>
  );
}
