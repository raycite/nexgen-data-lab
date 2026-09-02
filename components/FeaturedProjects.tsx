import Link from "next/link";
import ProjectVisual from "@/components/ProjectVisual";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative scroll-mt-16 overflow-hidden bg-[#03111F] py-14 text-white sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgba(201,87,47,.11),transparent_28%),linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:auto,48px_48px,48px_48px]" />
      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-5 border-b border-white/15 pb-8 md:grid-cols-[.65fr_1.35fr] md:items-end">
          <p className="eyebrow text-[#6EB4FF]">Featured Projects</p>
          <div className="flex items-end justify-between gap-6">
            <h2 className="max-w-3xl text-4xl leading-none text-[#FFFDF8] sm:text-5xl">Proof lives in the <span className="italic text-[#D87552]">work.</span></h2>
            <span className="hidden font-mono text-[10px] uppercase tracking-[.2em] text-white/45 sm:block">Field notes / 2026</span>
          </div>
        </div>
        
       
        <div className="mt-8 grid gap-px overflow-hidden border border-white/15 bg-white/15 lg:grid-cols-2">
          {projects.slice(0, 3).map((project, index) => (
            <article key={project.slug} className={`group relative overflow-hidden bg-[#071A2D] ${index === 0 ? "lg:col-span-2" : ""}`}>
              <ProjectVisual project={project} large={index === 0} />
              <div className="relative p-6 sm:p-7">
                <span className="absolute right-6 top-7 font-mono text-[10px] tracking-[.2em] text-white/35">0{index + 1}</span>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D87552]">{project.eyebrow}</p>
                <h3 className={`font-display mt-3 text-[#FFFDF8] ${index === 0 ? "text-3xl sm:text-4xl" : "text-3xl"}`}>{project.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">{project.summary}</p>
                <Link href={`/projects/${project.slug}`} className="mt-5 inline-flex min-h-11 items-center gap-2 border-b border-[#6EB4FF] text-xs font-bold uppercase tracking-[.12em] text-[#6EB4FF] transition group-hover:gap-4 group-hover:border-[#D87552] group-hover:text-[#D87552]">
                  View case study <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link href="/projects" className="inline-flex min-h-12 items-center justify-center border border-white/30 px-6 text-sm font-semibold text-white transition hover:border-[#C9572F] hover:bg-[#C9572F]">
            Explore the full archive ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
