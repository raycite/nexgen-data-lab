export default function JoinCTA() {
  return (
    <section
      id="join"
      className="relative overflow-hidden border-t-[7px] border-[#C9572F] bg-[#071A2D] px-4 text-white sm:px-6 lg:px-[10vw]"
    >
      {/* Left circuit decoration */}
      <svg
        viewBox="0 0 190 110"
        className="pointer-events-none absolute left-0 top-1/2 hidden h-[110px] w-[190px] -translate-y-1/2 opacity-30 lg:block"
        fill="none"
        aria-hidden="true"
      >
        <g
          stroke="#6EB4FF"
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
          stroke="#6EB4FF"
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
      <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:repeating-linear-gradient(120deg,#6EB4FF_0,#6EB4FF_1px,transparent_1px,transparent_18px)]" />

      {/* Centered content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col items-start justify-center gap-6 py-10 md:flex-row md:items-center md:justify-between">
        {/* Text */}
        <div className="max-w-2xl">
          <h2
            className="m-0 text-3xl tracking-tight sm:text-4xl"
            style={{
              lineHeight: "1.25",
            }}
          >
            Ready to learn, build and make an impact?
          </h2>

          <p
            className="mb-0 mt-1.5 text-slate-300"
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
          className="group inline-flex min-h-12 w-full shrink-0 items-center justify-center border border-white/45 bg-white px-6 font-bold text-[#071A2D] shadow-[5px_5px_0_#C9572F] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none sm:w-auto"
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
