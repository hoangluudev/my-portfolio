import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "../config/theme/providers";
import PageTransition from "@/components/LoadingEffect/PageTransition";
import StairTransition from "@/components/LoadingEffect/StairTransition";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Header />
        <Providers>
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </Providers>
      </body>
    </html>
  );
}
