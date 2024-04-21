import SignInForm from "@/app/components/SignInForm";
import Link from "next/link";

interface Props {
  searchParams: {
    callbackUrl?: string;
  };
}

const SigninPage = ({ searchParams }: Props) => {
  console.log({ searchParams });

  return (
    <div className="flex flex-col bg-[url('/img/bg.jpg')] bg-cover h-screen bg-center items-center justify-center">
      <SignInForm callbackUrl={searchParams.callbackUrl} />
      <Link className="mt-5" href={"/auth/forgotPassword"}>
        Glömt ditt lösenord?
      </Link>
    </div>
  );
};

export default SigninPage;
