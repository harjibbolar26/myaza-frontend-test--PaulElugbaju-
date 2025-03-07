import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Karla } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-karla",
});

export const metadata: Metadata = {
  title: "UiFry Login",
  description: "UiFry Login Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${karla.variable}`}>
        {children}
      </body>
    </html>
  );
}
