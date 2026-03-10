"use client";

import { motion } from "framer-motion";
import CTAButton from "../ui/CTAButton";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-sky-500 to-blue-600 dark:from-sky-700 dark:to-blue-900 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-sky-300/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Let&apos;s Build Your Fastlane
          </h2>
          <p className="text-lg text-sky-100 mb-4 leading-relaxed max-w-2xl mx-auto">
            If you&apos;re ready to stop experimenting and start scaling with
            intention, we&apos;re ready to help.
          </p>
          <p className="text-sky-200 mb-10">
            Book your free strategy session and let&apos;s design a growth
            engine built for speed, clarity, and profit.
          </p>
          <CTAButton
            text="Book a Free Strategy Session"
            href="/contact"
            variant="secondary"
            size="lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
