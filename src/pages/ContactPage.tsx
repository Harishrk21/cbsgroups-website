import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import AnimatedElement from '../components/common/AnimatedElement';

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
interface FormspreeResponse {
  ok: boolean;
  error?: string;
  // Add other possible response properties if needed
  next?: string;
  success?: string;
}
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');

    try {
      const response = await fetch('https://formspree.io/f/mvgalrar', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });

      const result = await response.json();
      
      if (response.ok) {
        setSubmitSuccess(true);
        form.reset();
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    }catch (error) {
    console.error('Error:', error);
    setSubmitError(
      error instanceof Error 
        ? error.message 
        : 'There was an error sending your message. Please try again later.'
    );
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container text-center">
          <AnimatedElement>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Have questions or need assistance? Our team is here to help you find the right financial solution for your business.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Get in Touch with Our Loan Experts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <AnimatedElement className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a href="tel:+919841078770" className="text-lg hover:text-primary transition-colors">
                +91 98410 78770
              </a>
              <p className="text-text-light mt-2">
                Monday to Saturday: 10 AM - 6 PM
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={1} className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <a href="mailto:pradeep@cbsgroups.in" className="text-lg hover:text-primary transition-colors">
                pradeep@cbsgroups.in
              </a>
              <p className="text-text-light mt-2">
                We'll respond within 24 hours
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={2} className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-lg">
                No.20, Ground floor, 1st Main Rd, Srinivasa Nagar, Kolathur, Chennai, Tamil Nadu.
              </p>
              <p className="text-text-light mt-2">
                Chennai - 600099
              </p>
            </AnimatedElement>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <AnimatedElement className="card p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
                  Thank you for your message. We will contact you soon!
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-6">
                  {submitError}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name*
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email*
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Your Phone"
                      required
                      pattern="[0-9]{10,15}"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject*
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Your message here..."
                    required
                    minLength={10}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary btn-md w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  {!isSubmitting && <Send size={16} />}
                </button>
              </form>
            </AnimatedElement>
            
            {/* Map */}
            <AnimatedElement delay={1} className="card overflow-hidden">
              <div className="bg-gray-100 h-[450px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8290889356584!2d80.20480771482266!3d13.119416990771592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzA3LjkiTiA4MMKwMTInMTcuMyJF!5e0!3m2!1sen!2sin!4v1625641234567!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Chetana Business Solutions Location"
                ></iframe>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 bg-light">
        <div className="container">
          <div className="card p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Business Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedElement>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                    <div className="flex items-center">
                      <Clock size={20} className="mr-2 text-primary" />
                      <span className="font-medium">Monday - Saturday</span>
                    </div>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                    <div className="flex items-center">
                      <Clock size={20} className="mr-2 text-primary" />
                      <span className="font-medium">Sunday</span>
                    </div>
                    <span>Closed</span>
                  </div>
                </div>
              </AnimatedElement>

              <AnimatedElement delay={1}>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Need Urgent Assistance?</h3>
                  <p className="text-text-light mb-4">
                    For urgent queries, you can reach our customer support team during business hours.
                  </p>
                  <div className="flex items-center">
                    <Phone size={20} className="mr-2 text-primary" />
                    <a href="tel:+919884605677" className="text-primary font-medium">
                      +91 98410 78770
                    </a>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactPage;