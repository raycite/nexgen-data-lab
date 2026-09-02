import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectVisual from "@/components/ProjectVisual";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore NextGen Data Lab projects in AI, environmental research, computer vision, and population health.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <section className="bg-[#00102B] px-4 py-14 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#168BFF]">Our work</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Projects grounded in real problems.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">From document intelligence and computer vision to environmental risk and public-health analysis, our work connects technical learning with practical impact.</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <ProjectVisual project={project} />
              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D66135]">{project.eyebrow}</p>
                <h2 className="mt-2 text-2xl font-bold">{project.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((technology) => <span key={technology} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{technology}</span>)}
                </div>
                <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex min-h-11 items-center font-semibold text-[#1264E8]">Read case study <span className="ml-2" aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
