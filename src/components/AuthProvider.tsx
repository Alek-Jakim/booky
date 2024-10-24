"use client";

/* 
SessionProvider uses client-side features without specifying that it's a client-side component.
That's why we need to do this workaround
*/
import { SessionProvider } from "next-auth/react";
import { TProps } from "@/types";

function AuthProvider({ children }: TProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default AuthProvider;
