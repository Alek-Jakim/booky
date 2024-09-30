import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import AuthProvider from "@/AuthProvider";

export const metadata: Metadata = {
  title: "Booky",
  description: "Keep all your favorite books & authors in one place!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="h-screen">
          <Navbar />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
