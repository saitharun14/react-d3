import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React+d3",
  description: "d3 practice project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
