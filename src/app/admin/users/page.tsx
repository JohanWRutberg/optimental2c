"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { User } from "@prisma/client";

export default function Users() {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState<User[]>([]);

  /* useEffect(() => {
    if (session) {
      fetch("/api/users")
        .then((response) => response.json())
        .then((responseData) => setUsers(responseData))
        .catch((error) => console.error("Error fetching users:", error));
    }
  }, [session]); */

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const responseData: User[] = await response.json();

        // Sort alphabetically by firstName
        const sortedUsers = responseData.sort((a: User, b: User) => a.firstName.localeCompare(b.firstName));

        setUsers(sortedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    if (session) {
      fetchUsers();
    }
  }, [session]);

  if (status === "loading") {
    return (
      <p className="flex flex-col bg-[url('/img/bg.jpg')] bg-cover h-screen bg-center items-center justify-center">
        Loading...
      </p>
    );
  }

  if (!session) {
    return <p>You are not authenticated.</p>;
  }

  return (
    <section className="flex flex-col bg-[url('/img/bg.jpg')] bg-cover h-screen bg-center items-center justify-center">
      <h1 className="text-4xl">Hej {session?.user?.firstName}!</h1>

      <div className="mt-10">
        <h2 className="text-3xl mb-4">Registrerade användare:</h2>
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
    </section>
  );
}
