import SignUpForm from "@/app/components/SignUpForm";
import Image from "next/image";
import Link from "next/link";
/* import { Image, Link } from "@nextui-org/react"; */

const SignupPage = () => {
  return (
    <div className="flex bg-[url('/img/bg.jpg')] bg-cover h-screen bg-center items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center items-center max-w-[1240px] my-48">
        <div className="md:col-span-2 flex justify-center items-center">
          <p className="text-center p-2">Redan registrerad?</p>
          <Link href={"/auth/signin"}>Logga in</Link>
        </div>
        <SignUpForm />
        <Image src="/LoggaText.svg" alt="Login Form" width={500} height={500} />
      </div>
    </div>
  );
};

export default SignupPage;
