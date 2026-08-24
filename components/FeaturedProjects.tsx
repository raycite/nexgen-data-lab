import Link from "next/link";
import ProjectVisual from "@/components/ProjectVisual";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-16 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-blue-300" />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#1264E8]">Featured Projects</p>
          <span className="h-px w-8 bg-blue-300" />
        </div>
        
       
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.slice(0, 3).map((project) => (
            <article key={project.slug} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <ProjectVisual project={project} />
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#FF6500]">{project.eyebrow}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{project.summary}</p>
                <Link href={`/projects/${project.slug}`} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#1264E8] transition group-hover:gap-3 group-hover:text-[#0E55C7]">
                  View case study <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/projects" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#1264E8] px-6 font-semibold text-[#1264E8] transition hover:bg-[#1264E8] hover:text-white">
            Explore all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
