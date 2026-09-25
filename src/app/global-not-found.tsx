import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "./fonts";
import { IncidentReport } from "@/components/IncidentReport";

export const metadata: Metadata = {
  title: "Page not found — Ahmed Massoud",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${fontVariables} h-full`}>
      <body className="min-h-full bg-console text-paper">
        <IncidentReport />
      </body>
    </html>
  );
}
