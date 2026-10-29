import { Outlet, createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";

/** Layout route for /insights — children: index (list) and $slug (article). */
export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [{ title: `Insights | ${site.name}` }],
  }),
  component: Outlet,
});
