"use client";

import { useState, useRef } from "react";
import { Play } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function HowItWorks() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.muted = false;
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-gray-50/60 overflow-hidden relative border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <ScrollReveal direction="up" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
              How SaHak Works
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Download the SaHak app from App Store or Play Store, create an account, set your learning goals, and connect with peer study partners.
            </p>
          </ScrollReveal>
        </div>

        {/* 3-Column Layout: Left Steps, Center Phone Mockup, Right Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column (Step 1 & Step 2) */}
          <div className="lg:col-span-4 space-y-12 sm:space-y-16 text-center lg:text-right">
            
            {/* Step 1 */}
            <ScrollReveal direction="right" delay={150}>
              <div className="group cursor-pointer flex flex-col items-center lg:items-end transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-blue-100/90 text-[#1966DD] group-hover:bg-[#1966DD] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/25 font-extrabold text-2xl flex items-center justify-center mb-4 shadow-sm transition-all duration-300">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1966DD] mb-2 tracking-tight transition-colors">
                  Request a Peer
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                  Choose your subject, learning goals, and session type that fits your needs.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal direction="right" delay={250}>
              <div className="group cursor-pointer flex flex-col items-center lg:items-end transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-blue-100/90 text-[#1966DD] group-hover:bg-[#1966DD] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/25 font-extrabold text-2xl flex items-center justify-center mb-4 shadow-sm transition-all duration-300">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1966DD] mb-2 tracking-tight transition-colors">
                  Match with a Peer
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                  SaHak will match you with the nearest available study partner.
                </p>
              </div>
            </ScrollReveal>

          </div>

          {/* Center Column: Phone Mockup with Background Circle Accent */}
          <div className="lg:col-span-4 flex justify-center items-center my-6 lg:my-0">
            <ScrollReveal direction="scale" delay={200} className="relative flex justify-center items-center">
              
              {/* Background Colored Circle Accent with Ambient Glow */}
              <div className="absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-84 lg:h-84 bg-gradient-to-tr from-[#1966DD] to-blue-500 rounded-full blur-xs shadow-2xl shadow-blue-500/30 pointer-events-none" />

              {/* Realistic Mobile Phone Container */}
              <div className="relative z-10 w-[240px] sm:w-[260px] aspect-[9/19] bg-gray-950 rounded-[40px] p-1.5 shadow-2xl border-4 border-gray-900 ring-1 ring-black/80">
                
                {/* Hardware Side Buttons */}
                <div className="absolute -left-1.5 top-20 w-1 h-8 bg-gray-800 rounded-l-md" />
                <div className="absolute -left-1.5 top-32 w-1 h-8 bg-gray-800 rounded-l-md" />
                <div className="absolute -right-1.5 top-24 w-1 h-12 bg-gray-800 rounded-r-md" />

                {/* Phone Notch (Dynamic Island) */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2 pointer-events-none shadow-md">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-900/40 border border-blue-400/30" />
                </div>

                {/* Inner Screen Container for Local MP4 Video */}
                <div 
                  onClick={togglePlay}
                  className="w-full h-full bg-gray-950 rounded-[32px] overflow-hidden relative shadow-inner flex items-center justify-center cursor-pointer group"
                >
                  <video
                    ref={videoRef}
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover rounded-[32px]"
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src="/videos/app-demo.mp4?v=6" type="video/mp4" />
                  </video>

                  {/* Play Button Overlay (shown when paused) */}
                  {!isPlaying && (
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex flex-col items-center justify-center z-20 transition-all duration-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlay();
                        }}
                        aria-label="Play video"
                        className="w-16 h-16 rounded-full bg-[#1966DD] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group-hover:bg-blue-600"
                      >
                        <Play className="w-7 h-7 ml-1 fill-current" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </ScrollReveal>
          </div>

          {/* Right Column (Step 3 & Step 4) */}
          <div className="lg:col-span-4 space-y-12 sm:space-y-16 text-center lg:text-left">
            
            {/* Step 3 */}
            <ScrollReveal direction="left" delay={300}>
              <div className="group cursor-pointer flex flex-col items-center lg:items-start transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-blue-100/90 text-[#1966DD] group-hover:bg-[#1966DD] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/25 font-extrabold text-2xl flex items-center justify-center mb-4 shadow-sm transition-all duration-300">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1966DD] mb-2 tracking-tight transition-colors">
                  Enjoy Your Session
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                  Meet your study partner in live rooms, solve problems, and learn together.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 4 */}
            <ScrollReveal direction="left" delay={400}>
              <div className="group cursor-pointer flex flex-col items-center lg:items-start transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-blue-100/90 text-[#1966DD] group-hover:bg-[#1966DD] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/25 font-extrabold text-2xl flex items-center justify-center mb-4 shadow-sm transition-all duration-300">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1966DD] mb-2 tracking-tight transition-colors">
                  Pay and Rate
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                  Complete the session, rate your peer partner, and build your reputation.
                </p>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
}
