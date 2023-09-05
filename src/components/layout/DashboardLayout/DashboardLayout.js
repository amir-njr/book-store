// DB
import connectDB from "@/utils/connectDB";
// NextAuth
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// Model
import User from "@/models/User";

// Components
import Aside from "./Aside";
import Header from "./Header";
// Module
import Div from "@/components/module/Div";

async function DashboardLayout({ children }) {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session.user.email });

  return (
    <div className="flex h-[100vh] max-w-[1500px] mx-auto" >
      <Aside role={user ? JSON.parse(JSON.stringify(user?.role)) : ""} />

      <Div>
        <Header
          createdAt={user ? JSON.parse(JSON.stringify(user?.createdAt)) : ""}
          name={user ? JSON.parse(JSON.stringify(user?.name)) : ""}
          role={user ? JSON.parse(JSON.stringify(user?.role)) : ""}
        />
        <div className="my-7">{children}</div>
      </Div>
    </div>
  );
}

export default DashboardLayout;
