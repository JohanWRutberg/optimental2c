"use client";
import Hero from "../app/components/Hero";

export default function Home() {
  const heading = "En Rubrik";
  const message = "Ett Meddelande";
  return (
    <main className="">
      <Hero heading={heading} message={message} />
    </main>
  );
}
