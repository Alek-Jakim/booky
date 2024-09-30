"use client";

import { SessionProvider } from "next-auth/react";

/* Why we don't use the SessionProvider component in the layout
is because it will throw an error; it uses client-side features without
specifying that it's a client component. Not all components in the 
React ecosystem have started specifying that they are client components
*/

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
