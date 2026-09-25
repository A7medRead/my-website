import type { Metadata } from "next";
import { IncidentReport } from "@/components/IncidentReport";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return <IncidentReport />;
}
