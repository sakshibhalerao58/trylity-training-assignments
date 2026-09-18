import {
  Home,
  MessageSquare,
  Users,
  Bot,
  Settings,
  UserRound,
  ChevronDown,
  TrendingUp,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  percentage: string;
}

const metrics: MetricCardProps[] = [
  {
    title: "Total Messages",
    value: "12,540",
    percentage: "12.5%",
  },
  {
    title: "Active Contacts",
    value: "1,250",
    percentage: "8.2%",
  },
  {
    title: "Response Rate",
    value: "85.6%",
    percentage: "15.3%",
  },
  {
    title: "Automation",
    value: "32",
    percentage: "11.1%",
  },
];

const chats = [
  {
    name: "Rahul Sharma",
    message: "Hi, I need more information...",
    time: "10:30 AM",
    color: "bg-[#55b89a]",
    notification: "2",
  },
  {
    name: "Priya Patel",
    message: "Thanks! It was helpful.",
    time: "09:15 AM",
    color: "bg-[#7b6ce8]",
  },
  {
    name: "Amit Verma",
    message: "When will it be delivered?",
    time: "Yesterday",
    color: "bg-[#d19b75]",
    notification: "1",
  },
  {
    name: "Sneha Kapoor",
    message: "Great support!",
    time: "Yesterday",
    color: "bg-[#c68ca5]",
  },
];

function MetricCard({
  title,
  value,
  percentage,
}: MetricCardProps) {
  return (
    <div className="rounded-[8px] border border-[#edf0f5] bg-white px-3 py-3 shadow-sm">
      <p className="text-[8px] font-medium text-[#8b93a4]">
        {title}
      </p>

      <p className="mt-1.5 text-[15px] font-bold text-[#151c2f]">
        {value}
      </p>

      <div className="mt-1 flex items-center gap-1 text-[8px] font-semibold text-[#20a968]">
        <TrendingUp className="h-2.5 w-2.5" />
        {percentage}
      </div>
    </div>
  );
}

function Chart() {
  return (
    <div className="relative mt-3 h-[112px]">
      {/* Grid */}
      <div className="absolute inset-x-0 top-0 border-t border-[#eef0f5]" />
      <div className="absolute inset-x-0 top-[25%] border-t border-[#eef0f5]" />
      <div className="absolute inset-x-0 top-[50%] border-t border-[#eef0f5]" />
      <div className="absolute inset-x-0 top-[75%] border-t border-[#eef0f5]" />
      <div className="absolute inset-x-0 bottom-0 border-t border-[#eef0f5]" />

      {/* Y labels */}
      <span className="absolute -left-1 top-[-4px] -translate-x-full text-[7px] text-[#8c94a3]">
        8K
      </span>

      <span className="absolute -left-1 top-[25px] -translate-x-full text-[7px] text-[#8c94a3]">
        6K
      </span>

      <span className="absolute -left-1 top-[53px] -translate-x-full text-[7px] text-[#8c94a3]">
        4K
      </span>

      <span className="absolute -left-1 top-[81px] -translate-x-full text-[7px] text-[#8c94a3]">
        2K
      </span>

      <span className="absolute -left-1 bottom-[-2px] -translate-x-full text-[7px] text-[#8c94a3]">
        0
      </span>

      <svg
        viewBox="0 0 600 112"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient
            id="chartGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#6954e5"
              stopOpacity="0.16"
            />

            <stop
              offset="100%"
              stopColor="#6954e5"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        <path
          d="
            M 5 93
            C 35 73, 55 49, 88 45
            C 112 42, 130 58, 155 54
            C 185 48, 203 19, 235 19
            C 265 19, 280 46, 315 51
            C 345 57, 365 37, 395 28
            C 425 21, 438 45, 468 48
            C 500 51, 515 17, 545 8
            C 565 3, 580 9, 595 0
            L 595 112
            L 5 112
            Z
          "
          fill="url(#chartGradient)"
        />

        <path
          d="
            M 5 93
            C 35 73, 55 49, 88 45
            C 112 42, 130 58, 155 54
            C 185 48, 203 19, 235 19
            C 265 19, 280 46, 315 51
            C 345 57, 365 37, 395 28
            C 425 21, 438 45, 468 48
            C 500 51, 515 17, 545 8
            C 565 3, 580 9, 595 0
          "
          fill="none"
          stroke="#5b45df"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <circle
          cx="235"
          cy="19"
          r="3"
          fill="white"
          stroke="#5b45df"
          strokeWidth="2"
        />

        <circle
          cx="395"
          cy="28"
          r="3"
          fill="white"
          stroke="#5b45df"
          strokeWidth="2"
        />
      </svg>

      {/* X labels */}
      <div className="absolute -bottom-4 left-0 right-0 flex justify-between text-[7px] text-[#8c94a3]">
        <span>May 20</span>
        <span>May 21</span>
        <span>May 22</span>
        <span>May 23</span>
        <span>May 24</span>
        <span>May 25</span>
        <span>May 26</span>
      </div>
    </div>
  );
}

function RecentChats() {
  return (
    <div className="rounded-[8px] border border-[#edf0f5] bg-white p-3">
      <div className="flex items-center justify-between">
        <h3 className="text-[10px] font-bold text-[#151c2f]">
          Recent Chats
        </h3>

        <span className="text-[7px] text-[#667085]">
          View All
        </span>
      </div>

      <div className="mt-3 space-y-3">
        {chats.map((chat) => (
          <div
            key={chat.name}
            className="flex items-center gap-2"
          >
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${chat.color}`}
            >
              <UserRound className="h-3.5 w-3.5 text-white" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex justify-between gap-1">
                <p className="truncate text-[8px] font-semibold text-[#20283a]">
                  {chat.name}
                </p>

                <span className="shrink-0 text-[7px] text-[#9ba1ad]">
                  {chat.time}
                </span>
              </div>

              <div className="flex justify-between gap-1">
                <p className="truncate text-[7px] text-[#7d8595]">
                  {chat.message}
                </p>

                {chat.notification && (
                  <span className="flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-[#42bf77] px-1 text-[7px] font-bold text-white">
                    {chat.notification}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardIcon({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-[8px] ${
        active
          ? "bg-[#eeeaff] text-[#5b45df]"
          : "text-[#8a91a2]"
      }`}
    >
      {children}
    </div>
  );
}

function HeroImage() {
  return (
    <div className="relative w-full">
      {/* Glow */}
      <div className="absolute -inset-6 rounded-[35px] bg-[#e7e2ff]/50 blur-3xl" />

      <div className="relative overflow-hidden rounded-[14px] border border-[#e5e7ef] bg-white shadow-[0_12px_35px_rgba(70,55,170,0.09)]">
        <div className="flex h-[300px]">
          {/* Sidebar */}
          <aside className="w-[48px] shrink-0 border-r border-[#edf0f4] bg-white px-2.5 py-3">
            {/* Logo */}
            <div className="mb-5 flex justify-center">
              <div className="relative h-6 w-6">
                <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-[4px] bg-[#5b45df]" />

                <div className="absolute right-0 top-0 h-3.5 w-3.5 rounded-[4px] bg-[#8876e7]" />
              </div>
            </div>

            <div className="space-y-1.5">
              <DashboardIcon active>
                <Home className="h-4 w-4" />
              </DashboardIcon>

              <DashboardIcon>
                <MessageSquare className="h-4 w-4" />
              </DashboardIcon>

              <DashboardIcon>
                <Users className="h-4 w-4" />
              </DashboardIcon>

              <DashboardIcon>
                <Bot className="h-4 w-4" />
              </DashboardIcon>

              <DashboardIcon>
                <Settings className="h-4 w-4" />
              </DashboardIcon>
            </div>
          </aside>

          {/* Main dashboard */}
          <div className="min-w-0 flex-1 bg-[#fafbfe] p-2.5">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-[12px] font-bold text-[#151c2f]">
                Dashboard
              </h2>

              <div className="flex items-center gap-2">
                <button className="flex h-6 items-center gap-1 rounded-md border border-[#e5e8ee] bg-white px-2 text-[7px] text-[#566174]">
                  May 20 - May 26
                  <ChevronDown className="h-2.5 w-2.5" />
                </button>

                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e8eaf0]">
                  <UserRound className="h-3.5 w-3.5 text-[#7e8697]" />
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-2 grid grid-cols-2 gap-1.5 xl:grid-cols-4">
              {metrics.map((metric) => (
                <MetricCard
                  key={metric.title}
                  {...metric}
                />
              ))}
            </div>

            {/* Bottom */}
            <div className="mt-1.5 grid gap-1.5 xl:grid-cols-[1.35fr_0.75fr]">
              {/* Chart */}
              <div className="rounded-[8px] border border-[#edf0f5] bg-white p-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-[10px] font-bold text-[#151c2f]">
                    Messages Overview
                  </h3>

                  <button className="flex items-center gap-1 rounded-md border border-[#edf0f5] px-1.5 py-1 text-[7px] text-[#667085]">
                    This Week
                    <ChevronDown className="h-2 w-2" />
                  </button>
                </div>

                <div className="ml-5 mr-1">
                  <Chart />
                </div>
              </div>

              {/* Chats */}
              <RecentChats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;