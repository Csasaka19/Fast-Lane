"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/constants";
import ServiceCard from "@/components/ui/ServiceCard";
import CTAButton from "@/components/ui/CTAButton";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sky-500 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-6 tracking-tight">
              Our Core Growth Services
            </h1>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              We help you design irresistible offers, optimize income streams,
              and build systems for scalable growth. Every service is designed
              around maximizing your ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              How We Work
            </h2>
            <p className="text-gray-600 dark:text-slate-300 mt-4">
              A proven process built for results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Diagnose",
                description:
                  "We audit your current offers, systems, and growth bottlenecks to find the biggest ROI opportunities.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "We build a custom growth strategy with optimized offers, pricing models, and conversion systems.",
              },
              {
                step: "03",
                title: "Deploy",
                description:
                  "We implement and iterate with you — hands-on execution, not PowerPoint decks.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-sky-100 dark:text-sky-900/50 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-300 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
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
