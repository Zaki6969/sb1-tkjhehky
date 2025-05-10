import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center py-5 text-left focus:outline-none"
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-blue-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const faqItems = [
    {
      question: "What types of transport permits do you help with?",
      answer: "We assist with all types of transport permits required for trucking and courier businesses, including national operating licenses, international permits, specialized cargo authorizations, and local delivery permits. Our services cover the complete application process, ensuring you meet all regulatory requirements."
    },
    {
      question: "How long does the permit application process typically take?",
      answer: "The timeline varies depending on permit type and local regulations, but typically ranges from 4-12 weeks. With our guidance, we ensure all paperwork is correctly completed the first time, preventing common delays. We provide regular updates throughout the process and work to expedite where possible."
    },
    {
      question: "What ongoing support do you provide after the permit is approved?",
      answer: "Our service includes continuous support for day-to-day operations, compliance monitoring, documentation management, and business optimization advice. We help ensure you maintain compliance with regulations, assist with any permit renewals, and provide guidance on operational challenges as they arise."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we work with transport businesses of all sizes, from individual owner-operators to larger fleets. Our services are scalable and can be tailored to meet the specific needs of your operation, whether you're just starting out or looking to optimize an established business."
    },
    {
      question: "What makes your service different from handling the application myself?",
      answer: "Our specialized knowledge of transport regulations and application procedures significantly increases your chance of first-time approval. We navigate complex bureaucratic processes daily, anticipate potential issues, and know exactly what authorities are looking for. This saves you time, prevents costly mistakes, and allows you to focus on running your business."
    },
    {
      question: "Is there a minimum contract period for your services?",
      answer: "We operate on a monthly service fee of €200 with no minimum contract period. You can cancel anytime with 30 days' notice. However, most clients choose to maintain our services for ongoing operational support and compliance guidance even after their permits are secured."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our transport management services and permit applications.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don't see your question here? Reach out to us directly.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};