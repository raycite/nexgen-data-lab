import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Eye, GraduationCap, Microscope, Users, Zap } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutTeam from "@/components/AboutTeam";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about NextGen Data Lab's mission, story, team, and ways to participate in our AI and data science community.",
  alternates: { canonical: "/about" },
};

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

      <section className="relative min-h-[320px] overflow-hidden bg-[#03111F] text-white sm:min-h-[360px]">
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
        <div className="relative mx-auto flex min-h-[320px] max-w-[90rem] items-center px-4 py-10 sm:min-h-[360px] sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#F0A07C]">About NextGen Data Lab</p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-[1.02] sm:text-5xl lg:text-[60px]">Learning together.<br />Building for our context.</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">A community helping students and researchers turn curiosity in mathematics, data and AI into practical skills, useful research and shared progress.</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-xl pb-7 pr-5 sm:pb-9 sm:pr-8">
            <div className="absolute inset-x-5 inset-y-0 rounded-[2rem] bg-gradient-to-br from-[#E96832]/25 via-[#E96832]/8 to-[#1168D9]/20" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] border border-[#071A2D]/10 bg-[#071A2D] shadow-[0_24px_60px_rgba(7,26,45,.16)]">
              <Image src="/about-story-collaboration.png" alt="African students and researchers collaborating around data, mathematics and agricultural research" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03111F]/55 via-transparent to-[#1168D9]/10" />
            </div>
            <div className="absolute bottom-0 right-0 rounded-2xl bg-[#071A2D] px-5 py-4 text-white shadow-xl sm:px-7 sm:py-5">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#F0A07C]">Our approach</p>
              <p className="mt-1 text-lg font-semibold">Learn · Build · Share</p>
            </div>
          </div>

          <div>
            <p className="eyebrow text-[#E96832]">Our story</p>
            <h2 className="mt-5 text-4xl leading-[1.05] text-[#071A2D] sm:text-5xl">From learning concepts to creating something useful.</h2>
            <p className="mt-4 text-base leading-8 text-[#405064]">NextGen Data Lab began with a simple belief: learning should lead beyond courses and certificates. It should give people the confidence to investigate real problems, work with real data and create something useful.</p>
            <p className="mt-4 text-base leading-8 text-[#405064]">Experiences across computer vision, environmental research and data analysis showed both the potential of data-driven work and the barriers that keep many emerging researchers from participating. The Lab grew from a desire to make that journey more accessible, collaborative and relevant to African communities.</p>
            <div className="mt-7 border-l-4 border-[#E96832] bg-white px-5 py-4 shadow-[0_12px_35px_rgba(7,26,45,.08)]">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#1168D9]">The problem we are addressing</p>
              <p className="mt-2 leading-7 text-slate-700">Talent is everywhere, but access to practical training, mentorship, meaningful projects and representative African data is not.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F5F8FC] px-4 py-12 sm:px-6 sm:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(17,104,217,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(17,104,217,.055)_1px,transparent_1px)] [background-size:46px_46px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <p className="eyebrow text-[#E96832]">What drives us</p>
            <h2 className="mt-4 text-4xl text-[#071A2D] sm:text-5xl">Vision &amp; Mission</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="relative rounded-[2rem] border border-[#DCE7F4] bg-white px-6 py-8 shadow-[0_18px_50px_rgba(7,26,45,.09)] sm:px-9 sm:py-10">
              <div className="absolute -top-5 left-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E96832] text-white shadow-lg"><Eye className="h-8 w-8" aria-hidden="true" /></div>
              <div className="border-l-4 border-[#E96832] pl-5 pt-12 sm:pl-7">
                <h3 className="text-2xl font-bold text-[#071A2D]">Our Vision</h3>
                <p className="mt-5 text-lg leading-8 text-[#405064]">An Africa where students and researchers have the knowledge, support and locally relevant data to use AI and data science confidently, responsibly and for meaningful change.</p>
              </div>
            </article>

            <article className="relative rounded-[2rem] border border-[#DCE7F4] bg-white px-6 py-8 shadow-[0_18px_50px_rgba(7,26,45,.09)] sm:px-9 sm:py-10">
              <div className="absolute -top-5 left-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071A2D] text-white shadow-lg"><Zap className="h-8 w-8" aria-hidden="true" /></div>
              <div className="border-l-4 border-[#071A2D] pl-5 pt-12 sm:pl-7">
                <h3 className="text-2xl font-bold text-[#071A2D]">Our Mission</h3>
                <p className="mt-5 text-lg leading-8 text-[#405064]">To make AI, mathematics and data science accessible through practical learning, mentorship, collaborative research and responsibly developed African datasets.</p>
                <div className="mt-6 space-y-3">
                  {["Build strong foundations in AI and mathematics", "Connect research with locally relevant data", "Turn ideas into useful, responsible projects"].map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl bg-[#F5F8FC] px-4 py-3 text-sm font-medium text-[#20344B]">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E96832] text-xs font-bold text-white">{index + 1}</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <AboutTeam />

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
