import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Users from "@/components/template/Users/Users";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function users() {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  const user = await User.findOne({ email: session.user.email });
  if (!user) redirect("/signup");

  const users = await User.find();

  return (
    <div>
      <Users users={users} />
    </div>
  );
}

export default users;
