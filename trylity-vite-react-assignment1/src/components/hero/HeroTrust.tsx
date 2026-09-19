import { CircleCheck } from "lucide-react";

const trustItems = [
  "14-Day Free Trial",
  "No Credit Card",
  "Easy Setup",
];

const HeroTrust = () => {
  return (
    <div className="flex items-center gap-5">

      {trustItems.map((item) => (
        <div
          key={item}
          className="flex items-center gap-1.5 text-[11px] font-medium text-[#697386]"
        >
          <CircleCheck
            size={14}
            strokeWidth={2.2}
            className="text-[#5b45e8]"
          />

          <span>{item}</span>
        </div>
      ))}

    </div>
  );
};

export default HeroTrust;