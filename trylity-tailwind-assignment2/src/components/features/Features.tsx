interface Feature {
  title: string;
  description: string;
  icon: "automation" | "whatsapp" | "analytics" | "security";
  iconClass: string;
}

const features: Feature[] = [
  {
    title: "Smart Automation",
    description:
      "Automate repetitive tasks and save valuable time.",
    icon: "automation",
    iconClass: "bg-[#f0edff] text-[#5b45df]",
  },
  {
    title: "WhatsApp Integration",
    description:
      "Seamless WhatsApp Business API integration.",
    icon: "whatsapp",
    iconClass: "bg-[#e8f9f0] text-[#18a957]",
  },
  {
    title: "Real-time Analytics",
    description:
      "Track performance and improve with real-time insights.",
    icon: "analytics",
    iconClass: "bg-[#edf2ff] text-[#3b67df]",
  },
  {
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security and 99.9% uptime guarantee.",
    icon: "security",
    iconClass: "bg-[#fff0f4] text-[#ec5c83]",
  },
];

function FeatureIcon({
  type,
}: {
  type: Feature["icon"];
}) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
  };

  if (type === "automation") {
    return (
      <svg {...common}>
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg {...common}>
        <path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H11l-4.5 3V17H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
        <path d="M8 10h8M8 13h5" />
      </svg>
    );
  }

  if (type === "analytics") {
    return (
      <svg {...common}>
        <path
          d="M5 20V11M12 20V5M19 20V9"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 3 20 6v5c0 5.2-3.4 8.5-8 10-4.6-1.5-8-4.8-8-10V6l8-3Z" />
      <path d="m8.5 12 2.3 2.3 4.7-5" />
    </svg>
  );
}

function Features() {
  return (
    <section
      id="features"
      className="border-t border-[#f0f0f3] bg-white"
    >
      <div className="mx-auto max-w-[1376px] px-6 py-5 lg:px-10 lg:py-5">

        {/* Heading */}
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#715bd8]">
            WHY CHOOSE TRYLITY
          </p>

          <h2 className="mt-1 text-[22px] font-bold tracking-[-0.025em] text-[#10172b]">
            Everything You Need to Succeed
          </h2>
        </div>

        {/* Features */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`flex gap-4 px-4 py-2 lg:px-5 ${
                index !== 0
                  ? "border-t border-slate-100 sm:border-t-0 sm:border-l"
                  : ""
              }`}
            >

              <div
                className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[12px] ${feature.iconClass}`}
              >
                <FeatureIcon type={feature.icon} />
              </div>

              <div>
                <h3 className="text-[13px] font-bold text-[#10172b]">
                  {feature.title}
                </h3>

                <p className="mt-1 text-[11px] leading-[1.5] text-[#596477]">
                  {feature.description}
                </p>
              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;