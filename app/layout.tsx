import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/public/styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description:
    "I enjoy creating frontend solutions with solid foundations, scalability, and excellent user experiences.",
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
