import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

interface LoanCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
}

const LoanCard: React.FC<LoanCardProps> = ({ title, description, icon, link, delay }) => {
  return (
    <AnimatedElement delay={delay}>
      <div className="card h-full transition-all duration-300 hover:shadow-lg group">
        <div className="p-6">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-text-light mb-4">{description}</p>
          <Link
            to={link}
            className="inline-flex items-center text-primary font-medium group-hover:text-secondary transition-colors"
          >
            Learn More <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default LoanCard;