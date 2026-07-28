"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const strengths = [
  "Strategic visual thinking",
  "Clean, purposeful design",
  "Attention to detail",
  "Reliable client collaboration",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-brand-gold">
              About JB crea8tive
            </p>

            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Design with
              <br />
              <span className="text-brand-gold">purpose.</span>
            </h2>

            <p className="mt-8 text-base leading-relaxed text-brand-muted sm:text-lg">
              JB crea8tive is a creative design studio focused on helping
              businesses, organisations, and individuals communicate their
              ideas through impactful visual design.
            </p>

            <p className="mt-5 text-base leading-relaxed text-brand-muted sm:text-lg">
              From brand identities and social media graphics to promotional
              materials and print design, every project is approached with
              intention, creativity, and attention to detail.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-brand-gold"
            >
              Let's work together

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Decorative Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050D1B] p-8 sm:p-10">
              {/* Large Background Text */}
              <div className="pointer-events-none absolute -right-6 -top-8 select-none font-display text-[9rem] font-bold leading-none text-white/[0.02]">
                JB
              </div>

              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.2em] text-brand-muted">
                  What I bring
                </p>

                <div className="mt-8 space-y-5">
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={strength}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      className="flex items-center gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gold/10">
                        <Check
                          size={15}
                          className="text-brand-gold"
                        />
                      </div>

                      <span className="text-sm font-medium text-white sm:text-base">
                        {strength}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Small Accent */}
            <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 rounded-2xl border border-brand-gold/20 bg-brand-gold/5 sm:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}