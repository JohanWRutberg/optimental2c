import Link from "next/link";

export default function Files() {
  return (
    <section className="flex flex-col bg-[url('/img/bg.jpg')] bg-cover h-screen bg-center items-center justify-center">
      <h1 className="text-5xl">Dokument - Du är inloggad som ADMIN</h1>
      <p className="text-2xl max-w-2xl text-center mt-10">Det här är Files sidan med uppladdade dokument.</p>
      <Link href="/" className="text-2xl underline ">
        Tillbaka till startsidan
      </Link>
    </section>
  );
}