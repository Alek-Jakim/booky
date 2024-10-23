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
    return <div>No book found</div>;
  }

  return <div>{book.title}</div>;
}
