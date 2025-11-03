import Staffing from "@/components/staffing/Staffing";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/staffing")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Staffing />;
}
