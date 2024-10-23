import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Booky is our solution to helping you connect to your favorite books!",
};

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>We want to sell you books!</p>
    </div>
  );
};

export default AboutPage;
