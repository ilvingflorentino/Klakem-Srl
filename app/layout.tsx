import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
//!Layout Padre.
const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin klakem.",
  description: "Klakem Rental Cars.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NextTopLoader color="#000" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
