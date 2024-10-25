import Image from "next/image";
import Link from "next/link";

function Book(params: any) {
  const { blok: book } = params;

  console.log("BOOOOK", book);

  return (
    <div
      key={book._uid}
      className="flex flex-col justify-between items-center gap-x-2 gap-y-8  border border-2 p-2 border-black rounded-xl"
    >
      <div>
        <Image
          src={book.image.filename}
          alt={book.title}
          width={64}
          height={64}
        />
      </div>
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
