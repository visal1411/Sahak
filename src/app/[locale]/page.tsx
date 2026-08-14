import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import CommunitySection from "@/components/CommunitySection";
import PersonalizedLearning from "@/components/PersonalizedLearning";
import EarnSection from "@/components/EarnSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import DownloadApp from "@/components/DownloadApp"; // Added missing import

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased text-gray-900 selection:bg-[#1966DD] selection:text-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <PersonalizedLearning />
      <EarnSection />
      <CommunitySection />
      <FaqSection />
      <Footer />
      <DownloadApp />
    </main>
  );
}
