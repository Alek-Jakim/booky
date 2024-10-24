import { getStoryblokApi } from "@storyblok/react";

interface ICataloguePage {
  params: {
    isbn: string;
  };
}

const fetchBook = async (isbn: string) => {
  // TODO: check why you're getting a runtime error
  const client = getStoryblokApi();

  if (!client) {
    throw new Error("Storyblok API client not initialized on the server.");
  }

  const response = await client.getStory(`catalogue/${isbn}`, {
    version: "draft",
  });

  return response.data.story.content;
};

export default async function BookPage({ params: { isbn } }: ICataloguePage) {
  const book = await fetchBook(isbn);

  if (!book) {
    return (
      <div className="flex justify-center items-center h-full">
        <span className="text-4xl font-bold text-center">
          Book with ISBN: {isbn} <br /> doesn't exist.
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-full gap-2">
      <span className="text-2xl">
        <span className="font-bold">{book.title}</span> by {book.author}
      </span>
      <span className="text-2xl">Num. of pages: {book.pages}</span>
    </div>
  );
}
