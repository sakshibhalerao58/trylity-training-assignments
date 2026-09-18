interface Stat {
  value: string;
  label: string;
}

const HeroStats = () => {
  const stats: Stat[] = [
    {
      value: "500+",
      label: "Customers",
    },
    {
      value: "2M+",
      label: "Messages",
    },
    {
      value: "100+",
      label: "Automation Flows",
    },
    {
      value: "99.9%",
      label: "Uptime",
    },
  ];

  return (
    <div className="mt-14 grid grid-cols-2 border-y border-slate-200 py-8 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="px-3 py-3 text-center sm:border-r sm:border-slate-200 last:sm:border-r-0"
        >
          <p className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {stat.value}
          </p>

          <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;