//incremental static regeneration
export const revalidate = 420;

import { TBook } from "@/types";
import Link from "next/link";

// Use for data that doesn't change often - generate dynamic routes at build time
export async function generateStaticParams() {
  const books = await fetch(`http://localhost:3000/api/content`).then((res) =>
    res.json()
  );

  return books.map((book: TBook) => ({
    isbn: book.ISBN,
  }));
}

export default async function CataloguePage() {
  const books = await fetch(`http://localhost:3000/api/content`).then((res) =>
    res.json()
  );

  if (!books || !books.length) {
    return <>No books were found...</>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-full gap-y-12 overflow-hidden">
      <div>
        <h1 className="text-3xl font-bold">Our Book Catalogue</h1>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {books.map((book: TBook) => {
          return (
            <div
              key={book.ISBN}
              className="flex flex-col justify-center items-center gap-x-2 gap-y-8  border border-2 p-2 border-black rounded-xl cursor-pointer"
            >
              <span className="text-lg font-bold">{book.title}</span>
              <span>Written by {book.author}</span>
              <Link
                href={`/catalogue/${book.ISBN}`}
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
