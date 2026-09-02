import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectVisual from "@/components/ProjectVisual";
import { getProject, projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.summary, alternates: { canonical: `/projects/${project.slug}` } } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main id="main-content" className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="bg-slate-50 px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <Link href="/projects" className="inline-flex min-h-11 items-center text-sm font-semibold text-[#1264E8]">← All projects</Link>
          <div className="mt-5 grid overflow-hidden rounded-3xl bg-[#00102B] shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center p-7 text-white sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E96832]">{project.eyebrow}</p>
              <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">{project.title}</h1>
              <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">{project.summary}</p>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-12 w-fit items-center gap-2 rounded-xl bg-[#E96832] px-5 font-semibold text-white transition hover:bg-[#C95327]">
                  View on GitHub <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
            <ProjectVisual project={project} large />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_300px] lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Project overview</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">{project.description}</p>
            {project.authorship && <p className="mt-4 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-900">{project.authorship}</p>}

            {project.metrics && (
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-2xl font-bold text-[#1264E8]">{metric.value}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">{metric.label}</p>
                    {metric.note && <p className="mt-1 text-xs text-slate-500">Source: {metric.note}</p>}
                  </div>
                ))}
              </div>
            )}

            <h2 className="mt-10 text-2xl font-bold">The problem</h2>
            <p className="mt-4 leading-8 text-slate-600">{project.problem}</p>

            <h2 className="mt-10 text-2xl font-bold">Approach</h2>
            <ol className="mt-5 space-y-4">
              {project.approach.map((step, index) => (
                <li key={step} className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-[#1264E8]">{index + 1}</span><p className="pt-1 leading-7 text-slate-600">{step}</p></li>
              ))}
            </ol>

            <h2 className="mt-10 text-2xl font-bold">Outcomes and insights</h2>
            <ul className="mt-5 space-y-4">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" /><p className="leading-7 text-slate-600">{outcome}</p></li>
              ))}
            </ul>

            {project.gallery && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Research evidence</h2>
                <p className="mt-3 leading-7 text-slate-600">Selected technical figures from the thesis and implementation.</p>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {project.gallery.map((item) => (
                    <figure key={item.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                      <div className="relative aspect-[4/3] bg-slate-100">
                        <Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 100vw, 40vw" className="object-contain" />
                      </div>
                      <figcaption className="p-4 text-sm leading-6 text-slate-600">{item.caption}</figcaption>
                    </figure>
                  ))}
                </div>
                {project.privacyNote && <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950">{project.privacyNote}</p>}
              </div>
            )}
          </div>

          <aside>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-24">
              <h2 className="font-bold">Tools and methods</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => <span key={technology} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">{technology}</span>)}
              </div>
              <p className="mt-6 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">{project.sourceNote}</p>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
