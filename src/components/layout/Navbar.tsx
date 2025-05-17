import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoansOpen, setIsLoansOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLoans = () => setIsLoansOpen(!isLoansOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsLoansOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Loans',
      path: '#',
      dropdown: true,
      subLinks: [
        { name: 'Business Loans', path: '/loans/business' },
        { name: 'MSME Loans', path: '/loans/sme' },
        { name: 'Working Capital Loans', path: '/loans/working-capital' },
        { name: 'Project Finance', path: '/loans/project-finance' },
        { name: 'Personal Loan', path: '/loans/personal' },
        { name: 'CGTSME Loan', path: '/loans/cgtsme' },
        { name: 'Cheque Based Loans', path: '/loans/cheque-based' }
      ],
    },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Chetana Logo"
            className="h-12 md:h-20 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="hidden md:block text-xl font-bold text-primary">
              Chetana Business Solutions
            </span>
            <span className="hidden md:block text-xs font-bold text-gray-600">
              BUSINESS ASSISTANCE TO SMALL & LARGE COMPANIES
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-4">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div className="relative group" key={link.name}>
                <button
                  onClick={toggleLoans}
                  className="flex items-center gap-1 text-sm font-medium hover:text-primary"
                >
                  {link.name}
                  <ChevronDown size={16} />
                </button>
                <div
                  className={`absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-md ring-1 ring-black ring-opacity-5 z-40 transition-all ${
                    isLoansOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  <div className="py-2">
                    {link.subLinks?.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium px-3 py-2 rounded-md hover:text-primary ${
                  location.pathname === link.path
                    ? 'text-primary font-semibold'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/contact" className="btn btn-outline btn-sm">
            Get Free Consultation
          </Link>
          <Link to="/loans/business" className="btn btn-primary btn-sm">
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden text-primary" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white ${
          isOpen ? 'max-h-[600px] pt-2 pb-4' : 'max-h-0'
        }`}
      >
        <div className="px-4 space-y-2">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="space-y-1">
                <button
                  className="flex justify-between w-full px-3 py-2 text-sm font-medium hover:bg-gray-100"
                  onClick={toggleLoans}
                >
                  {link.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isLoansOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`pl-4 space-y-1 ${
                    isLoansOpen ? 'max-h-60' : 'max-h-0 overflow-hidden'
                  }`}
                >
                  {link.subLinks?.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 text-sm font-medium hover:bg-gray-100 ${
                  location.pathname === link.path
                    ? 'text-primary font-semibold'
                    : 'text-dark'
                }`}
              >
                {link.name}
              </Link>
            )
          )}
          <div className="pt-4 space-y-2">
            <Link to="/contact" className="btn btn-outline btn-sm w-full">
              Get Free Consultation
            </Link>
            <Link to="/loans/business" className="btn btn-primary btn-sm w-full">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;