import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedElement from '../common/AnimatedElement';

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container">
        <AnimatedElement className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-lg text-gray-200 mb-8">
            Get the financial support you need to take your business to the next level. Our team is ready to help you find the perfect financing solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/loans/business" className="btn btn-secondary btn-lg">
              Apply Now
            </Link>
            <Link to="/contact" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
              Schedule a Consultation
            </Link>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default CTA;