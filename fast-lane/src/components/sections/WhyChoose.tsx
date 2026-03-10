"use client";

import { motion } from "framer-motion";
import { CheckCircle, Shield } from "lucide-react";
import { whyChooseUs } from "@/lib/constants";

export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Icon Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900/30 dark:to-blue-900/30 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="h-24 w-24 lg:h-32 lg:w-32 text-sky-500 dark:text-sky-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-amber-400/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sky-500 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider">
              Why Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4 tracking-tight">
              Why Businesses Choose Fastlane
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-300 mb-8">
              Because speed comes from clarity — not noise. We blend strategy,
              data, and execution to produce growth you can measure, not just
              hype you can hear.
            </p>
            <ul className="space-y-4 mb-8">
              {whyChooseUs.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-emerald-500 shrink-0" />
                  <span className="text-gray-700 dark:text-slate-300 font-medium">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-gray-800 dark:text-slate-200 italic">
              If it doesn&apos;t move revenue, we don&apos;t recommend it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
