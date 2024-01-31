"use client";
import Hero from "../app/components/Hero";

export default function Home() {
  const heading = "En Rubrik";
  const message = "Ett Meddelande";
  return (
    <main className="bg-[url('/hero1.jpg')] bg-cover  h-screen bg-center">
      <div className="bg-[#00000059] absolute top-0 left-0 w-full h-screen z-0">
        <Hero heading={heading} message={message} />
      </div>
    </main>
  );
}
