"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const highlights = [
  "Creative solutions tailored to your brand",
  "Professional and intentional visual design",
  "Attention to detail from concept to delivery",
  "Design that communicates, connects, and converts",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left: Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-square max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-brand-navy">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.25),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_30%)]" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:50px_50px]" />

            {/* Main Typography */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-7xl font-bold tracking-tighter text-white/10 sm:text-8xl">
                  JB
                </p>

                <p className="mt-[-20px] font-display text-3xl font-bold text-brand-gold">
                  crea8tive
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-6 top-6 flex h-24 w-24 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold text-center text-xs font-bold uppercase tracking-wider text-black"
            >
              Design
              <br />
              With
              <br />
              Purpose
            </motion.div>

            {/* Bottom Label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Our Philosophy
                </p>
                <p className="mt-2 font-display text-xl font-semibold">
                  Innovate. Create. Elevate.
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-brand-gold">
            About JB crea8tive
          </p>

          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            We believe good design should{" "}
            <span className="text-brand-gold">mean something.</span>
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-brand-muted sm:text-lg">
            <p>
              JB crea8tive is a creative design studio focused on turning ideas
              into meaningful visual experiences. We combine creativity,
              strategy, and attention to detail to help individuals and
              businesses communicate with confidence.
            </p>

            <p>
              From a simple logo to a complete visual identity, every project
              is approached with the goal of creating work that looks
              distinctive, feels intentional, and leaves a lasting impression.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 text-sm text-white/70"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/10">
                  <Check size={12} className="text-brand-gold" />
                </span>

                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-3 border-b border-white/20 pb-2 font-medium transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            Let's work together
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}