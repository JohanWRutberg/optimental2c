import Link from "next/link";

export default function Denied() {
  return (
    <section className="flex flex-col gap-12 items-center mt-40">
      <h1 className="text-5xl">Access Denied</h1>
      <p className="text-3xl max-w-2xl text-center">
        Du är inloggad, men du saknar rätt behörighet för att se denna sida!
      </p>
      <Link href="/" className="text-3xl underline">
        Tillbaka till startsidan
      </Link>
    </section>
  );
}
