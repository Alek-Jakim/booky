import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-2 py-4 gap-8 bg-stone-300">
      <div className="w-1/4  text-center">
        <Link href="/" className="">
          <span className="text-3xl font-bold">Booky</span>
        </Link>
      </div>

      <div className="flex justify-between items-center gap-8 mr-12 text-xl w-1/4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/catalogue" className="hover:underline">
          Catalogue
        </Link>
      </div>
    </nav>
  );
}
