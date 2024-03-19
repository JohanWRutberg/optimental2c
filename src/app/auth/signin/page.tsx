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
    <div className="flex items-center justify-center bg-primary-blue flex-col mt-[20vh] max-w-[1240px] m-auto">
      <SignInForm callbackUrl={searchParams.callbackUrl} />
      <Link className="mt-5" href={"/auth/forgotPassword"}>
        Glömt ditt lösenord?
      </Link>
    </div>
  );
};

export default SigninPage;
