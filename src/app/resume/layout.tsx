import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Resume | Portfolio",
  description: "Resume page",
};

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return children;
}
