import Link from "next/link";

function Book(params: any) {
  const { blok: book } = params;

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
}

export default Book;
