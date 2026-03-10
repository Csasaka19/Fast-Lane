"use client";

import { motion } from "framer-motion";
import CTAButton from "../ui/CTAButton";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sky-500 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6 tracking-tight">
              Built for Businesses That Want More Than
              &ldquo;Marketing&rdquo;
            </h2>
            <p className="text-gray-600 dark:text-slate-300 mb-4 leading-relaxed">
              Fastlane was built on a simple observation: Most businesses
              don&apos;t fail because they lack effort. They fail because they
              lack{" "}
              <strong className="text-gray-900 dark:text-white">
                clarity, leverage, and optimized offers
              </strong>
              .
            </p>
            <p className="text-gray-600 dark:text-slate-300 mb-8 leading-relaxed">
              We exist to fix that. We don&apos;t start with tactics — we start
              with economics, positioning, and leverage.
            </p>
            <CTAButton text="Learn More About Us" href="/about" variant="outline" />
          </motion.div>

          {/* Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Our Philosophy
              </h3>
              <div className="space-y-3 mb-6">
                {[
                  "Marketing is not ads.",
                  "Marketing is not content.",
                  "Marketing is not noise.",
                ].map((line, i) => (
                  <p
                    key={i}
                    className="text-gray-500 dark:text-slate-400 line-through decoration-1"
                  >
                    {line}
                  </p>
                ))}
              </div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                Marketing is{" "}
                <span className="text-sky-500 dark:text-sky-400">
                  value, clearly packaged and precisely delivered
                </span>
                .
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-700">
                <p className="text-sm text-gray-600 dark:text-slate-300 mb-3">
                  At Fastlane, we believe:
                </p>
                <ul className="space-y-2">
                  {[
                    "Your offer determines your results",
                    "Systems beat hustle every time",
                    "Growth should be intentional, profitable, and scalable",
                  ].map((belief, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-slate-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                      {belief}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
