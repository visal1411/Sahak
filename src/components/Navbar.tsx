"use client";

import { useState } from "react";
import { Bell, Menu, X, User } from "lucide-react";

interface NavbarProps {
  logoUrl?: string; // Placeholder for when user provides logo image later
}

export default function Navbar({ logoUrl }: NavbarProps) {
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About Us", href: "#about" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            {logoUrl ? (
              <img src={logoUrl} alt="SaHak Logo" className="h-9 w-auto" />
            ) : (
              <a href="#" className="text-2xl sm:text-3xl font-extrabold text-[#1966DD] tracking-tight hover:opacity-90 transition-opacity">
                SaHak
              </a>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveTab(item.name)}
                  className={`relative py-2 text-sm sm:text-base font-semibold transition-colors ${
                    isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1966DD] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Download CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#download"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#1966DD] text-white font-semibold text-sm shadow-xs hover:bg-[#1556BD] transition-all active:scale-[0.98]"
            >
              Download App
            </a>

            <button
              type="button"
              className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors focus:outline-none rounded-full hover:bg-gray-100"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5 stroke-[2]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
            </button>

            <button
              type="button"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 text-gray-600 border border-gray-300 hover:border-gray-400 transition-all overflow-hidden focus:outline-none"
              aria-label="User Profile"
            >
              <User className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              type="button"
              className="p-1.5 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none"
              aria-label="Notifications"
            >
              <Bell className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white px-4 pt-2 pb-6 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveTab(item.name);
                setMobileMenuOpen(false);
              }}
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                activeTab === item.name
                  ? "bg-blue-50 text-[#1966DD]"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between px-3">
            <span className="text-sm font-medium text-gray-600">Account</span>
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
