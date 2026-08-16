import { NextRequest, NextResponse } from "next/server";

function renderResult(status: "success" | "error", payload: object) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;
  return `<!doctype html>
<html><body>
<script>
(function () {
  function receiveMessage(e) {
    window.opener.postMessage(${JSON.stringify(message)}, e.origin);
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
</body></html>`;
}

export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return new NextResponse("Missing GitHub OAuth env vars", { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const expectedState = request.cookies.get("decap_oauth_state")?.value;

  if (!code || !state || !expectedState || state !== expectedState) {
    return new NextResponse(renderResult("error", { message: "Invalid OAuth state" }), {
      status: 400,
      headers: { "Content-Type": "text/html" },
    });
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const tokenJson = await tokenRes.json();

  if (!tokenJson.access_token) {
    return new NextResponse(
      renderResult("error", { message: tokenJson.error_description ?? "OAuth exchange failed" }),
      { status: 400, headers: { "Content-Type": "text/html" } }
    );
  }

  const response = new NextResponse(
    renderResult("success", { token: tokenJson.access_token, provider: "github" }),
    { headers: { "Content-Type": "text/html" } }
  );
  response.cookies.delete("decap_oauth_state");
  return response;
}
