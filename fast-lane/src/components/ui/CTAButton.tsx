"use client";

import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
}

export default function CTAButton({
  text,
  onClick,
  href,
  variant = "primary",
  size = "md",
  showArrow = true,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer";

  const variants = {
    primary:
      "bg-sky-500 hover:bg-sky-600 text-white dark:bg-sky-600 dark:hover:bg-sky-500",
    secondary:
      "bg-amber-500 hover:bg-amber-600 text-white dark:bg-amber-600 dark:hover:bg-amber-500",
    outline:
      "border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white dark:border-sky-400 dark:text-sky-400 dark:hover:bg-sky-400 dark:hover:text-slate-900",
  };

  const sizes = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };

  const className = `${baseStyles} ${variants[variant]} ${sizes[size]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {text}
        {showArrow && <ArrowRight className="h-5 w-5" />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {text}
      {showArrow && <ArrowRight className="h-5 w-5" />}
    </button>
  );
}
