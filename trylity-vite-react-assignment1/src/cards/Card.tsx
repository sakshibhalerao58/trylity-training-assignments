import Button from "../elements/Button";
import type { CardProps } from "../types";

const Card = ({
  title,
  description,
  buttonText,
  onButtonClick,
}: CardProps) => {
  return (
    <div className="card">
      <h2>{title}</h2>

      <p>{description}</p>

      <Button
        text={buttonText}
        onClick={onButtonClick}
      />
    </div>
  );
};

export default Card;