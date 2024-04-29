"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { User } from "@prisma/client"; // Import User type from Prisma client

export default function Users() {
  const [users, setUsers] = useState<User[]>([]); // Explicitly specify User[] type

  useEffect(() => {
    try {
      fetch("/api/users").then((response) => response.json().then((responseData) => setUsers(responseData)));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, []);

  return (
    <section className="flex flex-col bg-[url('/img/bg.jpg')] bg-cover h-screen bg-center items-center justify-center">
      <h1 className="text-5xl">Du är inloggad som ADMIN</h1>
      <p className="text-2xl max-w-2xl text-center mt-10">Det här är sidan som listar Användare för ADMIN.</p>
      <div className="mt-10">
        <h2 className="text-3xl mb-4">Registered Users:</h2>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id} className="text-xl">
                {user.firstName} {user.lastName}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading users...</p>
        )}
      </div>
      <Link href="/" className="text-2xl underline mt-8">
        Tillbaka till startsidan
      </Link>
    </section>
  );
}
