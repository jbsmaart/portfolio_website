"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Client Name",
    role: "Business Owner",
    company: "Company Name",
    text: "JB crea8tive understood exactly what I needed and turned the idea into a design that exceeded my expectations. The attention to detail was excellent.",
  },
  {
    name: "Client Name",
    role: "Entrepreneur",
    company: "Brand Name",
    text: "Professional, creative, and easy to work with. The final designs gave my brand a much more polished and professional appearance.",
  },
  {
    name: "Client Name",
    role: "Founder",
    company: "Business Name",
    text: "From the initial concept to the final delivery, the entire process was smooth. I would definitely recommend JB crea8tive to anyone looking for quality design.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-brand-navy/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-brand-gold">
            Client Feedback
          </p>

          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Don't just take our{" "}
            <span className="text-brand-gold">word for it.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
            The best measure of our work is the experience we create for the
            people and businesses we work with.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="relative rounded-3xl border border-white/10 bg-[#050D1B] p-8"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold/10">
                  <Quote
                    size={18}
                    className="text-brand-gold"
                  />
                </div>

                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      fill="currentColor"
                      className="text-brand-gold"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <p className="mt-8 text-base leading-relaxed text-white/70">
                "{testimonial.text}"
              </p>

              {/* Client */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-display font-semibold">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-brand-muted">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}