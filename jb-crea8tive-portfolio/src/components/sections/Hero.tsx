"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-6 sm:pt-32 lg:pb-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 sm:gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 flex items-center justify-center gap-3 lg:justify-start"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10">
              <Sparkles size={15} className="text-brand-gold" />
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-muted sm:text-sm sm:tracking-[0.25em]">
              Creative Design Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[3.25rem] font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            We turn ideas
            <br />
            into{" "}
            <span className="relative inline-block text-brand-gold">
              impact.
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-brand-gold/40 sm:-bottom-2" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-brand-muted sm:mt-8 sm:text-lg lg:mx-0"
          >
            JB crea8tive helps businesses and individuals build memorable
            brands through strategic design, compelling visuals, and creative
            thinking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start"
          >
            <a
              href="#work"
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition-all hover:scale-105 sm:w-auto"
            >
              Explore Our Work
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="flex w-full items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition-all hover:border-brand-gold hover:text-brand-gold sm:w-auto"
            >
              Start a Project
            </a>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto h-[330px] w-full max-w-[420px] sm:h-[420px] sm:max-w-[500px]"
        >
          {/* Main Visual */}
          <div className="absolute inset-5 rotate-[-6deg] overflow-hidden rounded-[1.5rem] border border-white/10 bg-brand-navy shadow-2xl sm:inset-8 sm:rounded-[2rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.25),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_30%)]" />

            <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold">
                  JB<span className="text-brand-gold">.</span>
                </span>

                <span className="text-[10px] uppercase tracking-[0.15em] text-white/40 sm:text-xs sm:tracking-[0.2em]">
                  Selected Work
                </span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-brand-gold sm:text-sm sm:tracking-[0.2em]">
                  Innovate. Create. Elevate.
                </p>

                <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:mt-4 sm:text-4xl">
                  Visuals that
                  <br />
                  speak louder.
                </h2>
              </div>

              <div className="flex justify-between border-t border-white/10 pt-4 text-[10px] text-white/40 sm:pt-5 sm:text-xs">
                <span>Brand Identity</span>
                <span>2026</span>
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-1 top-4 rounded-xl border border-white/10 bg-white/10 p-3 shadow-xl backdrop-blur-xl sm:-right-2 sm:top-8 sm:rounded-2xl sm:p-4"
          >
            <div className="h-10 w-10 rounded-lg bg-brand-gold sm:h-12 sm:w-12 sm:rounded-xl" />
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-1 left-0 rounded-xl border border-white/10 bg-[#081B3A]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-bottom-2 sm:-left-2 sm:rounded-2xl sm:px-5 sm:py-4"
          >
            <p className="text-[10px] text-white/50 sm:text-xs">
              Creative Partner
            </p>

            <p className="mt-1 text-sm font-semibold sm:text-base">
              Let's build something.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 md:flex"
      >
        Scroll
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}