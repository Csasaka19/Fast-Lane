"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { testimonials, clientLogos } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sky-500 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 tracking-tight">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-3xl mx-auto mb-20">
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-600 dark:text-slate-300 transition-colors shrink-0"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="text-center px-4"
                >
                  <Quote className="h-10 w-10 text-sky-200 dark:text-sky-800 mx-auto mb-4" />
                  <p className="text-sm font-semibold text-sky-500 dark:text-sky-400 mb-2">
                    {testimonials[current].company}
                  </p>
                  <blockquote className="text-xl lg:text-2xl font-medium text-gray-900 dark:text-white italic mb-6 leading-relaxed">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-center gap-3">
                    {/*
                      ACTION REQUIRED: Add testimonial avatar images
                      Get from https://randomuser.me/photos or https://uifaces.co
                      Size: 100x100px
                    */}
                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-slate-700 overflow-hidden relative">
                      <Image
                        src={testimonials[current].avatar}
                        alt={testimonials[current].name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonials[current].name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-slate-400">
                        {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-600 dark:text-slate-300 transition-colors shrink-0"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-sky-500 w-6"
                    : "bg-gray-300 dark:bg-slate-600"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sky-500 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider mb-8">
            Some of Our Clients
          </p>
          {/*
            ACTION REQUIRED: Add client logo images to /public/images/
            Get logos from clients or use placeholder SVGs from https://svgrepo.com
            Recommended size: 200x80px, SVG format preferred
          */}
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 dark:opacity-40">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-gray-400 font-medium text-sm">${client.name}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
