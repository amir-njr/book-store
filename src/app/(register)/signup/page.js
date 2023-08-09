// NextAuth
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
// Redirect
import { redirect } from "next/navigation";

// Components
import SignUp from "@/components/template/SignUp/SignUp";

async function signup() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return (
    <section>
      <SignUp />
    </section>
  );
}

export default signup;
