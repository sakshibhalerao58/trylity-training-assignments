import HeroBadge from "./HeroBadge";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <main id="home" className="overflow-hidden">
      <section className="relative bg-gradient-to-b from-indigo-50/70 via-white to-white px-5 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="absolute left-0 top-20 -z-0 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="absolute right-0 top-40 -z-0 h-80 w-80 rounded-full bg-purple-200/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <HeroBadge />

              <HeroTitle />

              <HeroDescription />

              <HeroButtons />
            </div>

            <HeroImage />
          </div>

          <HeroStats />
        </div>
      </section>

      <section
        id="features"
        className="bg-white px-5 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Powerful Features
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Everything you need to communicate better
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Automate conversations, connect with customers, and understand your
            business with powerful communication tools.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Smart Automation",
                description:
                  "Create automated communication workflows that save time.",
              },
              {
                title: "WhatsApp Integration",
                description:
                  "Connect with customers through a familiar communication channel.",
              },
              {
                title: "Real-time Analytics",
                description:
                  "Monitor your communication performance with useful insights.",
              },
              {
                title: "Secure & Reliable",
                description:
                  "Keep your business communication reliable and protected.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 font-bold text-indigo-600">
                  ✓
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="h-1" />
      <section id="about" className="h-1" />
      <section id="contact" className="h-1" />
      <section id="login" className="h-1" />
      <section id="get-started" className="h-1" />
    </main>
  );
};

export default Hero;