//incremental static regeneration
export const revalidate = 420;

import { getStoryblokApi } from "@storyblok/react";
import Link from "next/link";

// Use for data that doesn't change often - generate dynamic routes at build time
export async function generateStaticParams() {
  const catalogue = await fetchCatalogue();

  return catalogue.map((book) => ({
    isbn: book.isbn,
  }));
}

const fetchCatalogue = async () => {
  // TODO: check why you're getting a runtime error
  const client = getStoryblokApi();

  if (!client) {
    throw new Error("Storyblok API client not initialized on the server.");
  }

  const response = await client.getStories({
    content_type: "book",
    version: "draft",
  });

  return response.data.stories.map((story) => story.content);
};

export default async function CataloguePage() {
  const catalogue = await fetchCatalogue();

  if (!catalogue || !catalogue.length) {
    return <>No books were found...</>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-full gap-y-12 overflow-hidden">
      <div>
        <h1 className="text-3xl font-bold">Our Book Catalogue</h1>
      </div>

      <div className="grid grid-cols-5 gap-x-8 gap-y-12">
        {catalogue.map((book) => {
          return (
            <div
              key={book._uid}
              className="flex flex-col justify-center items-center gap-x-2 gap-y-8  border border-2 p-2 border-black rounded-xl"
            >
              <span className="text-lg font-bold">{book.title}</span>
              <span>Written by {book.author}</span>
              <Link
                href={`/catalogue/${book.isbn}`}
                className="w-full text-xl font-bold hover:bg-black hover:text-white text-center p-2 rounded-xl border border-2 border-black"
              >
                View Details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
