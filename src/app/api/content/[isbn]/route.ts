import { books } from "@/data";
import { TBook } from "@/types";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { isbn: string } }
) {
  const targetBook = books.find((book: TBook) => book.ISBN === params.isbn);

  if (targetBook) {
    return NextResponse.json({ book: targetBook, status: req.statusCode });
  }

  return NextResponse.json({ book: null, status: req.statusCode });
}
