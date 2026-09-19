import {
  Zap,
  MessageCircle,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Smart Automation",
    description:
      "Automate repetitive tasks and conversations with intelligent workflows.",
    iconBg: "bg-[#eeeaff]",
    iconColor: "text-[#6248e8]",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description:
      "Connect with customers directly on WhatsApp and communicate faster.",
    iconBg: "bg-[#e8f9f0]",
    iconColor: "text-[#18ad68]",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Track conversations, engagement, and performance with useful insights.",
    iconBg: "bg-[#edf1ff]",
    iconColor: "text-[#426be4]",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Keep your business communication protected and reliable.",
    iconBg: "bg-[#fff0f5]",
    iconColor: "text-[#e75b91]",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="h-[36%] border-t border-[#ececf1] bg-white"
    >
      <div className="mx-auto flex h-full max-w-[1450px] flex-col px-8 py-5 lg:px-12 xl:px-16">

        {/* Heading */}
        <div className="shrink-0 text-center">

          <p className="text-[10px] font-bold uppercase tracking-[2.2px] text-[#694be9]">
            WHY CHOOSE TRY LITY
          </p>

          <h2 className="mt-1.5 text-[24px] font-bold tracking-[-0.7px] text-[#10172a]">
            Everything You Need
          </h2>

          <p className="mt-1 text-[11px] text-[#697386]">
            Powerful tools to grow your business.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-4 grid min-h-0 flex-1 grid-cols-4 gap-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex items-center gap-4 rounded-[13px] border border-[#e8e8ef] bg-white px-5 py-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(30,25,70,0.07)]"
              >

                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] ${feature.iconBg}`}
                >
                  <Icon
                    size={20}
                    strokeWidth={2}
                    className={feature.iconColor}
                  />
                </div>

                <div className="min-w-0">

                  <h3 className="text-[12px] font-bold leading-5 text-[#151b2b]">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-[9px] leading-[1.55] text-[#697386]">
                    {feature.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Features;