import type { ReactNode } from "react";
import HeroFieldCarousel from "@/components/HeroFieldCarousel";
import {
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  Database,
} from "lucide-react";

type Packet = {
  path: string;
  color: string;
  duration: string;
};

type PulsePoint = {
  cx: number;
  cy: number;
  delay: string;
};

type FloatingIconProps = {
  children: ReactNode;
  className: string;
  delay: string;
};

const packets: Packet[] = [
  {
    path: "M70 150 C170 160 205 205 275 205",
    color: "#168BFF",
    duration: "4.6s",
  },
  {
    path: "M275 205 C350 150 430 165 520 92",
    color: "#E96832",
    duration: "5.2s",
  },
  {
    path: "M125 340 C200 275 230 240 365 250",
    color: "#168BFF",
    duration: "4.2s",
  },
  {
    path: "M365 250 C410 290 445 330 520 335",
    color: "#E96832",
    duration: "5.8s",
  },
];

const pulsePoints: PulsePoint[] = [
  { cx: 273, cy: 204, delay: "0s" },
  { cx: 365, cy: 250, delay: "0.8s" },
  { cx: 456, cy: 291, delay: "1.4s" },
  { cx: 157, cy: 205, delay: "2s" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="editorial-grid relative overflow-hidden bg-[#03111F]"
    >
      <style>{`
        @keyframes hero-float {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -10px, 0);
          }
        }

        @keyframes hero-shimmer {
          0% {
            transform: translateX(-130%) skewX(-15deg);
          }

          55%, 100% {
            transform: translateX(240%) skewX(-15deg);
          }
        }

        @keyframes hero-network-dash {
          to { stroke-dashoffset: -80; }
        }

        @keyframes hero-map-glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(22, 139, 255, .28)); opacity: .8; }
          50% { filter: drop-shadow(0 0 16px rgba(22, 139, 255, .55)); opacity: 1; }
        }

        .hero-network-line {
          stroke-dasharray: 5 10;
          animation: hero-network-dash 12s linear infinite;
        }

        .hero-map-outline {
          animation: hero-map-glow 4s ease-in-out infinite;
        }

        @keyframes hero-highlight {
          0%, 100% {
            background-position: 0% 50%;
            filter: drop-shadow(0 0 0 rgba(255, 101, 0, 0));
          }

          50% {
            background-position: 100% 50%;
            filter: drop-shadow(
              0 0 12px rgba(255, 101, 0, 0.35)
            );
          }
        }

        @keyframes hero-underline {
          0%, 15% {
            transform: scaleX(0);
            opacity: 0;
          }

          40%, 80% {
            transform: scaleX(1);
            opacity: 1;
          }

          100% {
            transform: scaleX(0);
            opacity: 0;
            transform-origin: right;
          }
        }

        .hero-highlight {
          animation: hero-highlight 4s ease-in-out infinite;
        }

        .hero-underline {
          animation: hero-underline 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-motion,
          .hero-highlight,
          .hero-underline,
          .hero-network-line,
          .hero-map-outline {
            animation: none !important;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_44%,rgba(17,104,217,.22),transparent_36%),radial-gradient(circle_at_8%_92%,rgba(233,104,50,.1),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-[7%] w-px bg-white/10" />

      <div className="mx-auto min-h-[630px] max-w-[90rem]">
        <div className="contents">
          <HeroFieldCarousel>
          <div className="absolute right-0 top-1/2 aspect-[596/450] w-full -translate-y-1/2 overflow-hidden sm:w-[72%] lg:right-[2%] lg:w-[58%] lg:max-w-[760px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_48%,rgba(18,100,232,.2),transparent_42%)]" />
            <svg
              viewBox="0 0 596 450"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <pattern id="africaDots" width="9" height="9" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.25" fill="#168BFF" opacity=".9" />
                </pattern>
                <clipPath id="africaClip">
                  <path d="M201.56 19.495l-87.79 9.131-73.745 94.814v52.676l56.186 61.805 64.615-13.344 49.164 9.832-10.535 37.926 33.711 61.103-16.855 42.842 39.79 116.225 53.62-8.768 49.164-55.484 4.213-38.629 31.605-23.879-6.322-69.531 83.594-106.994-51.989 7.263-79.363-138.359-125.016-8.428-14.046-30.2zm252.346 319.8-14.402 20.86-13.408.496c-11.849 24.321-12.598 38.019-13.907 66.547l17.383 4.471 21.852-52.147 2.482-40.226z" />
                </clipPath>
                <filter
                  id="packetGlow"
                  x="-100%"
                  y="-100%"
                  width="300%"
                  height="300%"
                >
                  <feGaussianBlur
                    stdDeviation="3"
                    result="blur"
                  />

                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g fill="none" stroke="#168BFF" strokeWidth="1" opacity=".18">
                <path d="M5 80L78 48L145 88L220 35L294 82L372 38L452 76L590 32" />
                <path d="M0 170L82 130L158 174L236 122L320 164L410 114L500 158L596 120" />
                <path d="M18 278L92 222L176 268L258 214L342 260L430 210L520 266L590 224" />
                <path d="M10 390L104 330L186 382L280 326L372 378L458 324L586 390" />
                <path d="M78 48L82 130L92 222L104 330" />
                <path d="M145 88L158 174L176 268L186 382" />
                <path d="M220 35L236 122L258 214L280 326" />
                <path d="M294 82L320 164L342 260L372 378" />
                <path d="M372 38L410 114L430 210L458 324" />
                <path d="M452 76L500 158L520 266L586 390" />
              </g>

              <g fill="#168BFF" opacity=".45">
                {[[78,48],[145,88],[220,35],[294,82],[372,38],[452,76],[82,130],[158,174],[236,122],[320,164],[410,114],[500,158],[92,222],[176,268],[258,214],[342,260],[430,210],[520,266],[104,330],[186,382],[280,326],[372,378],[458,324]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" />)}
              </g>

              <g transform="translate(167 7) scale(.72 .88)" className="hero-map-outline">
                <path d="M201.56 19.495l-87.79 9.131-73.745 94.814v52.676l56.186 61.805 64.615-13.344 49.164 9.832-10.535 37.926 33.711 61.103-16.855 42.842 39.79 116.225 53.62-8.768 49.164-55.484 4.213-38.629 31.605-23.879-6.322-69.531 83.594-106.994-51.989 7.263-79.363-138.359-125.016-8.428-14.046-30.2zm252.346 319.8-14.402 20.86-13.408.496c-11.849 24.321-12.598 38.019-13.907 66.547l17.383 4.471 21.852-52.147 2.482-40.226z" fill="url(#africaDots)" stroke="#168BFF" strokeWidth="4" strokeDasharray="1 9" strokeLinecap="round" />
                <g clipPath="url(#africaClip)" fill="none" stroke="#168BFF" strokeWidth="1.4" opacity=".5">
                  <path d="M20 105L104 65L190 118L278 62L366 116L480 82M20 190L104 148L190 205L278 145L366 211L492 165M42 278L128 224L216 286L304 228L392 294L480 248M90 374L170 320L252 382L336 324L420 390" />
                  <path d="M104 65L104 148L128 224L170 320M190 118L190 205L216 286L252 382M278 62L278 145L304 228L336 324M366 116L366 211L392 294L420 390" />
                </g>
                <g fill="#E96832" filter="url(#packetGlow)"><circle cx="190" cy="205" r="7" /><circle cx="304" cy="228" r="7" /><circle cx="392" cy="294" r="7" /></g>
                <g fill="#168BFF" filter="url(#packetGlow)"><circle cx="278" cy="145" r="7" /><circle cx="252" cy="382" r="6" /></g>
              </g>

              {packets.map((packet, index) => (
                <g
                  key={packet.path}
                  className="hero-motion"
                >
                  <path
                    id={`packet-path-${index}`}
                    d={packet.path}
                    fill="none"
                    stroke="transparent"
                  />

                  <circle
                    r="4"
                    fill={packet.color}
                    filter="url(#packetGlow)"
                  >
                    <animateMotion
                      dur={packet.duration}
                      repeatCount="indefinite"
                      rotate="auto"
                    >
                      <mpath href={`#packet-path-${index}`} />
                    </animateMotion>
                  </circle>
                </g>
              ))}

              {pulsePoints.map(({ cx, cy, delay }) => (
                <circle
                  key={`${cx}-${cy}`}
                  cx={cx}
                  cy={cy}
                  r="9"
                  fill="none"
                  stroke="#168BFF"
                  opacity="0.6"
                >
                  <animate
                    attributeName="r"
                    values="5;17;5"
                    dur="2.8s"
                    begin={delay}
                    repeatCount="indefinite"
                  />

                  <animate
                    attributeName="opacity"
                    values=".8;0;.8"
                    dur="2.8s"
                    begin={delay}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </svg>

            <FloatingIcon
              className="left-[5%] top-[18%]"
              delay="0s"
            >
              <Database />
            </FloatingIcon>

            <FloatingIcon
              className="right-[5%] top-[10%]"
              delay="0.7s"
            >
              <ChartNoAxesCombined />
            </FloatingIcon>

            <FloatingIcon
              className="bottom-[19%] left-[13%]"
              delay="1.2s"
            >
              <Code2 />
            </FloatingIcon>

            <FloatingIcon
              className="bottom-[10%] right-[5%]"
              delay="1.8s"
            >
              <BrainCircuit />
            </FloatingIcon>
          </div>
          </HeroFieldCarousel>
        </div>
      </div>
    </section>
  );
}

function FloatingIcon({
  children,
  className,
  delay,
}: FloatingIconProps) {
  return (
    <div
      className={`hero-motion absolute flex h-11 w-11 items-center justify-center rounded-full border border-sky-400/40 bg-[#001A3D]/75 text-[#168BFF] shadow-[0_0_25px_rgba(22,139,255,.2)] backdrop-blur-sm sm:h-14 sm:w-14 [&>svg]:h-5 [&>svg]:w-5 sm:[&>svg]:h-7 sm:[&>svg]:w-7 ${className}`}
      style={{
        animation: `hero-float 3.8s ease-in-out ${delay} infinite`,
      }}
    >
      {children}
    </div>
  );
}
