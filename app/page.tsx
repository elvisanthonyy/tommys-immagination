"use client";
import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex relative bg-linear-to-b from-background to-white/50 flex-col min-h-screen items-center">
      <Nav />
      <main className="min-h-dvh flex flex-col items-center w-full pt-30">
        <div className="w-full px-8 items-center relative h-80 flex overflow-hidden">
          <div className="h-60 flex overflow-hidden items-center justify-center z-5 w-60 rounded-full absolute top-[50%] -translate-y-[50%] -right-20 bg-white">
            <Image
              height={1000}
              width={1000}
              src={"/profile.png"}
              alt="main image"
              draggable={false}
              className="w-full"
            />
          </div>
          <div className="z-20">
            <div className="text-xl font-bold bg-white/10 backdrop-blur-2xl px-3 rounded-2xl py-2 shadow-2xl mb-2 border">
              Tommy's Immagination
            </div>
            <div className="font-light ml-1 text-black/60 text-sm">
              Fashion Designer
            </div>
            <div className="w-40 text-white flex items-center justify-center mt-5 h-12 bg-nav-black rounded-2xl">
              Contact
            </div>
          </div>
        </div>
        <div className="w-full text-lg flex flex-col items-start px-8">
          <div className="mb-5 w-10 h-10 rounded-2xl bg-nav-black text-background flex items-center justify-center">
            <FaFacebook />
          </div>
          <div className="mb-5 w-10 h-10 rounded-2xl bg-nav-black text-background flex items-center justify-center">
            <FaInstagram />
          </div>
          <div className="mb-5 w-10 h-10 rounded-2xl bg-nav-black text-background flex items-center justify-center">
            <FaWhatsapp />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
