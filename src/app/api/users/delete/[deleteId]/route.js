// NextAuth
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth/[...nextauth]/route";
// DB
import connectDB from "@/utils/connectDB";
// Models
import User from "@/models/User";

export async function DELETE(req, context) {
  await connectDB();

  const id = context.params.deleteId;

  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json(
      { error: "لطفا وارد حساب کاربری تان شوید" },
      { status: 401 }
    );

  await User.deleteOne({ _id: id });

  return NextResponse.json({ message: "کاربر حذف شد" }, { status: 201 });
}
