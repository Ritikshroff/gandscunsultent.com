// components/ui/button.tsx
"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
};

const baseStyles = {
  primary: "bg-[#1A73E8] hover:bg-[#1666c1] text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => {
    const base = "rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A73E8] shadow";
    const composedClassName = `${base} ${baseStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
      <button
        ref={ref}
        className={composedClassName}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
