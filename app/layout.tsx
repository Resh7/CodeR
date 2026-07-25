import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohanasricnctechnics.com"),
  title: {
    default: "Mohana Sri CNC Technics | Precision Engineering & CNC Wire Cutting",
    template: "%s | Mohana Sri CNC Technics"
  },
  description: "Precision CNC wire cutting, industrial manufacturing, machine components, tool-room solutions, fabrication and government project support in Hyderabad.",
  openGraph: {
    title: "Mohana Sri CNC Technics",
    description: "Engineering precision beyond expectations.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohana Sri CNC Technics",
    description: "Precision engineering, CNC wire cutting and industrial manufacturing."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
