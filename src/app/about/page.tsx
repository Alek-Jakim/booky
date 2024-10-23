export const dynamic = "force-static"; // no necessary, just for demonstration

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Booky is our solution to helping you connect to your favorite books!",
};

const AboutPage = () => {
  return (
    <div className="h-4/5 w-1/2 m-auto flex flex-col justify-center items-center gap-y-8">
      <h1 className="text-4xl font-bold">About Us</h1>

      <span className="text-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
        temporibus sint eum repellendus minima harum incidunt numquam aspernatur
        eligendi, ullam vel quo iusto ipsa debitis tempora et. Possimus, nemo
        laborum! Repellendus deleniti a error libero.
      </span>
    </div>
  );
};

export default AboutPage;
