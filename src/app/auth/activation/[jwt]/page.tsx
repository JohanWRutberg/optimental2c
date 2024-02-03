import { activateUser } from "@/lib/actions/authActions";
import { verifyJwt } from "@/lib/jwt";

interface Props {
  params: {
    jwt: string;
  };
}

const ActivationPage = async ({ params }: Props) => {
  const result = await activateUser(params.jwt);
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {result === "userNotExist" ? (
        <p className="text-red-500 text-2xl">Användaren existerar inte!</p>
      ) : result === "alreadyActivated" ? (
        <p className="text-red-500 text-2xl">Användaren är redan verifierad!</p>
      ) : result === "success" ? (
        <p className="text-green-500 text-2xl">Användaren är nu verifierad!</p>
      ) : (
        <p className="text-yellow-500 text-2xl">Typiskt! Någonting gick fel!</p>
      )}
    </div>
  );
};

export default ActivationPage;
