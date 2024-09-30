import prisma from "@/lib/prisma";

interface IBookPageProps {
  params: {
    bookId: string;
  };
}

const BookPage = async ({ params }: IBookPageProps) => {
  const book = await prisma.book.findUnique({
    where: {
      id: parseInt(params.bookId),
    },
  });

  return <div>{book?.title}</div>;
};

export default BookPage;
