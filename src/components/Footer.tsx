"use client";

import { MessageSquare, Send, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-400 pt-16 pb-12 border-t border-gray-800/80 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <ScrollReveal direction="up" delay={100} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800/80">

          {/* Brand & Description Column */}
          <div className="md:col-span-4 flex flex-col items-start space-y-4">
            <a href="#" className="flex items-center space-x-2 text-2xl font-extrabold text-white tracking-tight">
              <span className="text-[#1966DD]">SaHak</span>
            </a>

            <p className="text-sm text-gray-400 font-normal leading-relaxed max-w-sm">
              Empowering peer-to-peer collaborative learning. Connect with peers who share your goals, teach what you know, and learn together.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-700 transition-all duration-200"
                aria-label="Discord"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Columns */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Navigation</h3>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Resources</h3>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Learning Hub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="md:col-span-4 flex flex-col items-start space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Stay Updated</h3>
            <p className="text-sm text-gray-400">
              Subscribe to get the latest study guides, updates, and community news.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="w-full space-y-2">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#1966DD] focus:ring-1 focus:ring-[#1966DD] transition-all pr-12"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3.5 bg-[#1966DD] hover:bg-[#1556BD] text-white rounded-lg flex items-center justify-center transition-colors shadow-xs"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe anytime.</p>
            </form>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} SaHak. Built with <Heart className="w-3.5 h-3.5 text-red-500 inline fill-red-500" /> for Cambodian learners.
          </p>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}

