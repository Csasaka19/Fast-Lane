"use client";

import { motion } from "framer-motion";
import { Users, Rocket, Target, Award } from "lucide-react";
import { whoWeWorkWith } from "@/lib/constants";

const icons = [Users, Rocket, Target, Award];

export default function WhoWeWorkWith() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sky-500 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider">
            Our Clients
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 tracking-tight">
            Who We Work With
          </h2>
          <p className="text-gray-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
            Fastlane is for serious businesses ready to build something that
            lasts.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whoWeWorkWith.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-slate-700 hover:border-sky-200 dark:hover:border-sky-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-sky-50 dark:bg-sky-900/30 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-7 w-7 text-sky-500 dark:text-sky-400" />
                </div>
                <p className="font-medium text-gray-700 dark:text-slate-300">
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
          className="text-center mt-12 text-gray-600 dark:text-slate-400 italic"
        >
          If you&apos;re serious about building something that lasts, you&apos;ll
          feel at home here.
        </motion.p>
      </div>
    </section>
  );
}
