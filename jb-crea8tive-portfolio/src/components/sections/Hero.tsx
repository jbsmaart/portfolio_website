"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/10 blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10">
              <Sparkles size={15} className="text-brand-gold" />
            </span>

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-brand-muted">
              Creative Design Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            We turn ideas
            <br />
            into{" "}
            <span className="relative inline-block text-brand-gold">
              impact.
              <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-brand-gold/40" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg"
          >
            JB crea8tive helps businesses and individuals build memorable
            brands through strategic design, compelling visuals, and creative
            thinking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#work"
              className="group flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition-all hover:scale-105"
            >
              Explore Our Work
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition-all hover:border-brand-gold hover:text-brand-gold"
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
          className="relative mx-auto h-[420px] w-full max-w-[500px]"
        >
          {/* Main Visual */}
          <div className="absolute inset-8 rotate-[-6deg] overflow-hidden rounded-[2rem] border border-white/10 bg-brand-navy shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.25),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_30%)]" />

            <div className="relative flex h-full flex-col justify-between p-8">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold">
                  JB<span className="text-brand-gold">.</span>
                </span>

                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Selected Work
                </span>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-brand-gold">
                  Innovate. Create. Elevate.
                </p>

                <h2 className="mt-4 font-display text-4xl font-bold leading-tight">
                  Visuals that
                  <br />
                  speak louder.
                </h2>
              </div>

              <div className="flex justify-between border-t border-white/10 pt-5 text-xs text-white/40">
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
            className="absolute -right-2 top-8 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-xl backdrop-blur-xl"
          >
            <div className="h-12 w-12 rounded-xl bg-brand-gold" />
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-2 -left-2 rounded-2xl border border-white/10 bg-[#081B3A]/90 px-5 py-4 shadow-xl backdrop-blur-xl"
          >
            <p className="text-xs text-white/50">Creative Partner</p>
            <p className="mt-1 font-display font-semibold">
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