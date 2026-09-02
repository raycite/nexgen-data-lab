"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { CheckCircle2, LoaderCircle } from "lucide-react";

const interests = [
  "Data Science",
  "Artificial Intelligence",
  "Research",
  "Software Development",
  "Mentorship",
  "Community Projects",
];

export default function JoinForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.get("fullName"),
          email: formData.get("email"),
          country: formData.get("country"),
          role: formData.get("role"),
          interests: formData.getAll("interests"),
          goals: formData.get("goals"),
          website: formData.get("website"),
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message ?? "Submission failed.");

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[480px] flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="h-14 w-14 text-emerald-600" aria-hidden="true" />
        <h2 className="mt-5 text-2xl font-bold text-slate-900">Application received</h2>
        <p className="mt-3 max-w-md leading-7 text-slate-600">
          Thank you for your interest in NextGen Data Lab. We&apos;ll review your details and get in touch.
        </p>
        <Link href="/" className="mt-7 rounded-lg bg-[#00102B] px-6 py-3 font-semibold text-white hover:bg-[#06234F]">
          Return home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="fullName" autoComplete="name" />
        <Field label="Email address" name="email" type="email" autoComplete="email" />
        <Field label="Country" name="country" autoComplete="country-name" />
        <label className="block text-sm font-semibold text-slate-800">
          I&apos;m joining as
          <select name="role" required defaultValue="" className="mt-2 h-12 w-full rounded-lg border border-slate-300 bg-white px-3 font-normal outline-none transition focus:border-[#1264E8] focus:ring-4 focus:ring-blue-100">
            <option value="" disabled>Select a role</option>
            <option>Student or learner</option>
            <option>Researcher</option>
            <option>Mentor or professional</option>
            <option>Organization or partner</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-slate-800">What are you interested in?</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {interests.map((interest) => (
            <label key={interest} className="flex min-h-12 cursor-pointer items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 transition hover:border-blue-300 hover:bg-blue-50/50">
              <input type="checkbox" name="interests" value={interest} className="h-4 w-4 accent-[#1264E8]" />
              {interest}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block text-sm font-semibold text-slate-800">
        What would you like to learn, build, or contribute?
        <textarea name="goals" required minLength={20} maxLength={1200} rows={5} placeholder="Tell us about your goals and how you hope to participate..." className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal leading-6 outline-none transition placeholder:text-slate-400 focus:border-[#1264E8] focus:ring-4 focus:ring-blue-100" />
      </label>

      <label className="absolute -left-[9999px]" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
        <input type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[#1264E8]" />
        I agree that NextGen Data Lab may use these details to review my application and contact me about relevant opportunities.
      </label>

      {status === "error" && <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{message}</p>}

      <button type="submit" disabled={status === "submitting"} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#D66135] px-6 font-semibold text-white transition hover:bg-[#B94F29] disabled:cursor-wait disabled:opacity-70">
        {status === "submitting" && <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />}
        {status === "submitting" ? "Submitting..." : "Submit application"}
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
};

function Field({ label, name, type = "text", autoComplete }: FieldProps) {
  return (
    <label className="block text-sm font-semibold text-slate-800">
      {label}
      <input name={name} type={type} required autoComplete={autoComplete} className="mt-2 h-12 w-full rounded-lg border border-slate-300 px-4 font-normal outline-none transition focus:border-[#1264E8] focus:ring-4 focus:ring-blue-100" />
    </label>
  );
}
