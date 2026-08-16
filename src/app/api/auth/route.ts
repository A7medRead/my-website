import { NextResponse } from "next/server";
import { identity } from "@/lib/content";

export async function GET() {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  if (!clientId) {
    return new NextResponse("Missing GITHUB_OAUTH_CLIENT_ID", { status: 500 });
  }

  // Hardcoded to the canonical (non-www) host so it always matches the
  // callback URL registered on the GitHub OAuth App, regardless of which
  // host variant actually served this request.
  const redirectUri = new URL("/api/callback", identity.siteUrl).toString();
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
