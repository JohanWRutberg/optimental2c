"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { User } from "@prisma/client";
import { Spinner } from "@nextui-org/react";
import { motion } from "framer-motion";

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
        const sortedUsers = responseData.sort((a: User, b: User) => a.lastName.localeCompare(b.lastName));

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
      <div className="flex flex-col bg-[url('/img/bg.jpg')] bg-cover h-screen bg-center items-center justify-center">
        <Spinner label="Laddar användare..." color="warning" labelColor="warning" />
      </div>
    );
  }

  if (!session) {
    return <p>You are not authenticated.</p>;
  }

  return (
    <div className="flex bg-[url('/img/bg.jpg')] bg-cover h-screen bg-center items-center justify-center">
      <section className="flex flex-col py-4 px-8 min-w-96 max-w-md bg-white bg-opacity-5 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
        <h1 className="text-4xl">Hej {session?.user?.firstName}!</h1>

        <div className="mt-10">
          <h2 className="text-3xl mb-4">Registrerade användare:</h2>
          {users.length > 0 ? (
            <ul>
              {users.map((user) => (
                <li key={user.id} className="text-xl">
                  {user.lastName}, {user.firstName}
                </li>
              ))}
            </ul>
          ) : (
            <Spinner label="Laddar användare..." color="warning" labelColor="warning" />
          )}
        </div>
      </section>
    </div>
  );
}
