import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) return redirect("api/auth/signin");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      Hello, GRank!
      <a href="api/auth/signout" className="underline">
        Logout
      </a>
    </main>
  );
}
