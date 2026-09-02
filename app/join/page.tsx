import type { Metadata } from "next";
import { BrainCircuit, Handshake, UsersRound } from "lucide-react";
import Footer from "@/components/Footer";
import JoinForm from "@/components/JoinForm";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Join the Community",
  description: "Apply to learn, research, mentor, or collaborate with the NextGen Data Lab community.",
  alternates: { canonical: "/join" },
};

export default function JoinPage() {
  return (
    <main id="main-content" className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <section className="relative overflow-hidden bg-[#00102B] px-4 py-14 text-white sm:px-6 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(22,139,255,.2),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(255,101,0,.15),transparent_30%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#168BFF]">Join the community</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Build Africa&apos;s data and AI future with us.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Tell us where you&apos;d like to grow or contribute. We welcome learners, researchers, mentors, and mission-aligned partners.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-2xl font-bold">A place to learn and contribute</h2>
            <p className="mt-3 leading-7 text-slate-600">Complete the form and we&apos;ll connect you with the most relevant NextGen opportunities.</p>
            <div className="mt-7 space-y-5">
              <Benefit icon={BrainCircuit} title="Develop practical skills" text="Learn AI, data science, programming, and research through hands-on work." />
              <Benefit icon={UsersRound} title="Meet your community" text="Connect with students, researchers, mentors, and professionals across Africa." />
              <Benefit icon={Handshake} title="Create meaningful impact" text="Contribute to datasets and projects grounded in African realities." />
            </div>
          </div>
          <JoinForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}

type BenefitProps = { icon: typeof BrainCircuit; title: string; text: string };

function Benefit({ icon: Icon, title, text }: BenefitProps) {
  return (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-[#1264E8]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
      <div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p></div>
    </div>
  );
}
