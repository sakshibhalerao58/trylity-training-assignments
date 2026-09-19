import {
  BarChart3,
  Bot,
  MessageCircle,
  Users,
} from "lucide-react";

const stats = [
  {
    value: "500+",
    label: "Happy Customers",
    icon: Users,
    bg: "#eeeaff",
    color: "#6248e8",
  },
  {
    value: "2M+",
    label: "Messages Sent",
    icon: MessageCircle,
    bg: "#e8f9f0",
    color: "#18ad68",
  },
  {
    value: "100+",
    label: "Automation Flows",
    icon: Bot,
    bg: "#fff3df",
    color: "#f2a526",
  },
  {
    value: "99.9%",
    label: "Uptime",
    icon: BarChart3,
    bg: "#edf1ff",
    color: "#426be4",
  },
];

const HeroStats = () => {
  return (
    <div className="grid grid-cols-4 gap-3">

      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="flex h-[62px] items-center gap-3 rounded-[11px] border border-[#e7e7ef] bg-white px-4 shadow-[0_4px_15px_rgba(20,20,50,0.05)]"
          >

            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px]"
              style={{
                backgroundColor: stat.bg,
              }}
            >
              <Icon
                size={18}
                strokeWidth={2}
                style={{
                  color: stat.color,
                }}
              />
            </div>

            <div className="min-w-0">

              <p className="text-[16px] font-bold leading-none text-[#151b2b]">
                {stat.value}
              </p>

              <p className="mt-1.5 whitespace-nowrap text-[10px] font-medium text-[#697386]">
                {stat.label}
              </p>

            </div>

          </div>
        );
      })}

    </div>
  );
};

export default HeroStats;