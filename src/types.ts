export type TBook = {
  title: string;
  author: string;
  ISBN: string;
  pages: number;
  price: number;
  publisher: string;
  year: number;
  language: string;
  category: string;
};

export type TProps = {
  children: React.ReactNode;
};
