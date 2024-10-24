import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import { storyblokInit, apiPlugin } from "@storyblok/react";

export const metadata: Metadata = {
  title: "Booky",
  description: "Find and buy your favorite books.",
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <AuthProvider>
        <html lang="en">
          <body className="h-screen">
            <Navbar />
            {children}
          </body>
        </html>
      </AuthProvider>
    </StoryblokProvider>
  );
}
