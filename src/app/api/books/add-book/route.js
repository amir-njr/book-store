import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import Book from "@/models/Book";
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

  const { title, price , description , category , image } = await req.json();
  if (!title || !price)
    return NextResponse.json(
      { error: "لطفا اطلاعات معتبری وارد نمایید" },
      { status: 400 }
    );
  console.log("Start");
  console.log(title, price);
  const b = await Book.create({
    title,
    description,
    price: +price,
    category,
    image,
    userId: new Types.ObjectId(user._id),
  });

  console.log(b, "End");
  return NextResponse.json(
    { message: "با موفقیت ثبت کتاب انجام شد" },
    { status: 201 }
  );
}
