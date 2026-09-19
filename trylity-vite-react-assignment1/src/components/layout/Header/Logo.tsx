import { MessageSquare } from "lucide-react";

const Logo = () => {
  return (
    <a
      href="#home"
      className="flex items-center gap-3"
    >
      <div className="relative flex h-8 w-8 items-center justify-center">

        <MessageSquare
          size={25}
          strokeWidth={3}
          className="text-[#6848e8]"
          fill="#6848e8"
        />

        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#8b72f1]" />

      </div>

      <span className="text-[25px] font-bold tracking-[-0.7px] text-[#111827]">
        TryLity
      </span>
    </a>
  );
};

export default Logo;