"use client";

import { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import Book from "./Book";

storyblokInit({
  components: { book: Book }, // needs to be refactored
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
