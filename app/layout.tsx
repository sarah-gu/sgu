import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerifPro = Source_Serif_4({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Sarah Gu",
  description: "Personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceSerifPro.className}>{children}</body>
    </html>
  );
}
