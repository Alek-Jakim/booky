"use client";
import React from "react";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>Loading...</>;
  }

  if (status === "authenticated") {
    return (
      <Link href={"/dashboard"}>
        <Image
          src={session.user?.image ?? "/images/mememan.jpeg"}
          alt={session.user?.name ?? "User"}
          width={32}
          height={32}
          className="h-[32px] w-[32px]"
        />
      </Link>
    );
  }

  return (
    <button className="text-xl font-bold underline" onClick={() => signIn()}>
      Sign In
    </button>
  );
}

export function SignOutButton() {
  return (
    <button className="text-xl font-bold underline" onClick={() => signOut()}>
      Sign Out
    </button>
  );
}
