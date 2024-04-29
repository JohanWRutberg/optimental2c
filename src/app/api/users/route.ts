import { NextResponse } from "next/server";
import { getUsersByRole } from "@/lib/actions/userActions";

export async function GET() {
  const users = await getUsersByRole();
  console.log({ users });
  return NextResponse.json(users);
}
