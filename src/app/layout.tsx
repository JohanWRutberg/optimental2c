import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import "./globals.css";
import { Inter } from "next/font/google";
import SessionProvider from "./SessionProvider";
import Navbar from "./components/Navbar";
import Appbar from "./components/Appbar";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {/* <SessionProvider session={session}>
          <Navbar />
          <div className="bg-[#343541]">{children}</div>
        </SessionProvider> */}
        <Providers>
          <Appbar />
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
