import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import "./globals.css";
import { Inter } from "next/font/google";
import Appbar from "./components/Appbar";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import CookiesConsent from "./components/CookiesConsent";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <html lang="en" className="dark text-foreground bg-background">
      <body className={inter.className}>
        <Providers>
          <Appbar />
          {children}
          <ToastContainer />
          <CookiesConsent />
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
