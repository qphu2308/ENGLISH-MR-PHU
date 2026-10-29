import { createServer } from "node:http";
import { Readable } from "node:stream";
import worker from "./worker/index.js";

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "0.0.0.0";

function requestHeaders(incoming) {
  const headers = new Headers();
  const hopByHop = new Set([
    "connection", "keep-alive", "proxy-authenticate", "proxy-authorization",
    "te", "trailer", "transfer-encoding", "upgrade"
  ]);
  for (const [name, value] of Object.entries(incoming.headers)) {
    if (value == null || hopByHop.has(name.toLowerCase())) continue;
    if (Array.isArray(value)) {
      for (const item of value) headers.append(name, item);
    } else {
      headers.set(name, value);
    }
  }
  return headers;
}

function webRequest(incoming) {
  const forwardedProto = incoming.headers["x-forwarded-proto"];
  const protocol = (Array.isArray(forwardedProto) ? forwardedProto[0] : forwardedProto)
    ?.split(",")[0]?.trim() || (incoming.socket.encrypted ? "https" : "http");
  const forwardedHost = incoming.headers["x-forwarded-host"];
  const hostHeader = Array.isArray(forwardedHost) ? forwardedHost[0] : forwardedHost;
  const host = hostHeader?.split(",")[0]?.trim() || incoming.headers.host || `localhost:${port}`;
  const method = incoming.method || "GET";
  const init = { method, headers: requestHeaders(incoming) };

  if (method !== "GET" && method !== "HEAD") {
    init.body = Readable.toWeb(incoming);
    init.duplex = "half";
  }
  return new Request(`${protocol}://${host}${incoming.url || "/"}`, init);
}

async function sendResponse(outgoing, response, method) {
  outgoing.statusCode = response.status;
  response.headers.forEach((value, name) => {
    if (name.toLowerCase() !== "set-cookie") outgoing.setHeader(name, value);
  });
  const cookies = response.headers.getSetCookie?.();
  if (cookies?.length) outgoing.setHeader("Set-Cookie", cookies);
  if (method === "HEAD" || !response.body) {
    outgoing.end();
    return;
  }
  Readable.fromWeb(response.body).pipe(outgoing);
}

const server = createServer(async (incoming, outgoing) => {
  try {
    const request = webRequest(incoming);
    const response = await worker.fetch(request);
    await sendResponse(outgoing, response, incoming.method || "GET");
  } catch (error) {
    // Keep internal details out of public HTTP responses.
    console.error("Request failed:", error);
    if (!outgoing.headersSent) {
      outgoing.statusCode = 500;
      outgoing.setHeader("Content-Type", "text/plain; charset=utf-8");
      outgoing.setHeader("Cache-Control", "no-store");
    }
    outgoing.end("Internal Server Error");
  }
});

server.listen(port, host, () => {
  console.log(`English With Mr Phu listening on http://${host}:${port}`);
});
