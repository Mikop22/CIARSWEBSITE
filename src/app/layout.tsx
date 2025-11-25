import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "13th Decolonizing Conference | CIARS",
  description: "Colonial Ruptures: Unmasking Ongoing Coloniality, Resistance, and Liberatory Possibilities - March 12-14, 2025 | OISE, University of Toronto",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
