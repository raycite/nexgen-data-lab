import { SiPython } from "react-icons/si";

/* -----------------------------
   Custom icons for mock accuracy
------------------------------ */

function DataScienceIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* axes */}
      <path d="M12 10V52H54" />

      {/* bars */}
      <path d="M21 43V32" />
      <path d="M31 43V24" />
      <path d="M41 43V17" />
      <path d="M51 43V28" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-11 w-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* left brain */}
      <path d="M29 11c-5-5-13-1-13 5-6 0-8 8-3 11-5 4-3 12 3 13-1 6 6 10 11 6 1 5 8 6 11 2" />

      {/* right brain */}
      <path d="M35 11c5-5 13-1 13 5 6 0 8 8 3 11 5 4 3 12-3 13 1 6-6 10-11 6-1 5-8 6-11 2" />

      {/* middle */}
      <path d="M32 10V52" />

      {/* internal folds */}
      <path d="M21 20c5 0 7 3 7 7" />
      <path d="M43 20c-5 0-7 3-7 7" />
      <path d="M20 35c5-2 8 0 9 4" />
      <path d="M44 35c-5-2-8 0-9 4" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-9 w-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="13" width="46" height="42" rx="5" />
      <path d="M20 8V19M44 8V19M9 25H55" />

      <circle cx="21" cy="34" r="1.5" fill="currentColor" />
      <circle cx="32" cy="34" r="1.5" fill="currentColor" />
      <circle cx="43" cy="34" r="1.5" fill="currentColor" />

      <circle cx="21" cy="44" r="1.5" fill="currentColor" />
      <circle cx="32" cy="44" r="1.5" fill="currentColor" />
      <circle cx="43" cy="44" r="1.5" fill="currentColor" />
    </svg>
  );
}

function MentorshipIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="24" cy="20" r="8" />
      <circle cx="43" cy="22" r="7" />

      <path d="M9 49c1-10 7-16 15-16s14 6 15 16" />
      <path d="M34 37c3-4 6-6 10-6 7 0 12 6 13 16" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* rocket body */}
      <path d="M37 10c8-4 15-4 18-3 1 3 1 10-3 18L36 41 23 28 37 10Z" />

      {/* window */}
      <circle cx="43" cy="19" r="4" />

      {/* fins */}
      <path d="M25 29 15 30 9 39l15-2" />
      <path d="M35 40 34 50 25 56l2-15" />

      {/* flame */}
      <path d="M19 42c-6 2-9 7-10 13 6-1 11-4 13-10" />
    </svg>
  );
}

export default function LearningCommunity() {
  return (
    <section id="learn" className="scroll-mt-16 bg-white">
      <div className="grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="editorial-grid bg-[#0A2340] px-4 py-12 text-white sm:px-8 sm:py-14 lg:px-14">
          <div className="mx-auto max-w-xl">

            <p className="eyebrow text-[#6EB4FF]">
              Learn with NextGen
            </p>

            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Skills you can put to work.
            </h2>

            {/* Icons */}
            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-7 min-[520px]:grid-cols-4">

              {/* Python */}
              <div className="text-center">
                <div className="flex h-11 items-center justify-center text-[#168BFF]">
                  <SiPython size={39} />
                </div>

                <p className="mt-2 text-sm font-semibold">
                  Python
                </p>
              </div>

              {/* Data Science */}
              <div className="text-center">
                <div className="flex h-11 items-center justify-center text-[#168BFF]">
                  <DataScienceIcon />
                </div>

                <p className="mt-2 text-sm font-semibold">
                  Data Science
                </p>
              </div>

              {/* Machine Learning */}
              <div className="text-center">
                <div className="flex h-11 items-center justify-center text-[#168BFF]">
                  <BrainIcon />
                </div>

                <p className="mt-2 text-sm font-semibold">
                  Machine Learning
                </p>
              </div>

              {/* Mathematics */}
              <div className="text-center">
                <div className="flex h-11 items-center justify-center">
                  <span className="text-[43px] font-semibold leading-none text-[#168BFF]">
                    Σ
                  </span>
                </div>

                <p className="mt-2 text-sm font-semibold">
                  Mathematics
                </p>
              </div>
            </div>

            <a
              href="/programs"
              className="mt-7 inline-flex min-h-11 items-center text-sm font-semibold text-[#D66135] transition hover:opacity-80"
            >
              Explore all resources →
            </a>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          id="community"
          className="editorial-grid scroll-mt-16 border-[#071A2D]/15 bg-[#F5F8FA] px-4 py-12 sm:px-8 sm:py-14 lg:border-l lg:px-14"
        >
          <div className="mx-auto max-w-2xl">

            <p className="eyebrow text-[#1168D9]">
              Grow with the Community
            </p>

            <h2 className="mt-4 text-4xl leading-tight text-[#071A2D] sm:text-5xl">
              Progress is a community practice.
            </h2>

            <div className="mt-7 grid gap-6 sm:grid-cols-3 sm:gap-5">

              {/* Upcoming Events */}
              <div className="flex items-start gap-2.5">

                <div className="shrink-0 text-[#D66135]">
                  <CalendarIcon />
                </div>

                <div>
                  <h3 className="text-sm font-bold leading-5 text-slate-900">
                    Upcoming Events
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Join webinars, bootcamps and study sessions.
                  </p>
                </div>
              </div>

              {/* Mentorship */}
              <div className="flex items-start gap-2.5">

                <div className="shrink-0 text-[#D66135]">
                  <MentorshipIcon />
                </div>

                <div>
                  <h3 className="text-sm font-bold leading-5 text-slate-900">
                    Mentorship
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Learn from experts and support others.
                  </p>
                </div>
              </div>

              {/* Community Projects */}
              <div className="flex items-start gap-2.5">

                <div className="shrink-0 text-[#D66135]">
                  <RocketIcon />
                </div>

                <div>
                  <h3 className="text-sm font-bold leading-5 text-slate-900">
                    Community Projects
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Collaborate and build real-world solutions.
                  </p>
                </div>
              </div>

            </div>

            <a
              href="/join"
              className="mt-7 inline-flex min-h-11 items-center text-sm font-semibold text-[#D66135] transition hover:opacity-80"
            >
              Explore Community →
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
