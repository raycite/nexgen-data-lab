type ApplicationPayload = {
  fullName?: unknown;
  email?: unknown;
  country?: unknown;
  role?: unknown;
  interests?: unknown;
  goals?: unknown;
  website?: unknown;
};

const roles = new Set([
  "Student or learner",
  "Researcher",
  "Mentor or professional",
  "Organization or partner",
  "Other",
]);

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let body: ApplicationPayload;

  try {
    body = (await request.json()) as ApplicationPayload;
  } catch {
    return Response.json({ message: "Invalid form submission." }, { status: 400 });
  }

  // Hidden honeypot field: real applicants never fill this in.
  if (cleanText(body.website, 200)) {
    return Response.json({ ok: true });
  }

  const fullName = cleanText(body.fullName, 100);
  const email = cleanText(body.email, 160).toLowerCase();
  const country = cleanText(body.country, 100);
  const role = cleanText(body.role, 80);
  const interests = Array.isArray(body.interests)
    ? body.interests
        .filter((item): item is string => typeof item === "string")
        .map((item) => item.trim().slice(0, 80))
        .filter(Boolean)
        .slice(0, 6)
    : [];
  const goals = cleanText(body.goals, 1200);

  if (
    fullName.length < 2 ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    !country ||
    !roles.has(role) ||
    interests.length === 0 ||
    goals.length < 20
  ) {
    return Response.json(
      { message: "Please complete all required fields correctly." },
      { status: 400 },
    );
  }

  const accessToken = process.env.AIRTABLE_ACCESS_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME ?? "Applications";

  if (!accessToken || !baseId) {
    console.error("Airtable environment variables are not configured.");
    return Response.json(
      { message: "Applications are temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${encodeURIComponent(baseId)}/${encodeURIComponent(tableName)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                "Full Name": fullName,
                Email: email,
                Country: country,
                Role: role,
                Interests: interests,
                Goals: goals,
                Status: "New",
                "Submitted At": new Date().toISOString(),
              },
            },
          ],
          typecast: true,
        }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.error("Airtable submission failed:", response.status, await response.text());
      return Response.json(
        { message: "We couldn't submit your application. Please try again." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Airtable connection failed:", error);
    return Response.json(
      { message: "We couldn't submit your application. Please try again." },
      { status: 502 },
    );
  }
}
