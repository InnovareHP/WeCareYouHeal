import Service from "@/components/services/Service";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Service />;
}
