import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Chatbot from "../components/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MissioTech - Technology with a Mission",
  description: "MissioTech provides AI integration, VR/XR training, and consulting services to help organizations achieve their mission.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
