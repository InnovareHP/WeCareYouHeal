import AboutUsPage from "@/components/about/About";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AboutUsPage />;
}
