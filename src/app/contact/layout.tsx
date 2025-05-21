import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact | Portfolio",
  description: "Contact page",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
