import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section id="home" className="relative bg-white pt-12 pb-16 lg:pt-20 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text & CTA Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6">
                Learn Better, Together.
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={200}>
              <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed mb-8 max-w-xl">
                Break out of the solo learning grind. We connect you with peers who share your goals so you can teach, learn, and grow as a team.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href="#download"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#1966DD] text-white font-semibold text-base shadow-sm hover:bg-[#1556BD] hover:shadow-md transition-all active:scale-[0.98]"
                >
                  Download App
                </a>
                
                <a
                  href="#how-it-works"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-gray-700 font-semibold text-base border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all active:scale-[0.98]"
                >
                  How It Works
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Illustration Column (6 cols - Balanced) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <ScrollReveal direction="scale" delay={250} className="w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl lg:max-w-2xl scale-105 lg:scale-110 origin-center lg:origin-right">
                <Image
                  src="/icons/hero.svg"
                  alt="SaHak Hero Peer Learning Illustration"
                  width={900}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
