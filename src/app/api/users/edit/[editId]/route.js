// NextAuth
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth/[...nextauth]/route";
// DB
import connectDB from "@/utils/connectDB";
// Models
import User from "@/models/User";

export async function PATCH(req, context) {
  await connectDB();

  const { name, lastName, email, nationalCode, phone } = await req.json();

  if (!name || !lastName || !email || !nationalCode || !phone)
    return NextResponse.json(
      { error: "اطلاعات به درستی وارد نشده است" },
      { status: 401 }
    );

  const id = context.params.editId;

  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json(
      { error: "لطفا وارد حساب کاربری تان شوید" },
      { status: 401 }
    );

  const editUser = await User.findOne({ _id: id });
  editUser.name = name;
  editUser.lastName = lastName;
  editUser.email = email;
  editUser.nationalCode = nationalCode;
  editUser.phone = phone;
  editUser.save();

  return NextResponse.json({ message: "کاربر ویرایش شد" }, { status: 201 });
}
