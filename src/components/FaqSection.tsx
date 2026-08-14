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
      question: "SaHak ជាអ្វី ហើយដំណើរការយ៉ាងដូចម្តេច?",
      answer:
        "SaHak គឺជាវេទិកាសិក្សាសហការរវាងមិត្តអ្នកសិក្សា ដែលបង្កើតឡើងសម្រាប់និស្សិតកម្ពុជា។ វាជួយស្វែងរកមិត្តសិក្សាដែលស័ក្តិសមនឹងអ្នក ដោយផ្អែកលើមុខវិជ្ជា កម្រិតជំនាញ និងពេលវេលាសិក្សារបស់អ្នក ដើម្បីឱ្យអ្នកអាចដោះស្រាយលំហាត់ ចែករំលែកឯកសារសិក្សា និងរៀនជាមួយគ្នា។",
    },
    {
      question: "តើ SaHak អាចប្រើបានដោយឥតគិតថ្លៃសម្រាប់និស្សិតឬទេ?",
      answer:
        "បាទ/ចាស! SaHak អាចប្រើបានដោយឥតគិតថ្លៃសម្រាប់និស្សិតគ្រប់រូប។ អ្នកអាចស្វែងរកមិត្តសិក្សា ចូលរួមថ្នាក់សិក្សាជាក្រុម និងប្រើប្រាស់ធនធានសិក្សាដែលសហគមន៍ចែករំលែកបានដោយឥតគិតថ្លៃ។",
    },
    {
      question: "តើខ្ញុំអាចរកចំណូលតាមរយៈ SaHak បានយ៉ាងដូចម្តេច?",
      answer:
        "ប្រសិនបើអ្នកពូកែក្នុងមុខវិជ្ជា ឬជំនាញដូចជា ការសរសេរកូដ គណិតវិទ្យា ឬភាសា អ្នកអាចដាក់ពាក្យធ្វើជា Mentor នៅលើ SaHak។ អ្នកអាចដឹកនាំការសិក្សាជាមួយមិត្ត និងចែករំលែកឯកសារសិក្សាដែលមានប្រយោជន៍ ដើម្បីរកចំណូលបាន។ Mentor ដែលមានសកម្មភាពល្អ អាចរកចំណូលបានលើសពី $100 ក្នុងមួយខែ។",
    },
    {
      question: "តើប្រព័ន្ធស្វែងរកមិត្តសិក្សាដំណើរការយ៉ាងដូចម្តេច?",
      answer:
        "ប្រព័ន្ធស្វែងរកមិត្តសិក្សាដ៏ឆ្លាតវៃរបស់យើង នឹងវិភាគលើ មុខវិជ្ជាសិក្សា គោលដៅសិក្សា ពេលវេលាដែលអ្នកចូលចិត្តសិក្សា និងកម្រិតជំនាញ របស់អ្នក ដើម្បីស្វែងរកមិត្តដែលសមស្រប និងមានរបៀបសិក្សាដែលសមស្របជាមួយអ្នក។",
    },
    {
      question: "តើSaHakមានមុខវិជ្ជាអ្វីខ្លះ?",
      answer:
        "SaHak គាំទ្រមុខវិជ្ជាសិក្សាជាច្រើន ដូចជា គណិតវិទ្យា គីមីវិទ្យា ប្រវត្តិវិទ្យា សិក្សាសង្គម ភាសាខ្មែរ រូបវិទ្យា និងវិទ្យាសាស្ត្រផែនដី។",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="py-16 sm:py-24 bg-gray-50/60 overflow-hidden relative border-t border-gray-100"
    >
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
              Have questions about SaHak? We have answers. Learn how our peer
              learning and mentoring network works.
            </p>
          </ScrollReveal>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal
                key={faq.question}
                direction="up"
                delay={100 * (index + 1)}
              >
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
