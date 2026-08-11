"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "What is SaHak and how does it work?",
      answer:
        "SaHak is a peer-to-peer collaborative learning platform built for Cambodian students. It matches you with compatible study partners based on your subjects, skill level, and schedule so you can solve problem sets, exchange study guides, and learn together.",
    },
    {
      question: "Is SaHak free to use for students?",
      answer:
        "Yes! SaHak is free for all students to join. You can find study partners, join group study rooms, and access shared community learning resources at zero cost.",
    },
    {
      question: "How can I earn money on SaHak?",
      answer:
        "If you excel in specific academic subjects or technical skills (such as Coding, Math, or Languages), you can apply to become a peer mentor. By hosting guided study sessions and sharing top-rated study guides, top mentors earn over $100 per month.",
    },
    {
      question: "How does the peer matching system work?",
      answer:
        "Our smart matching system analyzes your university/high school courses, learning goals, preferred study times, and skill level to connect you with peers who complement your study style.",
    },
    {
      question: "What subjects do we have?",
      answer:
        "SaHak supports a wide range of academic subjects including Math, Chemistry, History, Social Studies, Khmer, Physics, and Earth Science.",
    },
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
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Have questions about SaHak? We have answers. Learn how our peer learning and mentoring network works.
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
