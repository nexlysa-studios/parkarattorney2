import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";
import { articles } from "@/data/insights";

/** XML sitemap, generated at request time from the site's content. */
export const Route = createFileRoute("/sitemap[.]xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const paths = [
          "/",
          "/about",
          "/services",
          ...services.map((s) => `/services/${s.slug}`),
          "/team",
          "/insights",
          ...articles.map((a) => `/insights/${a.slug}`),
          "/contact",
          "/privacy-policy",
        ];
        const today = new Date().toISOString().slice(0, 10);
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (p) => `  <url><loc>${origin}${p}</loc><lastmod>${today}</lastmod></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "content-type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
