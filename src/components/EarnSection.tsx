import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { useTranslations } from "next-intl";

export default function EarnSection() {
  const t = useTranslations("EarnSection");

  return (
    <section className="py-6 sm:py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100} className="max-w-4xl ml-auto">
          <div className="group relative bg-gradient-to-br from-[#FF1A1A] via-[#E60000] to-[#B30000] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-red-400/20 overflow-hidden">
            
            {/* Ambient Background Glowing Orb */}
            <div className="absolute -top-24 -right-24 w-56 h-56 bg-amber-300/25 rounded-full blur-2xl animate-pulse-glow pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-rose-400/20 rounded-full blur-2xl animate-pulse-glow pointer-events-none" />
            
            {/* Decorative Subtle Grid overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: Dollar-Eyes Smiley Face Graphic */}
              <div className="md:col-span-5 order-2 md:order-1 flex justify-center items-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 flex items-center justify-center p-2">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/30 animate-[spin_25s_linear_infinite] pointer-events-none" />
                  <div className="absolute inset-2 bg-white/10 rounded-full blur-sm scale-95" />
                  
                  <Image
                    src="/icons/rich-smile-icon.svg"
                    alt="Rich Smile Icon"
                    width={220}
                    height={220}
                    className="animate-float relative z-10 w-full h-full object-contain drop-shadow-md group-hover:scale-105 group-hover:rotate-3 transition-all duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Right Column: Copy text */}
              <div className="md:col-span-7 order-1 md:order-2 flex flex-col items-start text-left">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[11px] font-semibold text-red-100 mb-3 shadow-xs">
                  {t("badge")}
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3">
                  {t("header")}
                </h2>
                <p className="text-sm sm:text-base text-white/95 font-normal leading-relaxed max-w-md">
                  {t("description")}
                </p>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


