import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import AnimatedElement from '../components/common/AnimatedElement';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Financial Strategies for MSMEs in 2025',
      excerpt: 'Discover the most effective financial strategies that are helping MSMEs thrive in the current economic landscape.',
      date: 'April 15, 2025',
      author: 'Anand Sharma',
      category: 'Business Finance',
      image: 'https://images.pexels.com/photos/7567437/pexels-photo-7567437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'Understanding Working Capital Requirements for Seasonal Businesses',
      excerpt: 'Learn how to calculate and manage working capital needs for businesses with seasonal fluctuations in revenue.',
      date: 'March 28, 2025',
      author: 'Priya Mehta',
      category: 'Working Capital',
      image: 'https://images.pexels.com/photos/7363183/pexels-photo-7363183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'How to Improve Your Business Credit Score',
      excerpt: 'Practical steps to build and improve your business credit profile to secure better loan terms and higher credit limits.',
      date: 'March 10, 2025',
      author: 'Vijay Kumar',
      category: 'Credit Management',
      image: 'https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      title: 'The Impact of Digital Transformation on Small Business Financing',
      excerpt: 'Explore how technology is changing the landscape of business financing and creating new opportunities for growth.',
      date: 'February 22, 2025',
      author: 'Anand Sharma',
      category: 'Business Finance',
      image: 'https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 5,
      title: 'Government Schemes for MSMEs: A Complete Guide',
      excerpt: 'A comprehensive overview of the latest government initiatives and schemes designed to support MSME growth and development.',
      date: 'February 15, 2025',
      author: 'Priya Mehta',
      category: 'MSME Finance',
      image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 6,
      title: 'Project Financing vs. Traditional Business Loans: Which is Right for You?',
      excerpt: 'Compare the features, benefits, and drawbacks of project financing and traditional business loans to make an informed decision.',
      date: 'January 30, 2025',
      author: 'Vijay Kumar',
      category: 'Project Finance',
      image: 'https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const categories = [
    'All Categories',
    'Business Finance',
    'Working Capital',
    'Credit Management',
    'MSME Finance',
    'Project Finance'
  ];

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container text-center">
          <AnimatedElement>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Business Finance Insights</h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Expert advice, industry updates, and practical strategies to help your business thrive financially.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="sr-only">Blog Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="card p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        searchTerm === (index === 0 ? '' : category)
                          ? 'bg-primary text-white'
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setSearchTerm(index === 0 ? '' : category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4">Need Financial Advice?</h3>
                <p className="text-text-light mb-4">
                  Our financial experts are ready to provide personalized advice for your business needs.
                </p>
                <Link to="/contact" className="btn btn-primary btn-md w-full">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <AnimatedElement key={post.id} delay={index % 2} className="h-full">
                    <div className="card overflow-hidden h-full flex flex-col">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6 flex-grow">
                        <div className="flex items-center gap-4 text-sm text-text-light mb-3">
                          <span className="flex items-center">
                            <Calendar size={14} className="mr-1" /> {post.date}
                          </span>
                          <span className="flex items-center">
                            <User size={14} className="mr-1" /> {post.author}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                        <p className="text-text-light mb-4">{post.excerpt}</p>
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
                          {post.category}
                        </span>
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors mt-auto"
                        >
                          Read More <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-text-light">
                    Try adjusting your search or browse all our articles by clearing the search.
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="mt-4 btn btn-outline btn-md"
                  >
                    View All Articles
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 bg-light">
        <div className="container">
          <div className="card p-8 md:p-12 max-w-4xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-text-light mb-6 max-w-2xl mx-auto">
                Stay updated with the latest financial insights, industry news, and special offers delivered straight to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <button className="btn btn-primary btn-md whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm text-text-light mt-4">
                We respect your privacy and won't share your information.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;