"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import ProjectCard from "./ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";

const categories = [
  "All",
  "Branding",
  "Social Media",
  "Print",
  "Logo",
  "Packaging",
] as const;

type FilterCategory = (typeof categories)[number];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState<FilterCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="work"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-brand-gold">
              Selected Work
            </p>

            <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Ideas brought to life through{" "}
              <span className="text-brand-gold">design.</span>
            </h2>
          </motion.div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group flex w-fit items-center gap-2 border-b border-white/20 pb-2 text-sm font-medium transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            Start a project
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>
        </div>

        {/* Filters */}
        <div className="mt-12 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative whitespace-nowrap rounded-full px-5 py-2.5 text-sm transition-colors ${
                activeCategory === category
                  ? "text-black"
                  : "border border-white/10 text-white/60 hover:text-white"
              }`}
            >
              {activeCategory === category && (
                <motion.span
                  layoutId="active-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-brand-gold"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              {category}
            </button>
          ))}
        </div>

        {/* Projects */}
        <motion.div
          layout
          className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="group flex items-center gap-3 rounded-full border border-white/10 px-7 py-4 font-medium transition-all hover:border-brand-gold hover:text-brand-gold"
          >
            Have a project in mind?
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}