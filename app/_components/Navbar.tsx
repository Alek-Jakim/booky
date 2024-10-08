import Image from "next/image";
import Link from "next/link";

import { SignInButton, SignOutButton } from "./buttons";
import { AuthCheck } from "./AuthCheck";

const Navbar = () => {
  return (
    <nav className="bg-green-500 flex p-x-4 p-y-2 text-white justify-between items-center">
      <div className="flex justify-center items-center gap-4 pl-8">
        <Link href={"/"}>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={125}
            height={125}
            priority
            className="w-[125px] h-[125px]"
          />
        </Link>
        <span className="text-4xl font-bold">Booky</span>
      </div>

      <div className="w-1/3 flex justify-around">
        <Link href="/" className="text-2xl hover:underline">
          Home
        </Link>
        <Link href="/about" className="text-2xl hover:underline">
          About
        </Link>
        <Link href="/books" className="text-2xl hover:underline">
          Books
        </Link>
        <div className="flex justify-center items-center gap-4">
          <SignInButton />
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
