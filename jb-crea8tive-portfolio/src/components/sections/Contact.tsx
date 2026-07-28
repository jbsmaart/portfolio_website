"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Camera,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-brand-gold">
            Get In Touch
          </p>

          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Let's create something
            <br />
            <span className="text-brand-gold">worth remembering.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
            Have a project in mind, or just want to discuss an idea? Send a
            message and let's explore what we can create together.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {/* Email */}
              <a
                href="jbcrea8tive@gmail.com"
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-[#050D1B] p-5 transition-all duration-300 hover:border-brand-gold/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gold/10">
                  <Mail size={20} className="text-brand-gold" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-white sm:text-base">
                    jbcrea8tive@gmail.com
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="ml-auto text-white/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2348130275554"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-[#050D1B] p-5 transition-all duration-300 hover:border-brand-gold/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gold/10">
                  <MessageCircle size={20} className="text-brand-gold" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-medium text-white sm:text-base">
                    Start a conversation
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="ml-auto text-white/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              {/* Location */}
              <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#050D1B] p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gold/10">
                  <MapPin size={20} className="text-brand-gold" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">
                    Based In
                  </p>

                  <p className="mt-1 text-sm font-medium text-white sm:text-base">
                    Kaduna, Nigeria · Available Worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">
                Follow JB crea8tive
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all hover:border-brand-gold/40 hover:text-brand-gold"
                >
                  <Camera size={18} />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all hover:border-brand-gold/40 hover:text-brand-gold"
                >
                  <Users size={18} />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all hover:border-brand-gold/40 hover:text-brand-gold"
                >
                  <BriefcaseBusiness size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-[#050D1B] p-6 sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold/50"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold/50"
                />
              </div>
            </div>

            {/* Project Type */}
            <div className="mt-6">
              <label
                htmlFor="project"
                className="mb-2 block text-sm font-medium text-white"
              >
                What do you need?
              </label>

              <select
                id="project"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold/50"
                defaultValue=""
              >
                <option value="" disabled className="bg-[#050D1B]">
                  Select a service
                </option>

                <option value="branding" className="bg-[#050D1B]">
                  Branding & Visual Identity
                </option>

                <option value="social" className="bg-[#050D1B]">
                  Social Media Design
                </option>

                <option value="print" className="bg-[#050D1B]">
                  Print Design
                </option>

                <option value="logo" className="bg-[#050D1B]">
                  Logo Design
                </option>

                <option value="other" className="bg-[#050D1B]">
                  Something Else
                </option>
              </select>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-white"
              >
                Tell me about your project
              </label>

              <textarea
                id="message"
                rows={5}
                placeholder="Tell me a little about your project, goals, timeline, and anything else I should know..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold/50"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand-gold px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-white"
            >
              Send Project Inquiry

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
