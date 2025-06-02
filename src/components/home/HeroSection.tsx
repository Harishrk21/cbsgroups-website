import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedElement from '../common/AnimatedElement';
import cbspg from '../../assets/bg1.png';
import axios from 'axios';

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    loanAmount: '',
    loanType: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://formspree.io/f/mvgalrar", formData, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.status === 200) {
        setSuccessMessage("✅ Your enquiry has been submitted successfully!");
        setFormData({ name: '', phone: '', loanAmount: '', loanType: '' });

        setTimeout(() => setSuccessMessage(''), 5000);
      } else {
        setSuccessMessage("❌ Submission failed. Please try again.");
        setTimeout(() => setSuccessMessage(''), 5000);
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("❌ Submission error. Please try again.");
      setTimeout(() => setSuccessMessage(''), 5000);
    }
  };

  return (
    <section
      className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 bg-cover bg-center text-white relative overflow-hidden"
      style={{ backgroundImage: `url(${cbspg})` }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimatedElement>
            {/* Main H1 - Most important for SEO */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Leading Private Finance Solutions for Business Growth
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
              Welcome to Chetana Business Solutions, providing businesses with financial support across Chennai, Pondicherry, Hyderabad, and Bangalore. Specializing in unsecured business loans with minimal documentation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/loans/business" className="btn btn-secondary btn-lg">
                Apply Now
              </Link>
              <Link to="/contact" className="btn btn-lg bg-white/10 text-white hover:bg-white/20">
                Get Free Consultation
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">12+</div>
                <div className="text-sm text-gray-200">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">₹500Cr+</div>
                <div className="text-sm text-gray-200">Loans Disbursed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm text-gray-200">Happy Clients</div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={1}>
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
              {/* H2 for form section */}
              <h2 className="text-xl font-semibold text-dark mb-4">Quick Loan Enquiry</h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-gray-900"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-gray-900"
                    placeholder="Your Phone"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">Loan Amount (₹)</label>
                  <input
                    type="text"
                    id="loanAmount"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-gray-900"
                    placeholder="Required Loan Amount"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="loanType" className="block text-sm font-medium text-gray-700 mb-1">Loan Type</label>
                  <select
                    id="loanType"
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-gray-900"
                    required
                  >
                    <option value="">Select Loan Type</option>
                    <option value="cheque-based">Cheque Based Loan</option>
                    <option value="business">Business Loan</option>
                    <option value="sme">SME Loan</option>
                    <option value="working-capital">Working Capital</option>
                    <option value="personal">Personal Loan</option>
                  </select>
                </div>

                {successMessage && (
                  <div className="text-sm font-medium mt-2 text-green-700">{successMessage}</div>
                )}

                <button
                  type="submit"
                  className="w-full btn btn-primary btn-md flex items-center justify-center"
                >
                  Submit Enquiry <ArrowRight size={16} className="ml-2" />
                </button>
              </form>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;