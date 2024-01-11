import Image from "next/image";
import { Manrope } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { ClientsSection } from "@/components/ClientsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { FeedbackSection } from "@/components/FeedbackSection";
import { ContactSection } from "@/components/ContactSection";

const inter = Manrope({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <main className={`${inter.className}`}>
      <NavBar />
      <div className="px-8 2xl:px-80 mt-20 h-screen">
        <div className="w-full">
          <HeroSection />
          <ClientsSection />
          <ProjectsSection />
          <FeedbackSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
