import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  /* console.log(session); */
  return (
    <div className="flex justify-center items-center mt-[20vh]">
      <h1 className="text-2xl">Det här är ADMIN sidan, och du har behörighet att se den!</h1>
    </div>
  );
};

export default AdminPage;
