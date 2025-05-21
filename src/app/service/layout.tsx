import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Service | Portfolio",
  description: "Service page",
};

export default function ServiceLayout({ children }: { children: ReactNode }) {
  return children;
}
