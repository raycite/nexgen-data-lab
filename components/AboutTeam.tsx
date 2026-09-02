"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, X } from "lucide-react";

const team = [
  {
    name: "Raymond Ntow",
    role: "Founder",
    image: "/team-raymond-ntow.png",
    initials: "RN",
    linkedin: "https://gh.linkedin.com/in/raymond-ntow-b06a6a216",
    bio: "Raymond is a data and AI practitioner interested in mathematics, machine learning and computer vision. He studied Mathematics at KNUST and currently works at EY in Accra.",
    contribution: "As Founder, he leads NextGen Data Lab's strategy, research direction, technical projects and mentorship programmes.",
  },
  {
    name: "Jacinta Amoawah Esi Badu",
    role: "Co-founder",
    image: undefined,
    initials: "JB",
    linkedin: "https://www.linkedin.com/in/jacinta-badu/",
    bio: "Jacinta is a technology professional interested in software development, data analysis and machine learning. She holds a Computer Engineering degree from Ashesi University and currently works at EY.",
    contribution: "As Co-founder, she supports strategy, partnerships, programme development and community activities.",
  },
  {
    name: "Emmanuel Agyapong",
    role: "Program Coordinator",
    image: undefined,
    initials: "EA",
    linkedin: "https://www.linkedin.com/in/emmanuel-agyapong-997a11268/",
    bio: "Emmanuel is an emerging data and AI practitioner interested in statistics, machine learning and predictive modelling. He is preparing to pursue a master's degree in AI for Business at the University of Arizona.",
    contribution: "As Program Coordinator, he coordinates workshops, mentorship activities, participants, facilitators and programme resources.",
  },
];

type TeamMember = (typeof team)[number];

export default function AboutTeam() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  useEffect(() => {
    if (!selected) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);

  return (
    <section className="bg-[#F5F8FC] px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-[#E96832]">Our team</p>
          <h2 className="mt-4 text-4xl text-[#071A2D] sm:text-5xl">Meet the people behind the Lab</h2>
          <p className="mt-4 leading-7 text-[#405064]">A small team bringing together research, technology and community-building.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="group rounded-[1.75rem] border border-[#DCE7F4] bg-white px-6 py-8 text-center shadow-[0_14px_40px_rgba(7,26,45,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(7,26,45,.13)]">
              <div className="relative mx-auto h-36 w-36">
                <div className="relative h-full w-full overflow-hidden rounded-full border-[5px] border-[#D7E0EC] bg-gradient-to-br from-[#071A2D] to-[#1168D9]">
                  {member.image ? (
                    <Image src={member.image} alt={`${member.name}, ${member.role} at NextGen Data Lab`} fill sizes="144px" className="object-cover object-top" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-4xl font-bold text-white" aria-label={`${member.name} photo placeholder`}>{member.initials}</div>
                  )}
                </div>
                <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`} className="absolute -bottom-1 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-[#071A2D] text-white transition hover:bg-[#1168D9]"><LinkedInMark /></a>
              </div>

              <h3 className="mt-7 text-xl font-bold leading-tight text-[#071A2D]">{member.name}</h3>
              <p className="mt-2 font-semibold text-[#E96832]">{member.role}</p>
              <button type="button" onClick={() => setSelected(member)} className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#071A2D] px-5 text-sm font-bold text-white transition hover:bg-[#1168D9]">
                Read profile <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
      </div>

      {selected && createPortal((
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#00102B]/92 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="team-dialog-title" className="relative grid max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl md:grid-cols-[.42fr_.58fr]">
            <button type="button" onClick={() => setSelected(null)} className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#E96832] shadow-md transition hover:bg-[#FFF1EB]" aria-label="Close profile"><X className="h-6 w-6" aria-hidden="true" /></button>

            <div className="flex flex-col items-center justify-center bg-[#F5F8FC] px-6 py-12 text-center sm:px-10">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-[6px] border-white bg-gradient-to-br from-[#071A2D] to-[#1168D9] shadow-xl sm:h-56 sm:w-56">
                {selected.image ? (
                  <Image src={selected.image} alt={`${selected.name}, ${selected.role}`} fill sizes="224px" className="object-cover object-top" />
                ) : (
                  <div className="flex h-full items-center justify-center text-5xl font-bold text-white">{selected.initials}</div>
                )}
              </div>
              <h3 id="team-dialog-title" className="mt-7 text-2xl font-bold text-[#071A2D]">{selected.name}</h3>
              <p className="mt-2 text-lg font-semibold text-[#E96832]">{selected.role}</p>
              <a href={selected.linkedin} target="_blank" rel="noreferrer" className="mt-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE7F4] bg-white text-[#1168D9] transition hover:bg-[#1168D9] hover:text-white" aria-label={`${selected.name} on LinkedIn`}><LinkedInMark /></a>
            </div>

            <div className="px-6 py-12 sm:px-10 md:py-16">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#1168D9]">Biography</p>
              <p className="mt-6 text-base leading-8 text-[#405064] sm:text-lg">{selected.bio}</p>
              <div className="mt-8 border-l-4 border-[#E96832] bg-[#F5F8FC] px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-[.16em] text-[#071A2D]">Role at NextGen</p>
                <p className="mt-2 leading-7 text-[#405064]">{selected.contribution}</p>
              </div>
            </div>
          </section>
        </div>
      ), document.body)}
    </section>
  );
}

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.25H3V21h3.5V8.25ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM13 8.25H9.65V21H13v-6.7c0-1.77.34-3.48 2.53-3.48 2.16 0 2.19 2.02 2.19 3.6V21H21v-7.42c0-3.64-.78-6.44-5.04-6.44A4.4 4.4 0 0 0 12.04 9.3H12V8.25Z" />
    </svg>
  );
}
