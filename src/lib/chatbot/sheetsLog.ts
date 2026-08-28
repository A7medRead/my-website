import { createSign } from "crypto";

const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const TOKEN_URL = "https://oauth2.googleapis.com/token";

function base64url(input: Buffer | string): string {
  return Buffer.from(input).toString("base64url");
}

/** Exchanges the service account's key for a short-lived OAuth access token via the
 * JWT bearer flow (no googleapis/google-auth-library dependency needed for this one use). */
async function getAccessToken(clientEmail: string, privateKey: string): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({
      iss: clientEmail,
      scope: SHEETS_SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    }),
  );
  const signature = createSign("RSA-SHA256").update(`${header}.${claims}`).sign(privateKey);
  const assertion = `${header}.${claims}.${base64url(signature).replace(/=+$/, "")}`;

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });
  if (!res.ok) {
    throw new Error(`sheets_token_failed: ${res.status} ${await res.text().catch(() => "")}`);
  }
  const data: { access_token?: string } = await res.json();
  if (!data.access_token) throw new Error("sheets_token_missing");
  return data.access_token;
}

/** Appends one row [timestamp, question, reply] to the configured chat-log Google Sheet.
 * Best-effort: caller decides whether a failure should be logged or swallowed. */
export async function appendChatLogRow(row: string[]): Promise<void> {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId = process.env.GOOGLE_SHEETS_ID;
  if (!clientEmail || !privateKey || !sheetId) return;

  const accessToken = await getAccessToken(clientEmail, privateKey);
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A:C:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [row] }),
    },
  );
  if (!res.ok) {
    throw new Error(`sheets_append_failed: ${res.status} ${await res.text().catch(() => "")}`);
  }
}
