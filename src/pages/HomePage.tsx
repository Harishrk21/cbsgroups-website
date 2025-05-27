import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import LoanCategories from '../components/home/LoanCategories';
import ProcessSection from '../components/home/ProcessSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Add scroll animation observer
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    // Run once to check initial elements in view
    animateOnScroll();
    
    // Add event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <>
      <HeroSection />
      <LoanCategories />
      <ProcessSection />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};

export default HomePage;