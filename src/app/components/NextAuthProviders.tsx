import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const NextAuthProviders = () => {
  const googleSignIn = async () => {
    const result = await signIn("google", {
      callbackUrl: "/",
    });
    // console.log({ result });
  };
  return (
    <div className="flex justify-center items-center p-4 border-t m-3">
      <Button
        color="primary"
        onClick={googleSignIn}
        className="bg-slate-50 text-black"
      >
        <FcGoogle className="w-6 h-6 bg-slate-50" /> Logga in med Google
      </Button>
    </div>
  );
};

export default NextAuthProviders;
