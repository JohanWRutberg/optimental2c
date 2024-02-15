import Hero from "../app/components/Hero";
import { sendMail } from "@/lib/mail";

export default async function Home() {
  const heading = "En Rubrik";
  const message = "Ett Meddelande";
  return (
    <main className="">
      <div className="absolute top-0 left-0 w-screen h-screen z-0">
        <Hero heading={heading} message={message} />
      </div>
    </main>
  );
}
