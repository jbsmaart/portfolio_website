"use client";

import {
  ArrowUpRight,
  Camera,
  Users,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#020617]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="inline-block font-display text-2xl font-bold tracking-tight text-white"
            >
              JB<span className="text-brand-gold">.</span>crea8tive
            </a>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-muted">
              A creative design studio helping businesses and individuals
              communicate their ideas through thoughtful, strategic, and
              memorable visual design.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-brand-gold"
            >
              Start a Project

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white">Explore</h3>

            <nav className="mt-5 flex flex-col gap-3">
              <a
                href="#about"
                className="text-sm text-brand-muted transition-colors hover:text-white"
              >
                About
              </a>

              <a
                href="#services"
                className="text-sm text-brand-muted transition-colors hover:text-white"
              >
                Services
              </a>

              <a
                href="#work"
                className="text-sm text-brand-muted transition-colors hover:text-white"
              >
                Work
              </a>

              <a
                href="#contact"
                className="text-sm text-brand-muted transition-colors hover:text-white"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white">Connect</h3>

            <div className="mt-5 flex flex-col gap-4">
              <a
                href="mailto:hello@jbcrea8tive.com"
                className="flex items-center gap-3 text-sm text-brand-muted transition-colors hover:text-white"
              >
                <Mail size={16} />
                hello@jbcrea8tive.com
              </a>

              <div className="flex gap-3 pt-2">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-brand-muted transition-all hover:border-brand-gold/40 hover:text-brand-gold"
                >
                  <Camera size={17} />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-brand-muted transition-all hover:border-brand-gold/40 hover:text-brand-gold"
                >
                  <Users size={17} />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-brand-muted transition-all hover:border-brand-gold/40 hover:text-brand-gold"
                >
                  <BriefcaseBusiness size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-brand-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} JB crea8tive. All rights reserved.
          </p>

          <p>
            Innovate. Create. Elevate.
          </p>
        </div>
      </div>
    </footer>
  );
}
