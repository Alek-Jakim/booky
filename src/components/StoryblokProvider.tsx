"use client";

import { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import BookCatalogue from "./BookCatalogue";

storyblokInit({
  components: { "book-catalogue": BookCatalogue }, // needs to be refactored
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
