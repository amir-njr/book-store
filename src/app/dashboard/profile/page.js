import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

// Component
import Profile from "@/components/template/Dashboard/Profile/Profile";

async function profile() {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const userData = await User.findOne({ email: session.user.email });

  return (
    <div>
      <Profile data={JSON.parse(JSON.stringify(userData))} />
    </div>
  );
}

export default profile;
