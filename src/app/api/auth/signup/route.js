import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { hashPassword } from "@/utils/common";

export async function POST(req) {
  const { name, lastName, email, nationalCode, phone, password } =
    await req.json();

  if (!name || !lastName || !email || !nationalCode || !phone || !password)
    return NextResponse.json(
      { erorr: "اطلاعات به درستی وارد نشده است" },
      { status: 422 }
    );

  await connectDB();

  const user = await User.findOne({ email });

  if (user)
    return NextResponse.json(
      { erorr: "شما قبلا ثبت نام کرده اید" },
      { status: 422 }
    );

  const hashed = await hashPassword(password);

  await User.create({
    name: name,
    lastName: lastName,
    email: email,
    nationalCode: nationalCode,
    phone: phone,
    password: hashed,
  });

  return NextResponse.json(
    { message: "حساب کاربری با موفقیت ایجاد شد" },
    { status: 201 }
  );
}
