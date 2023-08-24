// NextAuth
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
// DB
import connectDB from "@/utils/connectDB";
// Models
import Book from "@/models/Book";

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
    await Book.deleteOne({ _id: id });

    return NextResponse.json({ message: "کتاب حذف شد" }, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "مشکلی پیش آمده است" },
      { status: 500 }
    );
  }
}
