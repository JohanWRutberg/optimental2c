import Hero from "../app/components/Hero";
import { sendMail } from "@/lib/mail";
import Parallax from "./components/Parallax";

export default async function Home() {
  return (
    <main>
      <Parallax />
    </main>
  );
}
