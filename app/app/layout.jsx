import { Inter } from "next/font/google";
import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata = {
  title: "BIM Elevate | Global BIM Solutions",
  description:
    "BIM Elevate provides BIM modeling, coordination, MEP, architectural, structural, and construction documentation services for global AEC teams."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={bodyFont.variable}>
      <body>{children}</body>
    </html>
  );
}
