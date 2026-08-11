import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function PersonalizedLearning() {
  return (
    <section className="py-6 sm:py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100} className="max-w-4xl mr-auto">
          <div className="group relative bg-gradient-to-br from-[#1A62D6] via-[#1657C1] to-[#0F4399] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-blue-400/20 overflow-hidden">
            
            {/* Ambient Background Glowing Orb */}
            <div className="absolute -top-24 -left-24 w-56 h-56 bg-blue-300/25 rounded-full blur-2xl animate-pulse-glow pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-indigo-400/20 rounded-full blur-2xl animate-pulse-glow pointer-events-none" />
            
            {/* Decorative Subtle Grid overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Left Text Content */}
              <div className="md:col-span-7 flex flex-col items-start text-left">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-blue-100 mb-3 shadow-xs">
                  Adaptive Path
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3">
                  Personalized Learning
                </h2>
                <p className="text-sm sm:text-base text-blue-50/95 font-normal leading-relaxed max-w-md">
                  Break out of the solo learning grind. We connect you with peers who share your goals so you can teach, learn, and grow as a team.
                </p>
              </div>

              {/* Right Graphic: Together Icon */}
              <div className="md:col-span-5 flex justify-center items-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 flex items-center justify-center p-2">
                  <Image
                    src="/icons/together.svg"
                    alt="Together Personalized Learning Icon"
                    width={220}
                    height={220}
                    className="animate-float relative z-10 w-full h-full object-contain drop-shadow-md brightness-0 invert group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

