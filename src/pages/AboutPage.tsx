import React from 'react';
import { Calendar, DollarSign, TrendingUp, Users, Linkedin } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import AnimatedElement from '../components/common/AnimatedElement';
import pradeepImage from '../assets/pradeep.jpg';

const AboutPage: React.FC = () => {
  const leadershipTeam = [
    {
      name: 'Pradeep Babu T',
      role: 'Business Head',
      bio: 'With nearly 16 years of extensive experience in financial services and business development, Pradeep leads our strategic initiatives and client relationships. His expertise in crafting tailored financial solutions has been instrumental in helping businesses achieve sustainable growth and navigate complex financial challenges.',
      social: {
        linkedin: 'https://www.linkedin.com/in/chetana-business-solutions-148452283/'
      }
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedElement>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About Chetana Business Solutions</h1>
              <p className="text-lg text-gray-200 mb-6">
                Founded in 2010, Chetana Business Solutions has been a trusted financial partner for businesses across India. With our expertise, we have helped thousands of entrepreneurs and businesses achieve their growth objectives.
              </p>
              <p className="text-lg text-gray-200">
                Our mission is to empower businesses with timely and accessible financial solutions that fuel their growth and success. We believe in building long-term relationships based on trust, transparency, and mutual growth.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={1}>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold mb-2">12+</div>
                  <div className="text-lg">Years of Experience</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold mb-2">₹500Cr+</div>
                  <div className="text-lg">Loans Disbursed</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold mb-2">5000+</div>
                  <div className="text-lg">Happy Clients</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-lg">Client Satisfaction</div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Our Vision and Mission */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimatedElement className="card p-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-text-light mb-6">
                To be the most trusted financial partner for businesses, enabling their growth through innovative and accessible financial solutions.
              </p>
              <div className="flex items-center text-primary">
                <TrendingUp size={24} className="mr-3" />
                <span className="font-medium">Empowering Business Growth</span>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={1} className="card p-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-text-light mb-6">
                To provide timely, transparent, and tailored financial solutions that meet the diverse needs of businesses at every stage of their journey.
              </p>
              <div className="flex items-center text-primary">
                <DollarSign size={24} className="mr-3" />
                <span className="font-medium">Financial Accessibility for All</span>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 md:py-20 bg-light">
        <div className="container">
          <SectionTitle
            title="Our Journey"
            subtitle="From humble beginnings to becoming a trusted financial partner for thousands of businesses"
          />
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {/* 2010 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <AnimatedElement className="md:text-right md:pr-12">
                  <div className="hidden md:block absolute right-0 top-0 w-4 h-4 rounded-full bg-primary transform translate-x-1/2"></div>
                  <h3 className="text-xl font-semibold text-primary mb-2">2010</h3>
                  <div className="card p-6">
                    <h4 className="text-lg font-medium mb-2">Founded</h4>
                    <p className="text-text-light">
                      Chetana Business Solutions was established with a vision to provide accessible financial solutions to SMEs.
                    </p>
                  </div>
                </AnimatedElement>
                <div className="hidden md:block"></div>
              </div>
              
              {/* 2013 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="hidden md:block"></div>
                <AnimatedElement delay={1} className="md:pl-12">
                  <div className="hidden md:block absolute left-0 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
                  <h3 className="text-xl font-semibold text-primary mb-2">2013</h3>
                  <div className="card p-6">
                    <h4 className="text-lg font-medium mb-2">Expansion</h4>
                    <p className="text-text-light">
                      Expanded operations to 5 major cities across India and introduced specialized MSME loan products.
                    </p>
                  </div>
                </AnimatedElement>
              </div>
              
              {/* 2016 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <AnimatedElement delay={2} className="md:text-right md:pr-12">
                  <div className="hidden md:block absolute right-0 top-0 w-4 h-4 rounded-full bg-primary transform translate-x-1/2"></div>
                  <h3 className="text-xl font-semibold text-primary mb-2">2016</h3>
                  <div className="card p-6">
                    <h4 className="text-lg font-medium mb-2">Digital Transformation</h4>
                    <p className="text-text-light">
                      Launched our digital platform for loan applications, making the process faster and more accessible.
                    </p>
                  </div>
                </AnimatedElement>
                <div className="hidden md:block"></div>
              </div>
              
              {/* 2020 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="hidden md:block"></div>
                <AnimatedElement delay={3} className="md:pl-12">
                  <div className="hidden md:block absolute left-0 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
                  <h3 className="text-xl font-semibold text-primary mb-2">2020</h3>
                  <div className="card p-6">
                    <h4 className="text-lg font-medium mb-2">Pandemic Response</h4>
                    <p className="text-text-light">
                      Introduced special financial relief packages for businesses affected by the COVID-19 pandemic.
                    </p>
                  </div>
                </AnimatedElement>
              </div>
              
              {/* 2023 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <AnimatedElement delay={4} className="md:text-right md:pr-12">
                  <div className="hidden md:block absolute right-0 top-0 w-4 h-4 rounded-full bg-primary transform translate-x-1/2"></div>
                  <h3 className="text-xl font-semibold text-primary mb-2">2023</h3>
                  <div className="card p-6">
                    <h4 className="text-lg font-medium mb-2">Milestone Achievement</h4>
                    <p className="text-text-light">
                      Reached the milestone of disbursing ₹500 Crore in loans and serving over 5000 businesses.
                    </p>
                  </div>
                </AnimatedElement>
                <div className="hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-20">
        <div className="container">
          <SectionTitle
            title="Our Leadership"
            subtitle="Meet the experienced professional who guides our business strategy"
          />
          
          <div className="max-w-lg mx-auto">
            {leadershipTeam.map((leader, index) => (
              <AnimatedElement key={leader.name} delay={index} className="card overflow-hidden">
                <div className="relative bg-gray-200 h-200">
                  <img 
                    src={pradeepImage} 
                    alt="Pradeep Babu T" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                  <p className="text-primary mb-3">{leader.role}</p>
                  <p className="text-text-light mb-4">{leader.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={leader.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container text-center">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses who have trusted Chetana Business Solutions for their financial needs. Let's grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn btn-secondary btn-lg">
                Contact Us Today
              </a>
              <a href="/loans/business" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
                Explore Loan Options
              </a>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;