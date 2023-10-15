import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import SideBar from "./SideBar";
import Header from "./Header";
import Board from "./Board";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) return redirect("api/auth/signin");
  return (
    <main className="flex bg-gray-900 text-yellow-300 min-h-screen ml-16 width-full">
    <Header />
    <SideBar />
    <Board />
    </main>
    
  );
}
