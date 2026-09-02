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

      <section className="relative overflow-hidden bg-[#00102B] px-4 py-14 text-white sm:px-6 sm:py-16">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#D66135]/12 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D66135]">About NextGen Data Lab</p>
          <h1 className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">Practical AI and data science learning for African communities.</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">We bring students, researchers and professionals together to learn, receive mentorship, conduct research and build useful projects. We also support responsible datasets that better represent African people and contexts.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm font-medium text-slate-200">
            {['Practical training', 'Mentorship', 'Research', 'African datasets'].map((item) => <span key={item} className="rounded-full border border-white/15 bg-white/5 px-4 py-2">{item}</span>)}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="rounded-2xl bg-[#1264E8] p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">Our mission</p>
            <h2 className="mt-3 text-xl font-bold sm:text-2xl">Make technical learning accessible and relevant.</h2>
            <p className="mt-3 leading-7 text-blue-50">We make AI, mathematics and data science more accessible through practical learning, mentorship, collaborative research and responsible African datasets.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D66135]">The problem</p>
            <h2 className="mt-3 text-xl font-bold sm:text-2xl">Talent exists. Access and representation still lag behind.</h2>
            <p className="mt-3 leading-7 text-slate-600">Many aspiring practitioners lack practical training, mentors, quality datasets and meaningful projects. Limited African representation in AI data also makes many technologies less relevant locally.</p>
          </article>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1264E8]">Our story</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">From learning concepts to creating something useful</h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
            <p>NextGen Data Lab began with a simple idea: learning data science and AI should lead to more than completing courses or collecting certificates. It should give people the confidence and opportunity to investigate real problems, work with real data and create something useful.</p>
            <p>Practical experiences across AI, computer vision, environmental research and data analysis revealed both the potential of data-driven research and the barriers preventing many emerging researchers from participating. The Lab was created to make that journey more accessible, collaborative and relevant to African communities.</p>
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
                  <span className="absolute bottom-4 left-4 rounded-full bg-[#D66135] px-3 py-1.5 text-xs font-bold text-white shadow">{member.role}</span>
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
          <div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#D66135]">Join the community</p><h2 className="mt-3 text-3xl font-bold">Learn, contribute and build with us.</h2><p className="mt-4 leading-7 text-slate-300">Help create data-driven solutions that reflect the people and communities they are intended to serve.</p></div>
          <Link href="/join" className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-[#D66135] px-6 font-semibold text-white transition hover:bg-[#B94F29]">Join NextGen Data Lab <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
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
