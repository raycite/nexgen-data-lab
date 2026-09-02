import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, Microscope, Users } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about NextGen Data Lab's mission, story, team, and ways to participate in our AI and data science community.",
  alternates: { canonical: "/about" },
};

const team = [
  {
    name: "Raymond Ntow",
    role: "Founder",
    image: "/team-raymond-ntow.png",
    initials: "RN",
    linkedin: "https://gh.linkedin.com/in/raymond-ntow-b06a6a216",
    bio: "Raymond is a data and AI practitioner interested in mathematics, machine learning and computer vision. He studied Mathematics at KNUST and currently works at EY in Accra.",
    contribution: "He leads the Lab's strategy, research, technical projects and mentorship programmes.",
  },
  {
    name: "Jacinta Amoawah Esi Badu",
    role: "Co-founder",
    initials: "JB",
    linkedin: "https://www.linkedin.com/in/jacinta-badu/",
    bio: "Jacinta is a technology professional interested in software development, data analysis and machine learning. She holds a Computer Engineering degree from Ashesi University and currently works at EY.",
    contribution: "She supports strategy, partnerships, programme development and community activities.",
  },
  {
    name: "Emmanuel Agyapong",
    role: "Program Coordinator",
    initials: "EA",
    linkedin: "https://www.linkedin.com/in/emmanuel-agyapong-997a11268/",
    bio: "Emmanuel is an emerging data and AI practitioner interested in statistics, machine learning and predictive modelling. He is preparing to pursue a master's degree in AI for Business at the University of Arizona.",
    contribution: "He coordinates workshops, mentorship activities, participants, facilitators and programme resources.",
  },
];

const participation = [
  { Icon: GraduationCap, title: "Students", text: "Learn practical skills through workshops, shared resources, mentorship and collaborative projects. Work with real data and build portfolio projects that demonstrate your growth." },
  { Icon: Microscope, title: "Researchers", text: "Collaborate on interdisciplinary studies, contribute responsibly collected datasets, share research methods and connect with support for analysis, modelling and communication." },
  { Icon: Building2, title: "Organisations", text: "Propose real-world challenges, support technical training, share responsibly collected data or create opportunities for members to gain practical experience." },
  { Icon: Users, title: "Partners", text: "Universities, research institutions, technology companies and nonprofits can support programmes, mentorship, infrastructure and responsible African dataset development." },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="relative min-h-[430px] overflow-hidden bg-[#03111F] text-white sm:min-h-[500px]">
        <Image
          src="/about-nextgen-community.jpeg"
          alt="Members of Ghana's technology community gathering at an event"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,17,31,.96)_0%,rgba(3,17,31,.82)_42%,rgba(3,17,31,.34)_78%,rgba(3,17,31,.52)_100%),linear-gradient(0deg,rgba(3,17,31,.48),transparent_60%)]" />
        <div className="editorial-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto flex min-h-[430px] max-w-[90rem] items-center px-4 py-16 sm:min-h-[500px] sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#F0A07C]">About NextGen Data Lab</p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.02] sm:text-6xl lg:text-[72px]">Learning together.<br />Building for our context.</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">A community helping students and researchers turn curiosity in mathematics, data and AI into practical skills, useful research and shared progress.</p>
          </div>
        </div>
      </section>

      <section className="editorial-grid bg-[#FFFDF8] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-xl pb-7 pr-5 sm:pb-9 sm:pr-8">
            <div className="absolute inset-x-5 inset-y-0 rounded-[2rem] bg-gradient-to-br from-[#E96832]/25 via-[#E96832]/8 to-[#1168D9]/20" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] border border-[#071A2D]/10 bg-[#071A2D] shadow-[0_24px_60px_rgba(7,26,45,.16)]">
              <Image src="/about-nextgen-community.jpeg" alt="A gathering of learners and technology practitioners in Ghana" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03111F]/55 via-transparent to-[#1168D9]/10" />
            </div>
            <div className="absolute bottom-0 right-0 rounded-2xl bg-[#071A2D] px-5 py-4 text-white shadow-xl sm:px-7 sm:py-5">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#F0A07C]">Our approach</p>
              <p className="mt-1 text-lg font-semibold">Learn · Build · Share</p>
            </div>
          </div>

          <div>
            <p className="eyebrow text-[#E96832]">Our mission</p>
            <h2 className="mt-5 text-4xl leading-[1.05] text-[#071A2D] sm:text-5xl">Make technical learning accessible, practical and relevant.</h2>
            <p className="mt-6 text-base leading-8 text-[#405064]">We make AI, mathematics and data science easier to understand through practical learning, mentorship, collaborative research and responsibly developed African datasets.</p>
            <p className="mt-4 text-base leading-8 text-[#405064]">NextGen Data Lab began with a simple belief: learning should lead beyond courses and certificates. It should give people the confidence to investigate real problems, work with real data and create something useful.</p>
            <div className="mt-7 border-l-4 border-[#E96832] bg-white px-5 py-4 shadow-[0_12px_35px_rgba(7,26,45,.08)]">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#1168D9]">The problem we are addressing</p>
              <p className="mt-2 leading-7 text-slate-700">Talent is everywhere, but access to practical training, mentorship, meaningful projects and representative African data is not.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F8FC] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1264E8]">Meet the team</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">The people behind the initiative</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#071A3A] to-[#1264E8] sm:h-72 md:h-56 lg:h-64">
                  {member.image ? (
                    <Image src={member.image} alt={`${member.name}, ${member.role} at NextGen Data Lab`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" />
                  ) : (
                    <div className="flex h-full items-center justify-center" aria-label={`${member.name} photo placeholder`}>
                      <span className="flex h-28 w-28 items-center justify-center rounded-full border border-white/30 bg-white/10 text-4xl font-bold text-white shadow-xl backdrop-blur">{member.initials}</span>
                    </div>
                  )}
                  <span className="absolute bottom-4 left-4 rounded-full bg-[#E96832] px-3 py-1.5 text-xs font-bold text-white shadow">{member.role}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold leading-tight">{member.name}</h3>
                    <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1264E8] transition hover:bg-[#1264E8] hover:text-white"><LinkedInMark /></a>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{member.bio}</p>
                  <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-6 text-slate-600">{member.contribution}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1264E8]">How to participate</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">There is a place for you here</h2>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {participation.map(({ Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1264E8]"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold">For {title.toLowerCase()}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl bg-[#00102B] p-8 text-white sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#E96832]">Join the community</p><h2 className="mt-3 text-3xl font-bold">Learn, contribute and build with us.</h2><p className="mt-4 leading-7 text-slate-300">Help create data-driven solutions that reflect the people and communities they are intended to serve.</p></div>
          <Link href="/join" className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl bg-[#E96832] px-6 font-semibold text-white transition hover:bg-[#C95327]">Join NextGen Data Lab <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.25H3V21h3.5V8.25ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM13 8.25H9.65V21H13v-6.7c0-1.77.34-3.48 2.53-3.48 2.16 0 2.19 2.02 2.19 3.6V21H21v-7.42c0-3.64-.78-6.44-5.04-6.44A4.4 4.4 0 0 0 12.04 9.3H12V8.25Z" />
    </svg>
  );
}
