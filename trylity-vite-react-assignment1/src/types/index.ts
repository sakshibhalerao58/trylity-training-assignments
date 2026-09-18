export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}