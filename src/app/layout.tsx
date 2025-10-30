import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "13th Decolonizing Conference | CIARS",
  description: "Colonial Ruptures: Unmasking Ongoing Coloniality, Resistance, and Liberatory Possibilities - March 12-14, 2025 | OISE, University of Toronto",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${beVietnamPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
