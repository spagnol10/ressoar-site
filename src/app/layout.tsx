import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Igreja Ressoar — Transformando vidas pelo Evangelho",
  description: "Bem-vindo à Igreja Ressoar. Venha fazer parte da nossa família. Cultos, grupos, ministérios e muito mais.",
  keywords: ["Igreja", "Ressoar", "Evangelho", "Culto", "Ministério"],
  openGraph: {
    title: "Igreja Ressoar",
    description: "Transformando vidas pelo Evangelho",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} ${geistMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
