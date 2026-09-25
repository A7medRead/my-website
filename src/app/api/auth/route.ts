import { NextResponse } from "next/server";
// Must match the callback URL registered on the GitHub OAuth App. The apex
// host 308-redirects to www, so the callback still lands on the www origin.
const OAUTH_CALLBACK_URL = "https://ahmedmassoud.co/api/callback";

export async function GET() {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  if (!clientId) {
    return new NextResponse("Missing GITHUB_OAUTH_CLIENT_ID", { status: 500 });
  }

  const redirectUri = OAUTH_CALLBACK_URL;
  const state = crypto.randomUUID();

  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", "repo,user");
  authorizeUrl.searchParams.set("state", state);

  const response = NextResponse.redirect(authorizeUrl);
  response.cookies.set("decap_oauth_state", state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 600,
    path: "/",
  });
  return response;
}
