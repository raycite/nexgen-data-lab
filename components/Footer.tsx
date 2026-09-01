import type { ReactNode } from "react";
import Image from "next/image";

const exploreLinks = [
  { label: "About", href: "/about" },
  { label: "Learn", href: "/programs" },
  { label: "Data Hub", href: "/datasets" },
  { label: "Projects", href: "/projects" },
  { label: "Community", href: "/#community" },
  { label: "Contact", href: "/contact" },
];

const involvedLinks = [
  { label: "Join Us", href: "/join" },
  { label: "Become a Mentor", href: "/join" },
  { label: "Collaborate", href: "/contact" },
  { label: "Support Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      id="resources"
      className="border-t border-[#FF5C1A] bg-[#03111F] px-4 py-10 text-white sm:px-6 lg:py-9"
    >
      <style>{`
        #footer-brand-logo {
          width: 145px !important;
          height: 68px !important;
          max-width: 145px !important;
          object-fit: contain !important;
          object-position: left center !important;
        }
      `}</style>

      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.85fr_1.35fr]">
          {/* Brand */}
          <div>
            <div
              className="relative shrink-0 overflow-hidden"
              style={{
                width: "145px",
                height: "68px",
                maxWidth: "145px",
              }}
            >
              <Image
                id="footer-brand-logo"
                src="/nexgen-logo-light-v2.png"
                alt="NexGen Data Lab"
                fill
                sizes="145px"
                className="object-contain object-left"
              />
            </div>

            <p
              className="mt-3 max-w-[280px] text-slate-300"
              style={{
                fontSize: "13px",
                lineHeight: "1.6",
              }}
            >
              Empowering young minds through digital innovation and data
              literacy.
            </p>

            {/* Social links */}
            <div className="mt-5 flex items-center gap-6">
              <SocialLink
                href="https://www.linkedin.com/company/nextgen-data-lab/"
                label="LinkedIn"
              >
                <LinkedInIcon />
              </SocialLink>

              <SocialLink
                href="https://github.com/raycite"
                label="Project GitHub"
              >
                <GitHubIcon />
              </SocialLink>

              <SocialLink
                href="mailto:nextgendatalab@gmail.com"
                label="Email"
              >
                <MailIcon />
              </SocialLink>
            </div>
          </div>

          {/* Explore */}
          <FooterLinks
            title="Explore"
            links={exploreLinks}
          />

          {/* Get involved */}
          <FooterLinks
            title="Get Involved"
            links={involvedLinks}
          />

          {/* Newsletter */}
          <div>
            <h3
              className="font-semibold text-white"
              style={{ fontSize: "14px" }}
            >
              Stay Connected
            </h3>

            <p
              className="mt-3 max-w-sm text-slate-300"
              style={{
                fontSize: "13px",
                lineHeight: "1.6",
              }}
            >
              Our newsletter for events, resources and opportunities is coming soon.
            </p>
            <span className="mt-4 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">Newsletter coming soon</span>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-5 text-center text-slate-400"
          style={{ fontSize: "11px" }}
        >
          © 2026 NexGen Data Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

type FooterLinksProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

function FooterLinks({
  title,
  links,
}: FooterLinksProps) {
  return (
    <div>
      <h3
        className="font-semibold text-white"
        style={{ fontSize: "14px" }}
      >
        {title}
      </h3>

      <ul
        className="mt-3 space-y-1.5 text-slate-300"
        style={{ fontSize: "13px" }}
      >
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="transition hover:text-[#FF6500]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

type SocialLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
};

function SocialLink({
  href,
  label,
  children,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-white transition duration-300 hover:-translate-y-0.5 hover:text-[#FF6500]"
    >
      {children}
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2" />
      <path d="M2 9h4v12H2z" />
      <circle
        cx="4"
        cy="4"
        r="2"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-6 0C5.8.1 4.7.5 4.7.5A5 5 0 0 0 4.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4" />
      <path d="M9 18c-3 .9-3-1.5-4.2-2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="23"
      height="23"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
      />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
