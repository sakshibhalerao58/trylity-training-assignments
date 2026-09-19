import { Sparkles } from "lucide-react";

const HeroBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#e9e2ff] bg-[#f7f4ff] px-4 py-2 text-[12px] font-medium text-[#795eea]">
      <Sparkles
        size={14}
        strokeWidth={3}
      />

      <span>Smart Communication Platform</span>
    </div>
  );
};

export default HeroBadge;