"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useTranslations } from "next-intl";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations("FaqSection");

  const faqs: FaqItem[] = [
    { question: t("q1"), answer: t("a1") },
    { question: t("q2"), answer: t("a2") },
    { question: t("q3"), answer: t("a3") },
    { question: t("q4"), answer: t("a4") },
    { question: t("q5"), answer: t("a5") },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-gray-50/60 overflow-hidden relative border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
              {t("header")}
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              {t("description")}
            </p>
          </ScrollReveal>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={faq.question} direction="up" delay={100 * (index + 1)}>
                <div className="border border-gray-200/90 rounded-2xl overflow-hidden bg-white shadow-xs hover:border-gray-300 transition-all">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-gray-900 text-lg hover:text-[#1966DD] transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-900 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
