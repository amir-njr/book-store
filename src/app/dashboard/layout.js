// NextAuth
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
// redirect
import { redirect } from "next/navigation";

// Components
import DashboardLayout from "@/components/layout/DashboardLayout/DashboardLayout";

async function dashboardLayout({ children }) {
  
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  return <DashboardLayout>{children}</DashboardLayout>;
}

export default dashboardLayout;
