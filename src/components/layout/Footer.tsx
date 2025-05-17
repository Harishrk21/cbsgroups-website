import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Chetana Business Solutions</h3>
            <p className="mb-4 text-gray-300">
              Providing comprehensive financial solutions to businesses since 2010. Your trusted
              partner for growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100094696056852" aria-label="Facebook" className="hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
             
              <a href="https://www.linkedin.com/in/chetana-business-solutions-148452283/" aria-label="LinkedIn" className="hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/chetanabusinesssolutions/?igshid=NGExMmI2YTkyZg%3D%3D" aria-label="Instagram" className="hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/loans/business" className="text-gray-300 hover:text-white transition-colors">
                  Business Loans
                </Link>
              </li>
              <li>
                <Link to="/loans/msme" className="text-gray-300 hover:text-white transition-colors">
                  MSME Loans
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Loans */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Loan Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/loans/business" className="text-gray-300 hover:text-white transition-colors">
                  Business Loans
                </Link>
              </li>
              <li>
                <Link to="/loans/sme" className="text-gray-300 hover:text-white transition-colors">
                  MSME Loans
                </Link>
              </li>
              <li>
                <Link to="/loans/working-capital" className="text-gray-300 hover:text-white transition-colors">
                  Working Capital Loans
                </Link>
              </li>
              <li>
                <Link to="/loans/project-finance" className="text-gray-300 hover:text-white transition-colors">
                  Project Finance
                </Link>
                </li>
                <li>
                <Link to="/loans/personal" className="text-gray-300 hover:text-white transition-colors">
                 Personal Loan
                </Link>
              </li>
              <li>
                <Link to="/loans/cgtsme" className="text-gray-300 hover:text-white transition-colors">
                 CGTSME Loan
                </Link>
              </li>
              <li>
                <Link to="/loans/cheque-based" className="text-gray-300 hover:text-white transition-colors">
                 Cheque Based Loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>No.20, Ground floor, 1st Main Rd, Srinivasa Nagar, Kolathur, Chennai, Tamil Nadu 600099</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+919841078770" className="hover:text-secondary transition-colors">
                  +91 9841078770
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:pradeep@cbsgroups.in" className="hover:text-secondary transition-colors">
                  pradeep@cbsgroups.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-gray-400 text-sm text-center">
          <p>© {new Date().getFullYear()} Chetana Business Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;