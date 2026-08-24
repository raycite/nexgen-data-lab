import Image from "next/image";
import { Database, Globe2, Users } from "lucide-react";

export default function AfricaData() {
  return (
    <section
      id="research"
      className="scroll-mt-16 overflow-hidden bg-gradient-to-br from-[#F4F8FF] via-white to-[#EEF5FF] py-10 sm:py-12 lg:py-8"
    >
      <style>{`
        @keyframes map-float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0);
          }

          50% {
            transform: translate(-50%, -50%) translateY(-6px);
          }
        }

        @keyframes map-pulse {
          0%, 100% {
            transform: scale(0.8);
            opacity: 0.65;
          }

          50% {
            transform: scale(1.35);
            opacity: 1;
          }
        }

        @keyframes card-float {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        .africa-map-image {
          animation: map-float 5s ease-in-out infinite;
        }

        .africa-info-card {
          animation: card-float 4s ease-in-out infinite;
        }

        .africa-map-node {
          animation: map-pulse 2.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .africa-map-image,
          .africa-info-card,
          .africa-map-node {
            animation: none !important;
          }
        }
      `}</style>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8 lg:px-8">
        {/* Left content */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#168BFF]">
            Our Focus
          </p>

          <h2 className="mt-2 max-w-lg text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-3xl">
            Building Better
            <br />
            Data for Africa
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600">
            Many AI systems are trained on data that does not fully represent
            African people, languages, environments, and realities.
          </p>

          <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
            We develop datasets that reflect African communities and support
            fairer, more inclusive AI research.
          </p>

          <a
            href="/datasets"
            className="mt-5 inline-flex items-center rounded-lg bg-[#1264E8] px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#0E55C7] hover:shadow-lg"
          >
            Explore Data Hub →
          </a>
        </div>

        {/* Right visual */}
        <div className="relative grid gap-3 sm:grid-cols-3 lg:block lg:min-h-[330px]">
          <div className="relative col-span-full h-[260px] min-[420px]:h-[285px] sm:h-[310px] lg:absolute lg:inset-0 lg:h-full">
          {/* Background network */}
          <svg
            viewBox="0 0 700 330"
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
            aria-hidden="true"
          >
            <g
              stroke="#168BFF"
              strokeWidth="1.2"
              opacity="0.13"
            >
              <path d="M10 100L100 65L190 110L280 55L375 100L470 55L570 105L690 70" />
              <path d="M25 255L115 205L210 245L310 190L415 245L520 200L675 270" />
              <path d="M70 20L145 90L220 35L310 100L405 30L500 95L600 25" />
              <path d="M0 170L95 135L170 185L265 140L360 190L470 140L590 185L700 145" />
            </g>

            <g
              fill="#168BFF"
              opacity="0.3"
            >
              <circle cx="100" cy="65" r="4" />
              <circle cx="190" cy="110" r="4" />
              <circle cx="280" cy="55" r="4" />
              <circle cx="375" cy="100" r="4" />
              <circle cx="470" cy="55" r="4" />
              <circle cx="570" cy="105" r="4" />
              <circle cx="115" cy="205" r="4" />
              <circle cx="210" cy="245" r="4" />
              <circle cx="310" cy="190" r="4" />
              <circle cx="415" cy="245" r="4" />
              <circle cx="520" cy="200" r="4" />
            </g>
          </svg>

          {/* Africa map */}
          <div className="africa-map-image pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-full max-w-[380px] sm:h-[300px] sm:max-w-[410px]">
            <Image src="/africa-dotted-map.png" alt="Dotted data map of Africa" fill sizes="(max-width: 640px) 380px, 410px" className="object-contain" />
          </div>

          {/* Animated orange nodes */}
          <span
            className="africa-map-node absolute left-[52%] top-[38%] h-3 w-3 rounded-full bg-[#FF6500] shadow-[0_0_14px_rgba(255,101,0,.7)]"
            style={{ transformOrigin: "center" }}
          />

          <span
            className="africa-map-node absolute left-[58%] top-[65%] h-3 w-3 rounded-full bg-[#FF6500] shadow-[0_0_14px_rgba(255,101,0,.7)]"
            style={{
              animationDelay: "0.8s",
              transformOrigin: "center",
            }}
          />
          </div>

          {/* Dataset card */}
          <div className="africa-info-card relative z-10 flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg lg:absolute lg:left-0 lg:top-4">
            <Database
              className="mt-1 text-[#1264E8]"
              size={30}
              strokeWidth={1.8}
            />

            <div>
              <p className="text-xs font-bold text-slate-900">
                African Datasets
              </p>

              <p className="mt-0.5 text-[11px] text-slate-600">
                Curated and growing
              </p>

              <p className="mt-1 text-xl font-bold text-[#1264E8]">
                5+
              </p>
            </div>
          </div>

          {/* Domains card */}
          <div
            className="africa-info-card relative z-10 flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg lg:absolute lg:right-0 lg:top-16"
            style={{ animationDelay: "0.8s" }}
          >
            <Globe2
              className="mt-1 text-emerald-500"
              size={31}
              strokeWidth={1.8}
            />

            <div>
              <p className="text-xs font-bold text-slate-900">
                Domains Covered
              </p>

              <p className="mt-1 max-w-[190px] text-[11px] leading-4 text-slate-600">
                Health, Agriculture, Education, Environment and more
              </p>
            </div>
          </div>

          {/* Community card */}
          <div
            className="africa-info-card relative z-10 flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:col-span-1 lg:absolute lg:bottom-2 lg:left-8"
            style={{ animationDelay: "1.5s" }}
          >
            <Users
              className="mt-1 text-[#FF6500]"
              size={31}
              strokeWidth={1.8}
            />

            <div>
              <p className="text-xs font-bold text-slate-900">
                Community Driven
              </p>

              <p className="mt-1 max-w-[190px] text-[11px] leading-4 text-slate-600">
                Built with researchers, students and local partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
