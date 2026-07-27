"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="group"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-brand-navy">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/50" />

        {/* View Button */}
        <div className="absolute right-5 top-5 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={20} />
        </div>

        {/* Hover Label */}
        <div className="absolute bottom-5 left-5 right-5 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-gold">
            {project.category}
          </p>

          <h3 className="mt-1 font-display text-xl font-semibold text-white">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Project Info */}
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-brand-gold">
            {project.category}
          </p>

          <h3 className="mt-2 font-display text-xl font-semibold">
            {project.title}
          </h3>
        </div>

        <span className="mt-1 text-sm text-white/30">
          0{project.id}
        </span>
      </div>
    </motion.article>
  );
}