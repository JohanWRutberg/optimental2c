"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { LuLogIn, LuLogOut } from "react-icons/lu";

function Login() {
  const [textColor, setTextColor] = useState("white");
  return (
    <div>
      <ul
        style={{ color: `${textColor}` }}
        className="hidden md:flex text cursor-pointer"
      >
        <li
          onClick={() => signIn("google")}
          className="p-4 hover:text-[#EA5709]"
        >
          <LuLogIn className="text-4xl animate-pulse" />
        </li>
      </ul>
    </div>
  );
}

export default Login;
