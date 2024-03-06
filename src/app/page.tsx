import Hero from "./components/Hero";

export default function Home() {
  const message =
    "Utforska ditt inre välmående, Vägen till självinsikt och förändring";
  return (
    <main className="bg-[url('/img/bg.jpg')] bg-cover  h-screen bg-center">
      <div className="bg-[#0000002f] absolute top-0 left-0 w-full h-screen z-0">
        <Hero message={message} />
      </div>
    </main>
  );
}
