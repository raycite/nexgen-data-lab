export const siteName = "NextGen Data Lab";
export const siteDescription = "A community-driven initiative helping students and researchers learn AI, mathematics, programming and data science through practical projects, mentorship and African-focused research.";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  const value = configuredUrl || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

  return new URL(value.startsWith("http") ? value : `https://${value}`);
}
