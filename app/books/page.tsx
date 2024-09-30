import prisma from "@/lib/prisma";
import Link from "next/link";

const BooksPage = async () => {
  const books = await prisma.book
    .findMany({
      include: {
        author: true,
      },
    })
    .then((res) => res);

  return (
    <div className="flex flex-col justify-center items-center gap-8 h-3/4">
      <span className="text-4xl font-bold">All Books</span>

      <div className="grid grid-cols-3 gap-8">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex flex-col gap-4 w-[300px] p-4 border border-black rounded-lg"
          >
            <span className="text-lg font-bold">
              {book.title} - {book.author.name}
            </span>
            <span>{book.description}</span>
            <Link href={`/books/${book.id}`} className="w-full" passHref>
              <button className="p-2 border border-black bg-green-400 font-bold hover:bg-green-800 hover:text-white w-full">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
