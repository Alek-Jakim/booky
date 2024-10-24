import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import Link from "next/link";

async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // redirect("/api/auth/signin");

    return (
      <div className="h-full">
        <div className="flex flex-col justify-center items-center gap-4 h-4/5">
          <span className="text-2xl font-bold">
            Your have to be signed in to use the dashboard.
          </span>
          <div className="flex flex-col text-lg">
            <span>
              Click{" "}
              <Link href="/api/auth/signin" className="text-blue-800">
                here
              </Link>{" "}
              to log in.
            </span>
            <span>
              Click{" "}
              <Link href="/" className="text-blue-800">
                here
              </Link>{" "}
              to go back to the Home Page.
            </span>
          </div>
        </div>
      </div>
    );
  }

  const { user } = session;

  return (
    <div className="h-full">
      <div className="flex justify-center items-center gap-4 h-4/5">
        <Image
          src={user?.image ?? "/assets/user.png"}
          alt={`${user?.name}`}
          width={128}
          height={128}
          className="rounded-full"
        />
        <h3>Welcome {user?.name}</h3>
      </div>
    </div>
  );
}

export default DashboardPage;
