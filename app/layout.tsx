import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ImeXa",
  description:
    "ImeXa is transforming how industries train, learn, and grow. By combining Virtual Reality (VR), Augmented Reality (AR), and AI-driven analytics, our platform delivers hands-on, real-time, and risk-free training environments",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body className={`${inter.className}`}>
      <div className="bg-animated min-h-screen">
      <Navbar />
        {children}
        <Footer/>
      </div>
      </body>
    </html>
  );
}
