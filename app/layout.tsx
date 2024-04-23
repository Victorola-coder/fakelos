import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/public/styles/index.css";

const inter = Inter({ subsets: ["latin"] });

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
  title: "Create Next App",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
