import { Outlet, createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";

/** Layout route for /services — children: index (list) and $slug (detail). */
export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [{ title: `Legal Services | ${site.name}` }],
  }),
  component: Outlet,
});
