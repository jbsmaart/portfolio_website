"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brush,
  Clapperboard,
  Layout,
  Printer,
  Shapes,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "Build a distinctive visual identity that communicates your values and makes your brand recognisable.",
    icon: Shapes,
  },
  {
    number: "02",
    title: "Graphic Design",
    description:
      "Creative and purposeful visuals designed to capture attention and communicate your message clearly.",
    icon: Brush,
  },
  {
    number: "03",
    title: "Social Media Design",
    description:
      "Scroll-stopping content that gives your social media presence a consistent and professional visual identity.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Print Design",
    description:
      "Professional designs for flyers, posters, business cards, banners, brochures, and other print materials.",
    icon: Printer,
  },
  {
    number: "05",
    title: "UI Design",
    description:
      "Clean and intuitive digital interfaces designed to create engaging and user-friendly experiences.",
    icon: Layout,
  },
  {
    number: "06",
    title: "Video Editing",
    description:
      "Dynamic video content that combines storytelling, motion, and visual design to bring ideas to life.",
    icon: Clapperboard,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-brand-navy/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-brand-gold">
              What We Do
            </p>

            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Creative services built around{" "}
              <span className="text-brand-gold">your vision.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-base leading-relaxed text-brand-muted lg:ml-auto lg:text-lg"
          >
            Whether you're launching a new brand or taking an existing one to
            the next level, we create visual solutions that are strategic,
            memorable, and built to make an impact.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative bg-[#050D1B] p-8 transition-colors duration-300 hover:bg-[#0A1930] sm:p-10"
              >
                {/* Top Row */}
                <div className="flex items-start justify-between">
                  <span className="text-sm text-white/30">
                    {service.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-brand-gold/40 group-hover:bg-brand-gold group-hover:text-black">
                    <Icon size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-16">
                  <h3 className="font-display text-2xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:translate-x-1 group-hover:border-brand-gold group-hover:text-brand-gold">
                  <ArrowUpRight size={18} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}