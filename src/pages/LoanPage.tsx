import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, FileText, Calculator, Clock, ShieldCheck, LayoutGrid } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import AnimatedElement from '../components/common/AnimatedElement';

interface LoanType {
  id: string;
  title: string;
  description: string;
  features: string[];
  requirements: string[];
  process: string[];
  eligibility: string[];
  icon: React.ReactNode;
}

const LoanPage: React.FC = () => {
  const { loanType } = useParams<{ loanType: string }>();

  const loanTypes: Record<string, LoanType> = {
    'cheque-based': {
  id: 'cheque-based',
  title: 'Cheque-Based Loans',
  description: 'Our Cheque-Based Loan option is ideal for borrowers who prefer traditional lending methods with disbursements and repayments managed through cheques. It ensures transparency and manual control over transactions.',
  features: [
    'Loan amount from ₹1 Lakh to ₹50 Lakhs',
    'Disbursement and EMI collection through post-dated cheques',
    'Interest rates starting from 13% p.a.',
    'Simple documentation process',
    'Suitable for customers without digital banking access',
    'Transparent repayment schedule with physical proof'
  ],
  requirements: [
    'Valid ID and address proof (Aadhaar, PAN, etc.)',
    'Recent passport-size photographs',
    'Bank account statements for the last 6 months',
    'Income proof (salary slips/ITR)',
    'Blank signed cheques for EMI payments'
  ],
  process: [
    'Fill out the application form manually or online',
    'Submit required documents along with signed cheques',
    'Verification and credit assessment',
    'Approval within 3-5 business days',
    'Loan disbursed via cheque or account transfer'
  ],
  eligibility: [
    'Indian citizen aged 21–60 years',
    'Steady income source (salaried or self-employed)',
    'Clean financial history',
    'Valid bank account with cheque facility'
  ],
  icon: <FileText size={32} />
},
    'business': {
      id: 'business',
      title: 'Business Loans',
      description: 'Our Business Loans are designed to provide quick financing to businesses of all sizes with minimal documentation and fast approval. Whether you need funds for expansion, equipment purchase, or day-to-day operations, our business loans have got you covered.',
      features: [
        'Loan amount up to ₹2 Crore',
        'Flexible tenure options from 12 to 60 months',
        'Competitive interest rates starting from 12% p.a.',
        'Minimal documentation and quick processing',
        'No collateral required for loans up to ₹50 Lakhs*',
        'Special rates for existing customers'
      ],
      requirements: [
        'Business registration proof (Incorporation Certificate, Partnership Deed, etc.)',
        'GST registration (if applicable)',
        'PAN Card and Aadhaar Card of directors/partners/proprietor',
        'Bank statements for the last 6 months',
        'Income Tax Returns for the last 2 years',
        'Financial statements for the last 2 years'
      ],
      process: [
        'Submit application with basic details',
        'Complete documentation and verification process',
        'Loan approval within 48-72 hours',
        'Digital signing of loan agreement',
        'Funds disbursed to your business account'
      ],
      eligibility: [
        'Business vintage of at least 2 years',
        'Minimum annual turnover of ₹25 Lakhs',
        'Good credit history and credit score',
        'Profitability in at least 1 of the last 2 financial years'
      ],
      icon: <FileText size={32} />
    },
    'sme': {
      id: 'sme',
      title: 'MSME Loans',
      description: 'Our specialized MSME Loan products are tailored to meet the unique needs of Micro, Small, and Medium Enterprises in India. With government scheme benefits, low interest rates, and flexible repayment options, our MSME loans help small businesses thrive and grow.',
      features: [
        'Loan amount from ₹5 Lakhs to ₹1 Crore',
        'Special interest rates under government schemes',
        'Tenure options from 12 to 84 months',
        'No prepayment penalties',
        'Option to choose between term loan and overdraft facility',
        'Benefits under CGTMSE scheme for eligible businesses'
      ],
      requirements: [
        'MSME registration certificate',
        'Business registration documents',
        'PAN Card and Aadhaar Card of directors/partners/proprietor',
        'Bank statements for the last 6 months',
        'Income Tax Returns for the last 2 years',
        'GST returns for the last year (if applicable)'
      ],
      process: [
        'Submit application and basic business details',
        'Complete documentation and verification',
        'Loan assessment and eligibility check',
        'Loan approval within 3-5 business days',
        'Funds disbursed to your account'
      ],
      eligibility: [
        'Valid MSME registration',
        'Business vintage of at least 1 year',
        'Minimum annual turnover as per MSME category',
        'No major defaults in existing loans'
      ],
      icon: <Calculator size={32} />
    },
    'working-capital': {
      id: 'working-capital',
      title: 'Working Capital Loans',
      description: 'Our Working Capital Loan solutions help businesses manage their day-to-day operational expenses, inventory purchases, and cash flow gaps. With flexible withdrawal and repayment options, these loans ensure your business operations run smoothly without financial hiccups.',
      features: [
        'Credit limits from ₹10 Lakhs to ₹5 Crore',
        'Overdraft and cash credit facilities available',
        'Interest charged only on the utilized amount',
        'Digital monitoring and management of credit limit',
        'Flexibility to withdraw and repay multiple times',
        'Option to convert to term loan for better rate management'
      ],
      requirements: [
        'Business registration documents',
        'PAN Card and Aadhaar Card of directors/partners/proprietor',
        'Bank statements for the last 12 months',
        'Income Tax Returns for the last 3 years',
        'Financial statements for the last 3 years',
        'Stock statements and debtor-creditor lists'
      ],
      process: [
        'Apply online or visit our branch',
        'Submit business documents for assessment',
        'Working capital assessment and credit limit determination',
        'Approval and documentation within 7 business days',
        'Activation of credit facility in your account'
      ],
      eligibility: [
        'Business vintage of at least 3 years',
        'Minimum annual turnover of ₹1 Crore',
        'Good banking transaction history',
        'Healthy financial ratios and cash flow'
      ],
      icon: <Clock size={32} />
    },
   'personal': {
  id: 'personal',
  title: 'Personal Loan',
  description: 'Our Personal Loan offering is designed for individuals seeking quick financial assistance for personal needs such as medical emergencies, education, travel, or weddings. With minimal documentation and fast approval, we make funding stress-free and accessible.',
  features: [
    'Loan amounts from ₹50,000 to ₹25 Lakhs',
    'Tenure options from 12 to 60 months',
    'No collateral or guarantor required',
    'Quick approval and disbursal process',
    'Attractive interest rates',
    'Flexible repayment options via EMI'
  ],
  requirements: [
    'Valid KYC documents (PAN, Aadhaar)',
    'Latest 3 months’ salary slips or income proof',
    'Bank statements for last 6 months',
    'Form 16 or ITR for self-employed applicants',
    'Employment proof or business registration certificate'
  ],
  process: [
    'Submit personal loan application with documents',
    'Verification of income and credit profile',
    'Loan offer and agreement signing',
    'Quick disbursal to bank account'
  ],
  eligibility: [
    'Salaried or self-employed individuals',
    'Minimum monthly income of ₹20,000',
    'Age between 21 and 58 years',
    'Good credit score (650+ preferred)',
    'Stable job or business continuity of at least 2 years'
  ],
  icon: <Calculator size={32} />
}
,
    'cgtsme': {
  id: 'cgtsme',
  title: 'CGTMSE Loans',
  description: 'The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) provides collateral-free credit to MSEs. This scheme encourages lenders to extend credit without the need for third-party guarantees or security.',
  features: [
    'Collateral-free loans up to ₹2 crore',
    'Available for new and existing Micro & Small Enterprises',
    'Covers term loans and working capital',
    'Government-backed credit guarantee cover',
    'Flexible repayment terms',
    'Support for both manufacturing and service sectors'
  ],
  requirements: [
    'Business should fall under Micro or Small Enterprise category',
    'Business PAN Card and Aadhaar Card of promoter',
    'Udyam Registration Certificate',
    'Project Report and Business Plan',
    'Bank statement and IT returns',
    'KYC and address proof documents'
  ],
  process: [
    'Submit application with business and promoter details',
    'Assessment by lending institution',
    'Forwarding proposal to CGTMSE for guarantee approval',
    'Loan sanction without collateral',
    'Periodic monitoring and reporting'
  ],
  eligibility: [
    'Micro and Small Enterprises (MSEs) as per MSME definition',
    'New or existing businesses with sound project plan',
    'No default history with any bank/financial institution',
    'Loan amount should not exceed ₹2 crore under the scheme'
  ],
  icon: <ShieldCheck size={32} />
},
"project-finance": {
    "id": "project-finance",
    "title": "Project Finance Solutions",
    "description": "Our specialized Project Finance services provide long-term funding for large-scale infrastructure, industrial projects, and greenfield/brownfield ventures. We offer structured financing with customized repayment schedules aligned to your project's cash flow cycles.",
    "features": [
      "Funding from ₹5 Crore to ₹500 Crore+",
      "Tenure up to 15 years (including moratorium periods)",
      "Tailored repayment structures (back-ended/balloon payments)",
      "Syndication services for mega-projects",
      "Expert risk assessment and mitigation planning",
      "Dedicated project monitoring team"
    ],
    "requirements": [
      "Detailed project report (DPR) with feasibility studies",
      "Techno-economic viability assessment",
      "Environmental clearances and regulatory approvals",
      "SPV formation documents (if applicable)",
      "Tie-up agreements with contractors/off-takers",
      "5-year financial projections with sensitivity analysis"
    ],
    "process": [
      "Submission of preliminary project documentation",
      "Due diligence by our technical and financial teams",
      "Risk assessment and structuring proposal",
      "Sanction with defined drawdown milestones",
      "Disbursement against achievement of project benchmarks"
    ],
    "eligibility": [
      "Minimum promoter equity contribution of 25-40%",
      "Proven track record in similar projects",
      "Long-term supply/offtake agreements (for infrastructure projects)",
      "Insurance coverage for key project risks",
      "Escrow mechanisms for revenue streams"
    ],
    "icon": <LayoutGrid size={32} />
  }
  };

  const loan = loanTypes[loanType || ''] || loanTypes['business'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedElement>
              <div className="bg-white/10 p-3 px-6 rounded-full inline-flex items-center mb-4">
                {loan.icon}
                <span className="ml-2 font-medium">Financial Solutions</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{loan.title}</h1>
              <p className="text-lg text-gray-200 mb-8">{loan.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  Apply Now
                </Link>
                <Link to="/contact" className="btn btn-lg bg-white/10 text-white hover:bg-white/20">
                  Get Free Consultation
                </Link>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={1} className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">₹2Cr+</div>
                  <div className="text-gray-200">Maximum Loan Amount</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">12%</div>
                  <div className="text-gray-200">Interest Rate Starting</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">48hrs</div>
                  <div className="text-gray-200">Approval Time</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">60mo</div>
                  <div className="text-gray-200">Maximum Tenure</div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <SectionTitle
            title={`Key Features of Our ${loan.title}`}
            subtitle="We offer competitive features designed to support your business growth"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loan.features.map((feature, index) => (
              <AnimatedElement key={index} delay={index % 3} className="h-full">
                <div className="card p-6 h-full flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full text-primary mr-4 mt-1">
                    <Check size={20} />
                  </div>
                  <p className="text-lg">{feature}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility and Requirements */}
      <section className="py-16 md:py-20 bg-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Eligibility */}
            <div>
              <SectionTitle
                title="Eligibility Criteria"
                subtitle="Check if you qualify for our loan program"
                centered={false}
              />
              
              <div className="card p-8">
                <ul className="space-y-4">
                  {loan.eligibility.map((item, index) => (
                    <AnimatedElement key={index} className="flex items-start">
                      <div className="bg-primary text-white p-1 rounded-full mr-3 mt-1">
                        <Check size={16} />
                      </div>
                      <span className="text-lg">{item}</span>
                    </AnimatedElement>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Requirements */}
            <div>
              <SectionTitle
                title="Required Documents"
                subtitle="Documents needed to process your application"
                centered={false}
              />
              
              <div className="card p-8">
                <ul className="space-y-4">
                  {loan.requirements.map((item, index) => (
                    <AnimatedElement key={index} delay={1} className="flex items-start">
                      <div className="bg-primary text-white p-1 rounded-full mr-3 mt-1">
                        <Check size={16} />
                      </div>
                      <span className="text-lg">{item}</span>
                    </AnimatedElement>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-20">
        <div className="container">
          <SectionTitle
            title="Application Process"
            subtitle="Simple steps to get your loan approved and disbursed"
          />
          
          <div className="relative max-w-4xl mx-auto">
            {/* Process Line (hidden on mobile) */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200 z-0">
              <div className="absolute left-0 top-0 h-full bg-primary" style={{ width: '100%' }}></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {loan.process.map((step, index) => (
                <AnimatedElement key={index} delay={index} className="relative z-10">
                  <div className="card h-full p-6 text-center">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-lg">{step}</p>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container text-center">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Apply for Your {loan.title}?</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
              Get the financial support your business needs today. Our team is ready to help you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Apply Now
              </Link>
              <Link to="/contact" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
                Schedule a Consultation
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default LoanPage;