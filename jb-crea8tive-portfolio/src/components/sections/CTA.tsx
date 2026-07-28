"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050D1B] px-6 py-16 text-center sm:px-12 sm:py-24"
        >
          {/* Decorative Lines */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-white/5" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-brand-gold">
              Let's Create Something Great
            </p>

            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Have an idea?
              <br />
              <span className="text-brand-gold">
                Let's bring it to life.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
              Whether you need a new brand identity, engaging social media
              designs, or professional print materials, let's create
              something that makes your brand impossible to ignore.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-gold px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white"
              >
                Start a Project

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#work"
                className="inline-flex items-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
              >
                View My Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}