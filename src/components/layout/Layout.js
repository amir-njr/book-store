// NextAuth
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// DB
import connectDB from "@/utils/connectDB";
// Models
import User from "@/models/User";

// Components
import Footer from "./Footer";
import Header from "./Header";

async function Layout  ({ children }) {
  await connectDB()
  const session = await getServerSession(authOptions)
  const user = await User.findOne({email : session?.user.email})
  return (
    <>
      <Header userName={user?.name} />
      <div className="min-h-screen my-10">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
