// NextAuth
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
// DB
import connectDB from "@/utils/connectDB";
// Models
import Book from "@/models/Book";

export async function PATCH(req, context) {
  try {
    await connectDB();

    const { title, category, description, price } = await req.json();
    if (!title || !category || !description || !price)
      return NextResponse.json(
        { error: "اطلاعات به درستی ورد نشده است" },
        { status: 404 }
      );
    const id = context.params.editId;
    const session = await getServerSession(req);

    if (!session)
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری تان شوید" },
        { status: 401 }
      );
    const book = await Book.findOne({ _id: id });
    (book.title = title),
      (book.category = category),
      (book.price = price),
      (book.description = description),
      book.save();

    return NextResponse.json({ message: "کتاب ویرایش شد" }, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "مشکلی پیش آمده است" },
      { status: 500 }
    );
  }
}
