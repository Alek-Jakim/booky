import { storyBookClient } from "../../layout";
import Image from "next/image";

interface ICataloguePage {
  params: {
    isbn: string;
  };
}

const fetchBook = async (isbn: string) => {
  if (!storyBookClient) {
    throw new Error("Storyblok API client not initialized on the server.");
  }

  const response = await storyBookClient.getStory(`catalogue/${isbn}`, {
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
    <div className="flex justify-center items-stretch h-full gap-x-12 px-4">
      <div className="flex flex-col gap-y-8 justify-center items-center flex-2">
        <Image
          src={book.image.filename}
          alt={book.title}
          width={256}
          height={256}
        />

        <button className="p-2 text-lg font-bolds border border-2 border-black rounded-xl w-full hover:text-white hover:bg-black">
          Add To Cart
        </button>
      </div>

      <div className="flex flex-col gap-y-4 justify-center items-start w-1/2 flex-4 px-8 ">
        <span className="text-2xl">
          <span className="font-bold">{book.title}</span>
        </span>

        <div>
          <span>
            <span className="font-bold">DESCRIPTION</span> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Perspiciatis ipsa sint expedita
            ipsam molestias vel, dignissimos a officiis neque voluptatum officia
            iste, aspernatur iusto, exercitationem voluptate cumque ex
            architecto! Iusto impedit magnam quaerat odit. Illo nesciunt
            necessitatibus delectus exercitationem asperiores nobis iste dicta
            unde iusto distinctio. Laborum maiores in aut.
          </span>
        </div>

        <span className="text-xl text-gray-600">Written by {book.author}</span>
        <span className="text-xl">Num. of pages: {book.pages}</span>
      </div>
    </div>
  );
}
