import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import {
  storyblokInit,
  apiPlugin,
  getStoryblokApi,
} from "@storyblok/react/rsc";
import ShoppingCart from "@/components/ShoppingCart";

export const metadata: Metadata = {
  title: "Booky",
  description: "Find and buy your favorite books.",
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
});

// Initialize it once here - otherwise suffer endless runtime errors
export const storyBookClient = getStoryblokApi();

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
            <ShoppingCart />
            {children}
          </body>
        </html>
      </AuthProvider>
    </StoryblokProvider>
  );
}
