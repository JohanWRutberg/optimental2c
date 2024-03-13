import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex justify-center items-center mt-40">
      This is admin dashboard
      {/* {JSON.stringify(session)} */}
    </div>
  );
};

export default AdminPage;
