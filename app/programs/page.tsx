import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BrainCircuit, CalendarClock, Code2, FunctionSquare, Sparkles, UsersRound } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Learning & Programs",
  description: "Explore upcoming AI, mathematics, Python and mentorship programs from NexGen Data Lab.",
  alternates: { canonical: "/programs" },
};

const courses = [
  {
    Icon: BrainCircuit,
    title: "Introduction to Artificial Intelligence",
    description: "Understand what AI is, how machine learning systems learn from data, and where these technologies are being applied in everyday life and across Africa.",
    topics: ["AI and machine learning", "Real-world applications", "Responsible AI", "Simple practical exercises"],
    level: "Beginner",
  },
  {
    Icon: FunctionSquare,
    title: "Mathematical Foundations of Machine Learning",
    description: "Build an intuitive foundation in the mathematics that powers machine-learning models, with practical examples instead of abstract theory alone.",
    topics: ["Linear algebra", "Probability and statistics", "Functions and calculus", "Model intuition"],
    level: "Beginner to intermediate",
  },
  {
    Icon: Code2,
    title: "Python Programming Fundamentals",
    description: "Learn to write and understand Python programs, then use those skills to begin working with data and solving practical problems.",
    topics: ["Variables and data types", "Conditions and loops", "Functions", "Introduction to data analysis"],
    level: "Beginner",
  },
];

export default function ProgramsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden bg-[#00102B] px-4 py-14 text-white sm:px-6 sm:py-18">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#FF6500]/15 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6500]">Learning & Programs</p>
          <h1 className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">Build strong foundations. Apply what you learn.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">Upcoming beginner-friendly programs designed to help you understand the ideas, mathematics and programming behind AI and data science.</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1264E8]">Upcoming courses</p><h2 className="mt-2 text-3xl font-bold">Start with the fundamentals</h2></div>
            <p className="max-w-md text-sm leading-6 text-slate-600">Dates and registration details will be announced as each program is confirmed.</p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {courses.map(({ Icon, title, description, topics, level }) => (
              <article key={title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1264E8]"><Icon className="h-6 w-6" aria-hidden="true" /></span><span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-[#D95700]">Coming soon</span></div>
                <h3 className="mt-5 text-xl font-bold leading-tight">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">{topics.map((topic) => <li key={topic} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6500]" />{topic}</li>)}</ul>
                <div className="mt-auto flex items-center gap-2 border-t border-slate-100 pt-5 text-xs font-semibold text-slate-500"><Sparkles className="h-4 w-4 text-[#1264E8]" aria-hidden="true" />{level}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-[#1264E8] text-white shadow-xl lg:grid-cols-[1fr_0.7fr]">
          <div className="p-7 sm:p-10">
            <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15"><UsersRound className="h-6 w-6" aria-hidden="true" /></span><span className="rounded-full bg-[#FF6500] px-3 py-1.5 text-xs font-bold">Coming soon</span></div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-blue-100">First cohort</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Apply to become a mentee</h2>
            <p className="mt-4 max-w-2xl leading-7 text-blue-50">Our first mentorship cohort will support learners who want structured guidance in AI, mathematics, Python and data science. Mentees will learn with peers, receive guidance from practitioners and work toward practical projects.</p>
            <Link href="/join" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FF6500] px-6 font-semibold text-white transition hover:bg-[#E85B00]">Register your interest <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <div className="grid content-center gap-4 border-t border-white/15 bg-[#0B4EB5] p-7 sm:p-10 lg:border-l lg:border-t-0">
            <ProgramDetail icon={CalendarClock} title="Schedule" text="Cohort dates will be announced soon." />
            <ProgramDetail icon={UsersRound} title="Who can apply" text="Students and early-career learners ready to grow through practical work." />
            <ProgramDetail icon={Sparkles} title="What to expect" text="Guided learning, community support and a project-focused experience." />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ProgramDetail({ icon: Icon, title, text }: { icon: typeof CalendarClock; title: string; text: string }) {
  return <div className="flex gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10"><Icon className="h-5 w-5" aria-hidden="true" /></span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-blue-100">{text}</p></div></div>;
}
