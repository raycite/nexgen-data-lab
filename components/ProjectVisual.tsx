import Image from "next/image";
import { Bone, BrainCircuit, FileSearch2, HeartPulse, Leaf, ScanFace } from "lucide-react";
import type { Project } from "@/data/projects";

const visualStyles = {
  documents: { Icon: FileSearch2, background: "from-[#071A3A] via-[#0B3267] to-[#1264E8]", glow: "bg-sky-300/30" },
  environment: { Icon: Leaf, background: "from-[#063B32] via-[#08785F] to-[#19A974]", glow: "bg-emerald-200/30" },
  vision: { Icon: BrainCircuit, background: "from-[#321257] via-[#6D28A8] to-[#A855F7]", glow: "bg-fuchsia-200/30" },
  identity: { Icon: ScanFace, background: "from-[#062738] via-[#07556A] to-[#0F9BA8]", glow: "bg-cyan-200/30" },
  health: { Icon: HeartPulse, background: "from-[#5C1717] via-[#B32632] to-[#EF4444]", glow: "bg-rose-200/30" },
  fossils: { Icon: Bone, background: "from-[#3E2A17] via-[#805B2A] to-[#C58A3A]", glow: "bg-amber-200/30" },
};

export default function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  const { Icon, background, glow } = visualStyles[project.visual];

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${background} ${large ? "min-h-[280px] sm:min-h-[360px]" : "h-48"}`}>
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes={large ? "(max-width: 1024px) 100vw, 45vw" : "(max-width: 768px) 100vw, 50vw"}
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${background} opacity-35`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />
      <div className="project-light-sweep pointer-events-none absolute -inset-y-12 -left-1/2 z-10 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/35 to-transparent blur-sm" />
      <div className={`absolute -right-12 -top-12 h-48 w-48 rounded-full blur-3xl ${glow}`} />
      <div className="relative flex h-full min-h-[inherit] items-center justify-center p-8 text-white">
        <div className="flex flex-col items-center text-center">
          <span className={`flex items-center justify-center rounded-2xl border border-white/35 bg-[#00102B]/55 shadow-2xl backdrop-blur-md ${large ? "h-24 w-24" : "h-16 w-16"}`}>
            <Icon className={large ? "h-12 w-12" : "h-8 w-8"} strokeWidth={1.6} aria-hidden="true" />
          </span>
          {large && <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">{project.category}</p>}
        </div>
      </div>
    </div>
  );
}
