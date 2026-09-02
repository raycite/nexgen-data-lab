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
      iconColor: "text-[#1168D9]",
    },
    {
      title: "Research",
      description:
        "Supporting research projects, publications, datasets, and ideas that address meaningful problems within African communities.",
      link: "Explore Research →",
      href: "/datasets",
      icon: Search,
      iconColor: "text-[#E96832]",
    },
    {
      title: "Build",
      description:
        "Turning knowledge into practical projects, tools, and solutions that help learners gain real-world experience.",
      link: "See Projects →",
      href: "/projects",
      icon: Code2,
      iconColor: "text-[#1168D9]",
    },
    {
      title: "Connect",
      description:
        "Creating a supportive community where students, researchers, mentors, and professionals can share ideas and grow together.",
      link: "Join the Community →",
      href: "#community",
      icon: UsersRound,
      iconColor: "text-[#E96832]",
    },
  ];

  return (
    <section id="about" className="editorial-grid scroll-mt-16 border-b border-[#071A2D]/10 bg-[#F5F8FA] py-14 sm:py-16">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="grid gap-5 border-b border-[#071A2D]/20 pb-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <p className="eyebrow text-[#1168D9]">
            What We Do
          </p>

          <h2 className="max-w-4xl text-4xl leading-[1.02] text-[#071A2D] sm:text-5xl lg:text-6xl">
            Learn deeply. Test ideas. <span className="italic text-[#1168D9]">Build what matters.</span>
          </h2>

        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative border-b border-[#071A2D]/15 px-0 py-8 sm:px-6 lg:border-b-0 lg:border-r lg:px-7 lg:py-10 first:pl-0 last:border-r-0"
              >
                <span className="absolute right-5 top-5 font-mono text-[10px] tracking-[.15em] text-[#071A2D]/35">0{index + 1}</span>
                <div
                  className="flex h-12 w-12 items-center justify-center border border-[#071A2D]/15 bg-[#FFFDF8] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                >
                  <Icon
                    size={28}
                    strokeWidth={1.9}
                    className={item.iconColor}
                  />
                </div>

                <h3 className="font-display mt-8 text-3xl text-[#071A2D]">
                  {item.title}
                </h3>

                <p className="mt-3 min-h-24 text-sm leading-6 text-[#405064]">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  className="mt-5 inline-flex items-center border-b border-[#071A2D] pb-1 text-xs font-bold uppercase tracking-[.1em] text-[#071A2D] transition hover:border-[#E96832] hover:text-[#E96832]"
                >
                  {item.link}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
