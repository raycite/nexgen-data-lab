export default function JoinCTA() {
  return (
    <section
      id="join"
      className="relative overflow-hidden bg-gradient-to-r from-[#FF6500] via-[#FF7A1A] to-[#FF6500] px-4 text-[#001A3D] sm:px-6 lg:px-[210px] xl:px-[14vw]"
    >
      {/* Left circuit decoration */}
      <svg
        viewBox="0 0 190 110"
        className="pointer-events-none absolute left-0 top-1/2 hidden h-[110px] w-[190px] -translate-y-1/2 opacity-30 lg:block"
        fill="none"
        aria-hidden="true"
      >
        <g
          stroke="#001A3D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 55H62L94 28H137" />
          <path d="M0 55H62L94 82H158" />
          <path d="M35 0L78 39H130" />
          <path d="M35 110L78 71H140" />

          <circle cx="141" cy="28" r="5" />
          <circle cx="162" cy="82" r="5" />
          <circle cx="134" cy="39" r="5" />
          <circle cx="144" cy="71" r="5" />
        </g>
      </svg>

      {/* Right circuit decoration */}
      <svg
        viewBox="0 0 190 110"
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[110px] w-[190px] -translate-y-1/2 rotate-180 opacity-30 lg:block"
        fill="none"
        aria-hidden="true"
      >
        <g
          stroke="#001A3D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 55H62L94 28H137" />
          <path d="M0 55H62L94 82H158" />
          <path d="M35 0L78 39H130" />
          <path d="M35 110L78 71H140" />

          <circle cx="141" cy="28" r="5" />
          <circle cx="162" cy="82" r="5" />
          <circle cx="134" cy="39" r="5" />
          <circle cx="144" cy="71" r="5" />
        </g>
      </svg>

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300/20 blur-3xl" />

      {/* Centered content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-start justify-center gap-5 py-8 md:min-h-[130px] md:flex-row md:items-center md:justify-between md:py-5 lg:min-h-[110px]">
        {/* Text */}
        <div className="max-w-2xl">
          <h2
            className="m-0 text-xl font-bold tracking-tight sm:text-2xl md:text-xl"
            style={{
              lineHeight: "1.25",
            }}
          >
            Ready to learn, build and make an impact?
          </h2>

          <p
            className="mb-0 mt-1.5 text-[#13294B]"
            style={{
              fontSize: "13px",
              lineHeight: "1.5",
            }}
          >
            Join NexGen Data Lab and be part of a community shaping the future
            of AI and data in Africa.
          </p>
        </div>

        {/* Button */}
        <a
          href="/join"
          className="group inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-lg bg-[#001A3D] px-6 font-semibold text-white shadow-[0_8px_20px_rgba(0,16,43,.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#06234F] hover:shadow-[0_12px_25px_rgba(0,16,43,.35)] sm:w-auto"
          style={{
            fontSize: "14px",
            minWidth: "215px",
          }}
        >
          Join NexGen Today

          <span
            className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
            style={{ fontSize: "17px" }}
          >
            →
          </span>
        </a>
      </div>
    </section>
  );
}
