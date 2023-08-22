// NextAuth
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
// DB
import connectDB from "@/utils/connectDB";
// Models
import User from "@/models/User";
import Book from "@/models/Book";
// Mongoose
import { Types } from "mongoose";

export async function POST(req) {
  await connectDB();

  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json(
      { error: "لطفا وارد حساب کاربری تان شوید" },
      { status: 401 }
    );

  const user = await User.findOne({ email: session.user.email });
  if (!user)
    return NextResponse.json({ error: "لطفا ثبت نام نمایید" }, { status: 404 });

  const { title, price, description, category } = await req.json();
  if (!title || !price)
    return NextResponse.json(
      { error: "لطفا اطلاعات معتبری وارد نمایید" },
      { status: 400 }
    );
  await Book.create({
    title,
    description,
    price: +price,
    category,
    userId: new Types.ObjectId(user._id),
  });

  return NextResponse.json(
    { message: "با موفقیت ثبت کتاب انجام شد" },
    { status: 201 }
  );
}

// export async function PATCH(req) {
//   await connectDB();

//   const session = await getServerSession(authOptions);
//   if (!session)
//     return NextResponse.json(
//       { error: "لطفا وارد حساب کاربری تان شوید" },
//       { status: 401 }
//     );

//   const user = await User.findOne({ email: session.user.email });
//   if (!user)
//     return NextResponse.json({ error: "لطفا ثبت نام نمایید" }, { status: 404 });

//   const { title, price, description, category } = await req.json();

//   if (!title || !price || !description || !category)
//     return NextResponse.json(
//       { error: "لطفا اطلاعات معتبری وارد نمایید" },
//       { status: 400 }
//     );
//   const book = await Book.findOne({name : title});
//   console.log(JSON.parse(book), "iiiiiiiiiiii");

//   if (title !== book.title)
//     return NextResponse.json(
//       { error: "کتابی با این نام ثبت نشده است" },
//       { status: 401 }
//     );

// }

