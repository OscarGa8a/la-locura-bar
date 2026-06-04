import { config } from "../data/config";

export function GET() {
  const aiCrawlers = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-User",
    "Google-Extended",
    "GoogleOther",
    "PerplexityBot",
    "Perplexity-User",
    "Applebot",
    "Bingbot",
  ];

  const lines = [
    "User-agent: *",
    "Allow: /",
    "",
    "# AI and answer-engine crawlers are allowed to read public site content.",
    ...aiCrawlers.flatMap((crawler) => [
      `User-agent: ${crawler}`,
      "Allow: /",
      "",
    ]),
  ];

  if (config.siteUrl) {
    lines.push(
      `Sitemap: ${new URL("/sitemap-index.xml", config.siteUrl).href}`,
      `LLMs: ${new URL("/llms.txt", config.siteUrl).href}`,
      `LLMs-Full: ${new URL("/llms-full.txt", config.siteUrl).href}`,
    );
  }

  return new Response(`${lines.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
