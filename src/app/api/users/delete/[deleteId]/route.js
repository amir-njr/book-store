// NextAuth
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
// DB
import connectDB from "@/utils/connectDB";
// Models
import User from "@/models/User";

export async function DELETE(req, context) {
  try {
    await connectDB();
    const id = context.params.deleteId;
    const session = await getServerSession(req);

    if (!session)
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری تان شوید" },
        { status: 401 }
      );
    await User.deleteOne({ _id: id });

    return NextResponse.json({ message: "کاربر حذف شد" }, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "مشکلی پیش آمده است" },
      { status: 500 }
    );
  }
}
