import Hero from "../app/components/Hero";
import { sendMail } from "@/lib/mail";

export default async function Home() {
  /* await sendMail({
    to: "johan.w.rutberg@gmail.com",
    subject: "Test",
    body: "Test - Hello World"
  }); */
  const heading = "En Rubrik";
  const message = "Ett Meddelande";
  return (
    <main className="bg-[url('/hero1.jpg')] bg-cover min-h-screen bg-center">
      <div className="bg-[#00000059] absolute top-0 left-0 w-screen h-screen z-0">
        <Hero heading={heading} message={message} />
      </div>
    </main>
  );
}
