import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Toaster } from "sonner";
import { ExitModal } from "@/components/modals/exit-modal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duolingo 🐧",
  description: "Created by tgtan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Toaster />
        <ExitModal />
        <body className={nunito.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
