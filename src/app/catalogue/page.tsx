//incremental static regeneration
// export const revalidate = 420;
export const dynamic = "force-dynamic";

import StoryblokStory from "@storyblok/react/story";
import { storyBookClient } from "../layout";

// Use for data that doesn't change often - generate dynamic routes at build time
export async function generateStaticParams() {
  const catalogue = await fetchCatalogue();

  return catalogue.map((book) => ({
    isbn: book.content.isbn,
  }));
}

const fetchCatalogue = async () => {
  if (!storyBookClient) {
    throw new Error("Storyblok API client not initialized on the server.");
  }

  const response = await storyBookClient.getStories({
    content_type: "book",
    version: "draft",
  });

  return response.data.stories;
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

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-5 justify-center items-between gap-x-8 gap-y-12">
          {catalogue.map((story) => {
            return <StoryblokStory story={story} key={story.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
