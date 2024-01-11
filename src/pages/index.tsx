import Image from "next/image";
import { Manrope } from "next/font/google";
import { NavBar } from "@/components/NavBar";


const inter = Manrope({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <main className={`${inter.className}`}>
      <NavBar />
      <div className="px-8 2xl:px-80 mt-20 h-screen">
        <div className="w-full">
          
        </div>
      </div>
    </main>
  );
}
