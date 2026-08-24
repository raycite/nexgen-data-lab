import {
  GraduationCap,
  Search,
  Code2,
  UsersRound,
} from "lucide-react";

export default function WhatWeDo() {
  const items = [
    {
      title: "Learn",
      description:
        "Practical learning resources, tutorials, workshops, and training in AI, data science, programming, and mathematics.",
      link: "Explore Learning →",
      href: "/programs",
      icon: GraduationCap,
      iconColor: "text-[#168BFF]",
      iconBg: "bg-blue-50",
      linkColor: "text-[#168BFF]",
    },
    {
      title: "Research",
      description:
        "Supporting research projects, publications, datasets, and ideas that address meaningful problems within African communities.",
      link: "Explore Research →",
      href: "/datasets",
      icon: Search,
      iconColor: "text-[#FF6500]",
      iconBg: "bg-orange-50",
      linkColor: "text-[#FF6500]",
    },
    {
      title: "Build",
      description:
        "Turning knowledge into practical projects, tools, and solutions that help learners gain real-world experience.",
      link: "See Projects →",
      href: "/projects",
      icon: Code2,
      iconColor: "text-[#168BFF]",
      iconBg: "bg-blue-50",
      linkColor: "text-[#168BFF]",
    },
    {
      title: "Connect",
      description:
        "Creating a supportive community where students, researchers, mentors, and professionals can share ideas and grow together.",
      link: "Join the Community →",
      href: "#community",
      icon: UsersRound,
      iconColor: "text-[#FF6500]",
      iconBg: "bg-orange-50",
      linkColor: "text-[#FF6500]",
    },
  ];

  return (
    <section id="about" className="scroll-mt-16 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#168BFF]">
            What We Do
          </p>

          <h2 className="mx-auto mt-2 max-w-3xl text-2xl font-bold text-slate-900 sm:text-3xl">
            Building skills. Advancing research. Creating impact.
          </h2>

        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${item.iconBg}`}
                >
                  <Icon
                    size={28}
                    strokeWidth={1.9}
                    className={item.iconColor}
                  />
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  className={`mt-4 inline-flex items-center text-sm font-semibold transition hover:opacity-80 ${item.linkColor}`}
                >
                  {item.link}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
