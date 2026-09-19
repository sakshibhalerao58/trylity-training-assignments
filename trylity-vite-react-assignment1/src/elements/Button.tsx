import type { ButtonProps } from "../types";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg bg-[#5b45e8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4d38d5] disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;