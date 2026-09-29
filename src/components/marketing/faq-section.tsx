"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "What makes Clonao different from AI writing tools?",
    answer: "Clonao is built around decisions, not just generation. It learns your brand, diagnoses what is missing, builds strategy, recommends your next best moves, and then helps you create.",
  },
  {
    question: "Does Clonao write posts for me?",
    answer: "Yes. But creation starts from your strategy, Brand Graph, and recommendations instead of a blank prompt.",
  },
  {
    question: "What is the Brand Graph?",
    answer: "It is Clonao’s structured understanding of your expertise, stories, opinions, proof, audience, offers, topics, and performance.",
  },
  {
    question: "What can I connect to Clonao?",
    answer: "LinkedIn history, websites, PDFs, notes, videos, podcasts, case studies, offers, and other knowledge sources.",
  },
  {
    question: "Is Clonao only for LinkedIn?",
    answer: "Clonao starts with LinkedIn, but the underlying system is designed around personal-brand intelligence rather than one content format.",
  },
  {
    question: "How does Clonao decide what I should do next?",
    answer: "It combines your Brand Graph, current strategy, content gaps, recent activity, and performance signals to prioritize the most useful next actions.",
  },
  {
    question: "Can I edit what Clonao learns about me?",
    answer: "Yes. Users should be able to review and correct the Brand Graph so Clonao stays aligned with how they want to position themselves.",
  },
] as const;

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-label="Frequently asked questions" className="py-24 sm:py-28 lg:py-36">
      <div className="marketing-container">
        <div className="mx-auto max-w-5xl border-t border-[#d7dde3]">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div key={question} className="border-b border-[#d7dde3]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-8 py-6 text-left text-base font-semibold text-[#101826] transition-colors hover:text-[#536273] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#101826] focus-visible:ring-offset-4 sm:py-7 sm:text-lg"
                >
                  <span>{question}</span>
                  <ChevronDown aria-hidden="true" className={`size-4 shrink-0 text-[#101826] transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : ""}`} strokeWidth={1.5} />
                </button>
                <div
                  id={answerId}
                  aria-hidden={!isOpen}
                  className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="max-w-3xl pb-6 pr-10 text-sm font-medium leading-6 text-[#536273] sm:pb-7 sm:text-base sm:leading-7">{answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
