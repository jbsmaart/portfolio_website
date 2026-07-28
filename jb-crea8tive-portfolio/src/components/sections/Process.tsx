"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  Search,
  Palette,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your goals, audience, brand, and the problem we're trying to solve.",
    icon: Search,
  },
  {
    number: "02",
    title: "Explore",
    description:
      "We research, brainstorm, and explore creative directions that align with your vision and objectives.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Create",
    description:
      "Ideas become visual concepts as we develop the design, refine the details, and bring the vision to life.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "After final refinements, you receive polished, production-ready files prepared for their intended use.",
    icon: CheckCircle2,
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-brand-gold">
            How We Work
          </p>

          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            A simple process.
            <br />
            <span className="text-brand-gold">Thoughtful results.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
            Great design doesn't happen by accident. Our process combines
            strategy, creativity, and collaboration to ensure every project
            has a clear purpose.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative mt-20">
          {/* Connecting Line — Desktop */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-white/10 lg:block" />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative"
                >
                  {/* Number / Icon */}
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#030712] transition-colors duration-300 hover:border-brand-gold/50">
                      <Icon
                        size={28}
                        strokeWidth={1.5}
                        className="text-brand-gold"
                      />
                    </div>

                    <span className="font-display text-sm font-semibold text-white/20 lg:hidden">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <div className="hidden text-xs font-medium uppercase tracking-[0.2em] text-brand-gold lg:block">
                      Step {step.number}
                    </div>

                    <h3 className="mt-2 font-display text-2xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <ArrowRight
                      size={20}
                      className="absolute -right-5 top-10 hidden text-white/20 lg:block"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}