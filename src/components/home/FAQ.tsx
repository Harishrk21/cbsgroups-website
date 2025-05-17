import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import AnimatedElement from '../common/AnimatedElement';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What types of loans does Chetana Business Solutions offer?',
      answer: 'We offer a variety of loan products including Business Loans, MSME Loans, Working Capital Loans, and Project Finance. Each is tailored to meet specific business needs with flexible terms and competitive rates.'
    },
    {
      question: 'How long does the loan approval process take?',
      answer: 'Our streamlined process allows for loan approval within 48-72 hours for most applications. Once approved, disbursement typically happens within 1-2 business days, depending on the loan amount and documentation.'
    },
    {
      question: 'What documents are required for a business loan application?',
      answer: 'Required documents typically include business registration proof, PAN card, GST registration (if applicable), bank statements for the last 6 months, ITR for the last 2 years, and KYC documents of the directors/partners/proprietors.'
    },
    {
      question: 'Is there a minimum business vintage required to qualify for a loan?',
      answer: 'Yes, most of our loan products require a minimum business vintage of 1-2 years. However, we do have special programs for startups and newer businesses with alternative eligibility criteria.'
    },
    {
      question: 'Are there any processing fees or hidden charges?',
      answer: 'We charge a nominal processing fee which varies based on the loan type and amount. There are no hidden charges, and all applicable fees are clearly communicated before loan finalization. We pride ourselves on transparency in all our dealings.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-light">
      <div className="container">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our loan products and processes."
        />

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AnimatedElement key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp size={20} className="flex-shrink-0 text-primary" />
                ) : (
                  <ChevronDown size={20} className="flex-shrink-0" />
                )}
              </button>
              <div
                className={`faq-answer ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;