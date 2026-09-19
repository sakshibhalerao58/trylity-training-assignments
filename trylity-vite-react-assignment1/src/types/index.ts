import type React from "react";

export interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

export interface NavItemProps {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}
