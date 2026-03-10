"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const helpItems = [
  "Design irresistible offers customers want to say yes to",
  "Generate qualified leads consistently",
  "Convert prospects into paying customers",
  "Turn customers into loyal, repeat buyers",
  "Scale without chaos, burnout, or wasted spend",
];

export default function HighROIGrowth() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Your Fastest Path to{" "}
              <span className="text-sky-500 dark:text-sky-400">
                High ROI Growth
              </span>
            </h2>
            <div className="mb-8">
              <p className="text-lg text-gray-600 dark:text-slate-300 mb-2">
                Most businesses don&apos;t have a traffic problem.
              </p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                They have an{" "}
                <span className="text-amber-500">offer problem</span>.
              </p>
            </div>
            <p className="text-gray-600 dark:text-slate-300 mb-6">
              We help you:
            </p>
            <ul className="space-y-4">
              {helpItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-slate-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Quote Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 rounded-2xl p-8 lg:p-12 border border-sky-100 dark:border-sky-800/50">
              <p className="text-gray-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Every move we make is designed around one question:
              </p>
              <blockquote className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white italic border-l-4 border-sky-500 pl-6">
                &ldquo;How do we maximize return on every shilling, dollar, and
                minute invested?&rdquo;
              </blockquote>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sky-400/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
