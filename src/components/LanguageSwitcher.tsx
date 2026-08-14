"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitch = (newLocale: string) => {
    if (newLocale === locale) return;
    
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className={`flex items-center space-x-1 sm:space-x-2 transition-opacity duration-200 ${isPending ? "opacity-50 pointer-events-none" : ""}`}>
      <button
        onClick={() => handleSwitch("en")}
        className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold rounded-md transition-colors ${
          locale === "en" ? "bg-[#1966DD] text-white shadow-xs" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleSwitch("kh")}
        className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold rounded-md transition-colors ${
          locale === "kh" ? "bg-[#1966DD] text-white shadow-xs" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        KH
      </button>
    </div>
  );
}
