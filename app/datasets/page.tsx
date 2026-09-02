import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Database, Download, FileCheck2, Leaf, Mail, MapPin, Scale, UploadCloud } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "African Dataset Hub",
  description: "Discover and contribute responsibly documented datasets connected to Ghanaian and African research contexts.",
  alternates: { canonical: "/datasets" },
};

export default function DatasetsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden bg-[#00102B] px-4 py-14 text-white sm:px-6 sm:py-16">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D66135]">NextGen Data Hub</p>
          <h1 className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">Data grounded in African research and realities.</h1>
          <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-300 sm:text-lg">A growing home for responsibly documented datasets from Ghana and other African contexts—shared by researchers, students and the NextGen Data Lab team.</p>
          <a href="#contribute" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#D66135] px-6 font-semibold text-white transition hover:bg-[#B94F29]">Submit a dataset <UploadCloud className="h-5 w-5" aria-hidden="true" /></a>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-6 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          <Stat value="5+" label="Datasets being prepared" />
          <Stat value="Ghana first" label="Initial geographic focus" />
          <Stat value="Open" label="Community contributions" />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1264E8]">Featured dataset</p><h2 className="mt-2 text-3xl font-bold">Research data in the hub</h2></div><span className="w-fit rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">Catalogue is growing</span></div>

          <article className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              <div className="flex min-h-64 items-center justify-center bg-gradient-to-br from-[#063B32] via-[#08785F] to-[#19A974] p-8 text-white">
                <div className="text-center"><span className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/30 bg-white/10"><Leaf className="h-10 w-10" aria-hidden="true" /></span><p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-emerald-50">Environment & Public Health</p></div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#D66135]">NextGen Data Lab research</p>
                <h3 className="mt-2 text-2xl font-bold">Northern Ghana Wetland Heavy-Metal Dataset</h3>
                <p className="mt-4 leading-7 text-slate-600">Research data examining heavy-metal residues across water, soil, fish and vegetables in the Libga and Bunglung inland wetland ecosystems.</p>
                <div className="mt-5 flex flex-wrap gap-2"><Tag Icon={MapPin} text="Northern Ghana" /><Tag Icon={Database} text="Excel dataset" /><Tag Icon={Scale} text="Environmental risk" /><Tag Icon={FileCheck2} text="Research documented" /></div>
                <div className="mt-6 flex flex-wrap gap-3"><Link href="/projects/wetland-heavy-metal-assessment" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#1264E8] px-5 text-sm font-semibold text-white transition hover:bg-[#0E55C7]">View research project <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link><a href="mailto:nextgendatalab@gmail.com?subject=Dataset%20access%20request%3A%20Northern%20Ghana%20Wetlands" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-300 px-5 text-sm font-semibold transition hover:border-blue-300 hover:bg-blue-50"><Download className="h-4 w-4" aria-hidden="true" />Request dataset access</a></div>
              </div>
            </div>
          </article>

          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center"><Database className="mx-auto h-8 w-8 text-slate-400" aria-hidden="true" /><h3 className="mt-3 font-bold">More datasets are being documented</h3><p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">New entries will be published only after their descriptions, sources, usage conditions and privacy considerations have been reviewed.</p></div>
        </div>
      </section>

      <section id="contribute" className="scroll-mt-20 bg-white px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl bg-[#00102B] p-7 text-white sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D66135]">Contribute data</p><h2 className="mt-3 text-3xl font-bold">Share a Ghanaian or African research dataset</h2><p className="mt-4 max-w-2xl leading-7 text-slate-300">Researchers, students and organisations can submit responsibly collected datasets for review. Include a clear description, source, collection method, licence or access conditions, and confirmation that sensitive personal information has been removed or appropriately protected.</p></div>
          <div className="rounded-2xl bg-white/10 p-6"><h3 className="font-bold">How submission works for now</h3><ol className="mt-4 space-y-3 text-sm leading-6 text-slate-200"><li>1. Attach the dataset to an email, or share a Drive, GitHub, Zenodo or repository link.</li><li>2. Include its topic, location, formats, source and intended use.</li><li>3. The team reviews the documentation, permissions and privacy considerations before publishing.</li></ol><a href="mailto:nextgendatalab@gmail.com?subject=Dataset%20Contribution%20to%20NextGen%20Data%20Hub" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#D66135] px-5 font-semibold text-white transition hover:bg-[#B94F29]"><Mail className="h-5 w-5" aria-hidden="true" />Email your submission</a></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="text-center"><p className="text-2xl font-bold text-[#1264E8]">{value}</p><p className="mt-1 text-sm text-slate-600">{label}</p></div>;
}

function Tag({ Icon, text }: { Icon: typeof MapPin; text: string }) {
  return <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"><Icon className="h-3.5 w-3.5" aria-hidden="true" />{text}</span>;
}
