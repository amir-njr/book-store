"use client";

import { useEffect, useState } from "react";

import EditInput from "@/components/module/EditInput";
import { Toaster, toast } from "react-hot-toast";
import BreadCrumb from "@/components/module/BreadCrumb";

function Profile({ data }) {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    nationalCode: "",
    phone: "",
  });

  useEffect(() => {
    if (data) setUser(data);
  }, []);

  const editHandler = async () => {
    const res = await fetch(`/api/users/edit/${data._id}`, {
      method: "PATCH",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const response = await res.json();
    if (response.error) {
      toast.error(response.error);
    } else {
      toast.success(response.message);
    }
  };

  return (
    <div>
      <BreadCrumb title={["داشبورد", "پروفایل"]} />
      <div className="flex flex-col gap-4">
        <EditInput name="name" user={user} setUser={setUser} />
        <EditInput name="lastName" user={user} setUser={setUser} />
        <EditInput name="email" user={user} setUser={setUser} />
        <EditInput name="nationalCode" user={user} setUser={setUser} />
        <EditInput name="phone" user={user} setUser={setUser} />

        <button
          onClick={editHandler}
          className="bg-lime-500 rounded  px-4 py-2 mt-10 text-white font-bold"
        >
          ویرایش
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default Profile;
