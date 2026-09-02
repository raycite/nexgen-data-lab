import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Database, GraduationCap, Handshake, Link2, Mail, MessageSquare, Phone, Presentation } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact & Collaborate",
  description: "Contact NextGen Data Lab about research, training, mentorship, datasets and collaboration opportunities.",
  alternates: { canonical: "/contact" },
};

const opportunities = [
  { Icon: Handshake, title: "Research collaboration", text: "Work with us on research questions, data analysis or projects relevant to African communities." },
  { Icon: Presentation, title: "Training and facilitation", text: "Invite the team to support an AI, data science, mathematics or programming learning activity." },
  { Icon: GraduationCap, title: "Mentorship", text: "Contribute your experience as a mentor, speaker or technical facilitator for emerging learners." },
  { Icon: Database, title: "Dataset collaboration", text: "Discuss responsible data collection, documentation or research datasets grounded in African contexts." },
];

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden bg-[#00102B] px-4 py-14 text-white sm:px-6 sm:py-16">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#D66135]/12 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D66135]">Contact & Collaborate</p>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">Let&apos;s start a useful conversation.</h1>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300 sm:text-lg">Reach out about research, training, mentorship, datasets or another idea that aligns with the NextGen Data Lab community.</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1264E8]">Get in touch</p>
            <h2 className="mt-2 text-3xl font-bold">Choose the easiest channel</h2>
            <p className="mt-4 leading-7 text-slate-600">Email is the best option for detailed enquiries. You can also call or connect with us through LinkedIn.</p>

            <div className="mt-7 space-y-3">
              <ContactLink Icon={Mail} label="Email" value="nextgendatalab@gmail.com" href="mailto:nextgendatalab@gmail.com" />
              <ContactLink Icon={Phone} label="Phone" value="+233 559 633 286" href="tel:+233559633286" />
              <ContactLink Icon={Link2} label="LinkedIn" value="NextGen Data Lab" href="https://www.linkedin.com/company/nextgen-data-lab/" external />
              <ContactLink Icon={Code2} label="Project GitHub" value="github.com/raycite" href="https://github.com/raycite" external />
            </div>

            <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <div className="flex gap-3"><MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-[#1264E8]" aria-hidden="true" /><p className="text-sm leading-6 text-blue-950">For students and prospective mentees, use the community application so we can understand your interests and goals.</p></div>
              <Link href="/join" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#1264E8]">Go to the application <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#D66135]">Ways to work with us</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">What would you like to discuss?</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {opportunities.map(({ Icon, title, text }) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#1264E8]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                  <h3 className="mt-4 font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
            <a href="mailto:nextgendatalab@gmail.com?subject=Collaboration%20with%20NextGen%20Data%20Lab" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#D66135] px-6 font-semibold text-white transition hover:bg-[#B94F29]">Start a conversation <Mail className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactLink({ Icon, label, value, href, external = false }: { Icon: typeof Mail; label: string; value: string; href: string; external?: boolean }) {
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/40">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#00102B] text-white"><Icon className="h-5 w-5" aria-hidden="true" /></span>
      <span className="min-w-0"><span className="block text-xs font-bold uppercase tracking-wide text-slate-500">{label}</span><span className="mt-1 block break-words font-semibold text-slate-900">{value}</span></span>
    </a>
  );
}
