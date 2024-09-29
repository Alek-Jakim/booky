import { prisma } from "@/lib/prisma";

const BooksPage = async () => {
  const books = await prisma.book
    .findMany({
      include: {
        author: true,
      },
    })
    .then((res) => res);

  const authors = await prisma.author.findMany().then((res) => res);

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
