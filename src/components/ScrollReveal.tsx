"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal();

  const getDirectionClasses = () => {
    switch (direction) {
      case "up":
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12";
      case "down":
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12";
      case "left":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12";
      case "right":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12";
      case "scale":
        return isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90";
      default:
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12";
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform-gpu ${getDirectionClasses()} ${className}`}
    >
      {children}
    </div>
  );
}
