interface HeroStat {
  value: string;
  label: string;
  icon:
    | "customers"
    | "messages"
    | "automation"
    | "uptime";
  iconClass: string;
}

const stats: HeroStat[] = [
  {
    value: "500+",
    label: "Happy Customers",
    icon: "customers",
    iconClass: "bg-[#f0edff] text-[#5b45df]",
  },
  {
    value: "2M+",
    label: "Messages Sent",
    icon: "messages",
    iconClass: "bg-[#e8f9f0] text-[#18a957]",
  },
  {
    value: "100+",
    label: "Automation Flows",
    icon: "automation",
    iconClass: "bg-[#fff3df] text-[#f59e0b]",
  },
  {
    value: "99.9%",
    label: "Uptime",
    icon: "uptime",
    iconClass: "bg-[#edf2ff] text-[#3b67df]",
  },
];

function StatIcon({
  type,
}: {
  type: HeroStat["icon"];
}) {
  const common = {
    viewBox: "0 0 24 24",
    className : "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
  };

  if (type === "customers") {
    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />

        <path d="M3.5 19c.7-3.1 2.5-4.7 5.5-4.7s4.8 1.6 5.5 4.7" />

        <path d="M14 14.8c2.8-.4 4.8 1 5.5 4.2" />
      </svg>
    );
  }

  if (type === "messages") {
    return (
      <svg {...common}>
        <path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H11l-4.5 3V17H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />

        <path d="M8 10h8" />
        <path d="M8 13h5" />
      </svg>
    );
  }

  if (type === "automation") {
    return (
      <svg {...common}>
        <rect
          x="5"
          y="7"
          width="14"
          height="11"
          rx="3"
        />

        <path d="M9 7V4h6v3" />

        <circle
          cx="9"
          cy="12"
          r="0.5"
          fill="currentColor"
        />

        <circle
          cx="15"
          cy="12"
          r="0.5"
          fill="currentColor"
        />

        <path d="M9 15h6" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        d="M5 19V10M12 19V5M19 19v-7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeroStats() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <article
          key={stat.label}
          className="flex h-[82px] items-center gap-4 rounded-[10px] border border-[#e7e8ee] bg-white px-6 shadow-[0_3px_12px_rgba(15,23,42,0.02)]"
        >
          <div
            className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full ${stat.iconClass}`}
          >
            <StatIcon type={stat.icon} />
          </div>

          <div>
            <p className="text-[22px] font-bold tracking-[-0.025em] text-[#10172b]">
              {stat.value}
            </p>

            <p className="mt-1 text-[14px] text-[#596477]">
              {stat.label}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default HeroStats;