import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  // Use middleware to protect instead
  /* if (!session || !session.user) redirect("/auth/signin"); */
  console.log(user);
  return (
    <div>
      <Image height={80} width={80} src={user?.image ?? ""} alt={user?.firstName ?? ""} className="rounded-full" />
      <div className="grid grid-cols-4 gap-y-4">
        <p>Förnamn:</p>{" "}
        <p className="col-span-3">
          {user?.firstName} {user?.lastName} {user?.name}
        </p>
        <p>Telefon:</p> <p className="col-span-3">{user?.phone}</p>
        <p>E-postadress:</p> <p className="col-span-3">{user?.email}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
