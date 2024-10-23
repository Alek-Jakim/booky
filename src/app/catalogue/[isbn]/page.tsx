import { TBook } from "@/types";
interface ICataloguePage {
  params: {
    isbn: string;
  };
}

export default async function BookPage({ params: { isbn } }: ICataloguePage) {
  const { book } = await fetch(
    `http://localhost:3000/api/content/${isbn}`
  ).then((res) => res.json());

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
