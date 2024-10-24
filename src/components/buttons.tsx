"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>Loading...</>;
  }

  if (status === "authenticated") {
    return (
      <div className="flex justify-center items-center gap-x-4">
        <Link href="/about">
          {/* TODO: Redirect to user relevant info */}
          <Image
            src={session.user?.image ?? "/assets/user.png"}
            alt="user"
            width={32}
            height={32}
          />
        </Link>
        <SignOutButton />
      </div>
    );
  }

  return (
    <button onClick={() => signIn()} className="text-lg">
      Sign In
    </button>
  );
}

export function SignOutButton() {
  return (
    <button onClick={() => signOut()} className="text-lg">
      Sign Out
    </button>
  );
}
