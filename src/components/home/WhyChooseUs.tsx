import React from 'react';
import { ClockIcon, Banknote, ShieldCheck, Users, FileCheck, ThumbsUp } from 'lucide-react';
import AnimatedElement from '../common/AnimatedElement';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <ClockIcon size={32} />,
      title: 'Quick Processing',
      description: 'Minimal documentation process with easy and speedy online application system.'
    },
    {
      icon: <FileCheck size={32} />,
      title: 'CIBIL Support',
      description: 'We provide support even if you have CIBIL issues, ensuring you get the financial help you need.'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Established Brand',
      description: 'Well-established brand with a proven track record of helping businesses grow across multiple cities.'
    },
    {
      icon: <ThumbsUp size={32} />,
      title: 'Customer Service',
      description: 'Exceptional customer service with personalized attention to your financial needs.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-primary text-white">
      <div className="container">
        {/* H2 for SEO structure */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Chetana Business Solutions
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            We are the leading private finance company providing comprehensive financial support across Chennai, Pondicherry, Hyderabad, and Bangalore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedElement key={index} delay={index} className="h-full">
              <div className="bg-white/10 p-6 rounded-lg h-full backdrop-blur-sm">
                <div className="mb-4 text-secondary">
                  {feature.icon}
                </div>
                {/* H3 for each feature */}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;