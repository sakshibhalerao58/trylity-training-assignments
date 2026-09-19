import type { CardProps } from "../types";

const Card = ({
  title,
  description,
  icon,
  className = "",
  buttonText,
  onButtonClick,
}: CardProps) => {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}
    >
      {icon && <div className="mb-4">{icon}</div>}

      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        {description}
      </p>

      {buttonText && (
        <button
          type="button"
          onClick={onButtonClick}
          className="mt-5 rounded-lg bg-[#5b45e8] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4d38d5]"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;