import { prisma } from "@/lib/prisma";

export default async function Home() {
  const books = await prisma.book.findMany().then((res) => res);

  return (
    <div>
      <span>Books</span>
      <div>
        {books.map((book) => (
          <div key={book.id}>
            <span>{book.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
