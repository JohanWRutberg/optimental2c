import Link from "next/link";

export default function Denied() {
  return (
    <section className="flex flex-col bg-[url('/img/bg.jpg')] bg-cover h-screen bg-center items-center justify-center">
      <h1 className="text-5xl">Ingen åtkomst!</h1>
      <p className="text-2xl max-w-2xl text-center mt-10">
        Du är inloggad som USER, och saknar rätt behörighet för att se denna sida!
      </p>
      <Link href="/" className="text-2xl underline ">
        Tillbaka till startsidan
      </Link>
    </section>
  );
}
