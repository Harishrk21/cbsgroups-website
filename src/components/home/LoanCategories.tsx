import React from 'react';
import { Building2, Factory, Wallet, PieChart as ChartPie, FileText } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import LoanCard from '../common/LoanCard';

const LoanCategories: React.FC = () => {
  const loans = [
    {
      title: 'Cheque Based Loans',
      description: 'We help you expand and grow your business with minimal documentation, easy online process, and timely execution. CIBIL issues? We\'re here to support you.',
      icon: <FileText size={32} />,
      link: '/loans/cheque-based'
    },
    {
      title: 'Business Loans',
      description: 'Specifically intended for business purposes, our business loans create debt that will be repaid with added interest, helping you achieve your business goals.',
      icon: <Building2 size={32} />,
      link: '/loans/business'
    },
    {
      title: 'SME Loans',
      description: 'Specialized funding for small and medium-sized enterprises, representing a major function of the general business finance market with competitive pricing.',
      icon: <Factory size={32} />,
      link: '/loans/msme'
    },
    {
      title: 'Working Capital Loan',
      description: 'Secured working capital loans backed by collateral including real estate, equipment, vehicles, and in some cases, personal assets.',
      icon: <Wallet size={32} />,
      link: '/loans/working-capital'
    },
    {
      title: 'Personal Loan',
      description: 'Personal loans available from major banks including Axis Bank, Yes Bank, ICICI Bank, HDFC Bank, IDFC Bank, SCB Bank, CSB Bank, Bandhan Bank, and Kotak Mahindra Bank.',
      icon: <ChartPie size={32} />,
      link: '/loans/personal'
    },
    {
      title: 'CGTSME Loan',
      description: 'Collateral-free loans under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTSME) scheme, ideal for startups and small businesses looking to grow without security.',
      icon: <Building2 size={32} />,
      link: '/loans/cgtsme'
    }
    
  ];

  return (
    <section className="py-16 md:py-20 bg-light">
      <div className="container">
        <SectionTitle
          title="Financial Solutions For Every Need"
          subtitle="Embark on a Thriving Financial Journey with Chetana Business Solutions: Unlocking the Power of Personalized Loans for Your Unique Dreams and Aspirations"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loans.map((loan, index) => (
            <LoanCard
              key={loan.title}
              title={loan.title}
              description={loan.description}
              icon={loan.icon}
              link={loan.link}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanCategories;