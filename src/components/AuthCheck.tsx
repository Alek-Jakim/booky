"use client";

import { useSession } from "next-auth/react";

import { TProps } from "@/types";

export default function AuthCheck({ children }: TProps) {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <>{children}</>;
  } else {
    return <></>;
  }
}
