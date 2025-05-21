import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Work | Portfolio",
  description: "Work page",
};

export default function WorkLayout({ children }: { children: ReactNode }) {
  return children;
}
