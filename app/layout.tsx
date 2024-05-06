import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/public/styles/index.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const keywords = [
  "VickyJay",
  "OVT",
  "Olatunji",
  "Creativity",
  "Creative Software Engineer",
  "Portfolio",
  "Frontend Developer",
];

export const metadata: Metadata = {
  title: "VickyJay - Creative Frontend Engineer",
  description:
    "I enjoy creating frontend solutions with solid foundations, scalability, and excellent user experiences.",
  keywords: keywords,
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "android-chrome",
      type: "image/png",
      sizes: "192x192",
      url: "/favicon/android-chrome-192x192.png",
    },
    {
      rel: "android-chrome",
      type: "image/png",
      sizes: "512x512",
      url: "/favicon/android-chrome-512x512.png",
    },
  ],
  authors: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
