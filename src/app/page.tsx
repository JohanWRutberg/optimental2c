import Hero from "../app/components/Hero";
import { sendMail } from "@/lib/mail";
import Parallax from "./components/Parallax";

export default function Home() {
  return (
    <main>
      <Parallax />
      {/* <div className="flex items-center justify-center">
        <div className="h-[3000px] bg-slate-100 w-10"></div>
      </div> */}
    </main>
  );
}
