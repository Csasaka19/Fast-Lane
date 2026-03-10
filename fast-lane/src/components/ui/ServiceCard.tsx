"use client";

import { motion } from "framer-motion";
import { Wrench, DollarSign, TrendingUp, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  DollarSign,
  TrendingUp,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
  result: string;
  index: number;
}

export default function ServiceCard({
  icon,
  title,
  tagline,
  description,
  items,
  result,
  index,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || Wrench;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-slate-700 hover:border-sky-200 dark:hover:border-sky-800"
    >
      <div className="w-14 h-14 rounded-xl bg-sky-50 dark:bg-sky-900/30 flex items-center justify-center mb-6 group-hover:bg-sky-100 dark:group-hover:bg-sky-900/50 transition-colors duration-300">
        <Icon className="h-7 w-7 text-sky-500 dark:text-sky-400" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sky-600 dark:text-sky-400 font-medium italic mb-4 text-sm">
        {tagline}
      </p>
      <p className="text-gray-600 dark:text-slate-300 mb-4 text-sm">
        {description}
      </p>
      <ul className="space-y-2 mb-6">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-gray-600 dark:text-slate-300"
          >
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <p className="text-sm font-semibold text-gray-800 dark:text-slate-200 border-t border-gray-100 dark:border-slate-700 pt-4">
        {result}
      </p>
    </motion.div>
  );
}
