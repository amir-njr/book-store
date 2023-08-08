// NextAuth
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// User
import User from "@/models/User";
// DB
import connectDB from "@/utils/connectDB";
// Common
import { verifyPassword } from "@/utils/common";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password)
          throw new Error("اطلاعات به درستی وارد نشده است");

        await connectDB();

        const user = await User.findOne({ email });

        if (!user) throw new Error("شما هنوز ثبت نام نکرده اید");

        const valid = await verifyPassword(password, user.password);
        if (!valid) throw new Error("رمز عبور یا ایمیل نادرست می باشد");

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
