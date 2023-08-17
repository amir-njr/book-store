import Hero from "@/components/template/Hero/Hero";
import HomePage from "@/components/template/HomePage/HomePage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

async function Home() {
  await connectDB();
  const session = await getServerSession(authOptions);

  const [userBook] = await User.aggregate([
    {
      $match: { email: session?.user.email },
    },
    {
      $lookup: {
        from: "books",
        foreignField: "userId",
        localField: "_id",
        as: "boooks",
      },
    },
  ]);
  return (
    <main className="container mx-auto border flex flex-col gap-10">
      <Hero />
      <HomePage bookData={userBook.boooks} />
    </main>
  );
}

export default Home;
