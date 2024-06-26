import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} font-sans`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
