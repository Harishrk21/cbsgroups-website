import React from 'react';
import { ClipboardCheck, FileSearch, Ban as Bank, CheckCircle } from 'lucide-react';
import AnimatedElement from '../common/AnimatedElement';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardCheck size={32} />,
      title: 'Apply Online',
      description: 'Fill out our simple online application form with your business details and loan requirements.'
    },
    {
      icon: <FileSearch size={32} />,
      title: 'Document Verification',
      description: 'Submit the required documents for our team to verify your eligibility and business profile.'
    },
    {
      icon: <Bank size={32} />,
      title: 'Loan Approval',
      description: 'Get your loan approved within 48-72 hours with transparent terms and competitive rates.'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Disbursement',
      description: 'Receive the approved loan amount directly in your business bank account.'
    }
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        {/* H2 for SEO structure */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple 4-Step Loan Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've streamlined our loan application and approval process to get you funded quickly with minimal hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Progress Line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gray-200 z-0">
            <div className="absolute left-0 top-0 h-full bg-primary" style={{ width: '100%' }}></div>
          </div>

          {steps.map((step, index) => (
            <AnimatedElement key={index} delay={index} className="relative z-10">
              <div className="card h-full p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary mx-auto">
                  {step.icon}
                </div>
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-sm">
                  {index + 1}
                </div>
                {/* H3 for each step */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-text-light">{step.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;