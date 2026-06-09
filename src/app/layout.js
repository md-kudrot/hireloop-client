import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-slate-950">

        <div className=" z-10 absolute w-full h-full">
          <Image
            src="/images/Exclude.png"
            alt="Global network"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <NavBar />
        <main className="flex-1 pt-28">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}