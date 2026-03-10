"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/constants";
import ServiceCard from "../ui/ServiceCard";

export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sky-500 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 tracking-tight">
            Our Core Growth Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
