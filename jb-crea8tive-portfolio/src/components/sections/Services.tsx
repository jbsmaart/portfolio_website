"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Palette,
  PenTool,
  Share2,
  Printer,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "Build a distinctive visual identity that gives your brand a clear and memorable presence.",
    icon: Palette,
  },
  {
    number: "02",
    title: "Graphic Design",
    description:
      "Create compelling visual designs for campaigns, promotions, events, and everyday communication.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Social Media Design",
    description:
      "Design engaging social media visuals that help your brand communicate consistently and stand out online.",
    icon: Share2,
  },
  {
    number: "04",
    title: "Print Design",
    description:
      "Create professional print-ready materials including flyers, posters, banners, business cards, and more.",
    icon: Printer,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-white/10 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-brand-gold">
              What I Do
            </p>

            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Design that
              <br />
              <span className="text-brand-gold">moves brands forward.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-relaxed text-brand-muted">
            From strategy to execution, I create purposeful visual solutions
            designed to make your brand clearer, stronger, and more memorable.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative bg-[#020617] p-8 transition-colors duration-500 hover:bg-[#050D1B] sm:p-10"
              >
                {/* Number */}
                <span className="absolute right-8 top-8 text-sm text-white/20">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-brand-gold/40 group-hover:bg-brand-gold/10">
                  <Icon
                    size={20}
                    className="text-brand-gold"
                  />
                </div>

                <h3 className="mt-8 font-display text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-muted sm:text-base">
                  {service.description}
                </p>

                <div className="mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-brand-gold/40 group-hover:bg-brand-gold group-hover:text-black">
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}