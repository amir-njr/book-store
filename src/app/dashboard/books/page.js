import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Books from "@/components/template/Books/Books";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function books() {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  const [bookData] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "books",
        foreignField: "userId",
        localField: "_id",
        as: "userBooks",
      },
    },
  ]);

  return (
    <div>
      <Books adminsBook={bookData.userBooks} />
    </div>
  );
}

export default books;
