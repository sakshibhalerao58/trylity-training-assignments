export interface NavItemProps {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface HeroButtonProps {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}