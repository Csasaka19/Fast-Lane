"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Target,
  Lightbulb,
  TrendingUp,
  HelpCircle,
} from "lucide-react";
import { philosophy, mission } from "@/lib/constants";
import CTAButton from "@/components/ui/CTAButton";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sky-500 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-6 tracking-tight">
              Built for Businesses That Want More Than
              &ldquo;Marketing&rdquo;
            </h1>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Fastlane was built on a simple observation: Most businesses
              don&apos;t fail because they lack effort. They fail because they
              lack{" "}
              <strong className="text-gray-900 dark:text-white">
                clarity, leverage, and optimized offers
              </strong>
              . We exist to fix that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Philosophy
              </h2>
              <div className="space-y-2 mb-6 text-lg text-gray-500 dark:text-slate-400">
                <p className="line-through">Marketing is not ads.</p>
                <p className="line-through">Marketing is not content.</p>
                <p className="line-through">Marketing is not noise.</p>
              </div>
              <p className="text-xl font-bold text-gray-900 dark:text-white mb-8">
                Marketing is{" "}
                <span className="text-sky-500">
                  value, clearly packaged and precisely delivered
                </span>
                .
              </p>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                At Fastlane, we believe:
              </h3>
              <ul className="space-y-3">
                {philosophy.beliefs.map((belief, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                    <span className="text-gray-700 dark:text-slate-300">
                      {belief}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What Makes Us Different */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What Makes Us Different
              </h2>
              <p className="text-gray-600 dark:text-slate-300 mb-2">
                We don&apos;t start with tactics.
              </p>
              <p className="text-gray-600 dark:text-slate-300 mb-6">
                We start with{" "}
                <strong className="text-gray-900 dark:text-white">
                  economics, positioning, and leverage
                </strong>
                . Before traffic. Before funnels. Before ads.
              </p>
              <p className="text-gray-600 dark:text-slate-300 mb-4">
                We ask:
              </p>
              <ul className="space-y-3 mb-6">
                {philosophy.differentiators.map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-slate-300 font-medium">
                      {q}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 dark:text-slate-300 italic">
                That&apos;s how we consistently help brands increase ROI,
                conversion rates, and lifetime value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-slate-300 mt-4">
              To help ambitious businesses:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {mission.map((item, i) => {
              const icons = [Target, TrendingUp, Lightbulb, CheckCircle];
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/30 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-sky-500" />
                  </div>
                  <p className="text-sm text-gray-700 dark:text-slate-300">
                    {item}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 text-lg font-semibold text-gray-900 dark:text-white"
          >
            Not just fast growth —{" "}
            <span className="text-sky-500">smart growth</span>.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-sky-500 to-blue-600 dark:from-sky-700 dark:to-blue-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Accelerate?
          </h2>
          <p className="text-sky-100 mb-8 text-lg">
            Let&apos;s turn your ideas into income and your business into a
            high-performance growth engine.
          </p>
          <CTAButton
            text="Book a Free Strategy Session"
            href="/contact"
            variant="secondary"
            size="lg"
          />
        </div>
      </section>
    </>
  );
}
