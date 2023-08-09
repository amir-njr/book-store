// NextAuth
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
// Redirect
import { redirect } from "next/navigation";

// Components
import SignIn from "@/components/template/SignIn/SignIn";

async function signin() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return (
    <section>
      <SignIn />
    </section>
  );
}

export default signin;
