import ScrollReveal from "./ScrollReveal";

export default function DownloadApp() {
  return (
    <section id="download" className="py-16 sm:py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100}>
          <div className="relative bg-gradient-to-br from-[#1966DD] via-[#1455BD] to-[#0D3B85] rounded-3xl sm:rounded-[36px] p-8 sm:p-14 text-white overflow-hidden shadow-2xl border border-blue-400/20">
            
            {/* Background Ambient Glows & Grid */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Copy */}
              <div className="lg:col-span-7 text-left space-y-4">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-blue-100">
                  📱 Mobile & Web App
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Ready to Elevate Your Learning?
                </h2>

                <p className="text-base sm:text-lg text-blue-50/95 font-normal leading-relaxed max-w-xl">
                  Download the SaHak app today on iOS and Android to find compatible study peers, join live group study rooms, and start earning cash rewards.
                </p>

                {/* Store Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  {/* Apple App Store */}
                  <a
                    href="#download-ios"
                    className="inline-flex items-center space-x-3 px-6 py-3.5 rounded-xl bg-white text-gray-900 font-semibold shadow-md hover:bg-gray-100 hover:shadow-lg transition-all active:scale-[0.98]"
                  >
                    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.08-1.84.96-2.92-.93.04-2.09.62-2.76 1.4-.59.68-1.11 1.77-.97 2.84 1.05.08 2.14-.54 2.77-1.32Z" />
                    </svg>
                    <div className="text-left leading-tight">
                      <span className="text-[10px] uppercase font-semibold text-gray-500 block">Download on the</span>
                      <span className="text-sm font-extrabold text-gray-900">App Store</span>
                    </div>
                  </a>

                  {/* Google Play Store */}
                  <a
                    href="#download-android"
                    className="inline-flex items-center space-x-3 px-6 py-3.5 rounded-xl bg-white text-gray-900 font-semibold shadow-md hover:bg-gray-100 hover:shadow-lg transition-all active:scale-[0.98]"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24">
                      <path fill="#410593" d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 0 1-.61-1.637V3.451c0-.623.226-1.201.609-1.637z" />
                      <path fill="#00e676" d="M17.472 8.32L4.664.927A2.37 2.37 0 0 0 3.61 1.814L13.792 12l3.68-3.68z" />
                      <path fill="#ff3d00" d="M3.61 22.186a2.368 2.368 0 0 0 1.054.887l12.808-7.393L13.792 12 3.61 22.186z" />
                      <path fill="#ffc107" d="M21.144 10.435l-3.672-2.115L13.792 12l3.68 3.68 3.672-2.115a1.81 1.81 0 0 0 0-3.13z" />
                    </svg>
                    <div className="text-left leading-tight">
                      <span className="text-[10px] uppercase font-semibold text-gray-500 block">GET IT ON</span>
                      <span className="text-sm font-extrabold text-gray-900">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right App Feature Badge / Visual */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center text-white max-w-xs shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-3 text-2xl">
                    🚀
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-white">Join 5,000+ Students</h3>
                  <p className="text-xs text-blue-100 font-normal">
                    Start learning better together. Download today for iOS and Android devices across Cambodia.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
