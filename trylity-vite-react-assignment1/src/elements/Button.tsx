import type { ButtonProps } from "../types";

const Button = ({
  text,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="button"
    >
      {text}
    </button>
  );
};

export default Button;