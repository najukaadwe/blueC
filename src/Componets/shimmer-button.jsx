import React from "react";

export function ShimmerButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`relative overflow-hidden rounded-full bg-black px-6 py-2 text-white font-semibold shadow-lg hover:brightness-125 transition-all duration-300 ${className}`}
    >
      {/* Text Layer */}
      <span className="relative z-10">{children}</span>

      {/* Shimmer Layer */}
      <span className="absolute inset-0 z-0 before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent" />
    </button>
  );
}
