import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Bookmark, MessageSquare } from 'lucide-react';
import AnimatedElement from '../components/common/AnimatedElement';
import SectionTitle from '../components/common/SectionTitle';

const BlogDetailPage: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Sample blog posts data (in a real app, this would come from an API)
  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Financial Strategies for MSMEs in 2025',
      excerpt: 'Discover the most effective financial strategies that are helping MSMEs thrive in the current economic landscape.',
      content: `
        <p>Small and medium enterprises (MSMEs) face unique financial challenges in today's rapidly evolving business environment. To stay competitive and ensure sustainable growth, it's essential to adopt effective financial strategies that align with current market trends and economic conditions.</p>
        
        <h2>1. Embrace Digital Financial Tools</h2>
        <p>In 2025, digital transformation is no longer optional. MSMEs that leverage financial technology solutions gain significant advantages in cash flow management, expense tracking, and financial forecasting. Cloud-based accounting software, automated invoicing systems, and digital payment platforms can significantly reduce administrative overhead while providing real-time insights into your business's financial health.</p>
        
        <h2>2. Diversify Revenue Streams</h2>
        <p>Relying on a single revenue source can make your business vulnerable to market fluctuations. Successful MSMEs are increasingly exploring multiple revenue channels, including:</p>
        <ul>
          <li>Expanding product or service offerings</li>
          <li>Exploring subscription-based models</li>
          <li>Developing strategic partnerships</li>
          <li>Entering new geographic markets</li>
        </ul>
        
        <h2>3. Optimize Working Capital Management</h2>
        <p>Efficient working capital management is critical for maintaining operational liquidity while maximizing profitability. This involves careful management of inventory, accounts receivable, and accounts payable cycles. Advanced inventory management systems, streamlined credit policies, and strategic supplier relationships can significantly improve cash conversion cycles.</p>
        
        <h2>4. Leverage Alternative Financing Options</h2>
        <p>Beyond traditional bank loans, MSMEs now have access to diverse financing alternatives that can provide greater flexibility and accessibility. These include:</p>
        <ul>
          <li>Peer-to-peer lending platforms</li>
          <li>Invoice financing and factoring</li>
          <li>Revenue-based financing</li>
          <li>Supply chain financing</li>
          <li>Digital MSME lending platforms</li>
        </ul>
        
        <h2>5. Implement Strategic Tax Planning</h2>
        <p>Proactive tax planning remains one of the most effective financial strategies for MSMEs. This involves staying updated with tax regulations, maximizing legitimate deductions, and structuring business operations to optimize tax efficiency. Consider consulting with a tax professional who specializes in small business taxation to develop a comprehensive tax strategy tailored to your specific business needs.</p>
        
        <p>By implementing these financial strategies, MSMEs can enhance their financial resilience, improve profitability, and position themselves for sustainable growth in the competitive business landscape of 2025.</p>
      `,
      date: 'April 15, 2025',
      author: 'Anand Sharma',
      authorRole: 'Financial Advisor',
      authorBio: 'Anand has over 15 years of experience advising MSMEs on financial strategy and growth.',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Business Finance',
      image: 'https://images.pexels.com/photos/7567437/pexels-photo-7567437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      readTime: '8 min read',
      tags: ['MSME', 'Financial Strategy', 'Business Growth', 'Working Capital', 'Digital Finance']
    },
    {
      id: 2,
      title: 'Understanding Working Capital Requirements for Seasonal Businesses',
      excerpt: 'Learn how to calculate and manage working capital needs for businesses with seasonal fluctuations in revenue.',
      content: `
        <p>Seasonal businesses face unique challenges when it comes to working capital management. The cyclical nature of revenue generation requires careful planning and strategic financial management to ensure smooth operations throughout the year.</p>
        
        <h2>The Seasonal Business Challenge</h2>
        <p>Unlike businesses with consistent revenue streams, seasonal operations experience distinct peak and off-peak periods. This creates a fundamental challenge: how to maintain sufficient cash flow during slow periods while preparing for increased operational demands during peak seasons.</p>
        
        <h2>Calculating Working Capital Requirements</h2>
        <p>For seasonal businesses, traditional working capital calculations must be adjusted to account for fluctuating operational needs. A comprehensive working capital forecast should include:</p>
        <ul>
          <li>Month-by-month revenue projections based on historical patterns</li>
          <li>Variable expense forecasts that align with seasonal activity</li>
          <li>Fixed cost obligations that persist regardless of seasonal shifts</li>
          <li>Inventory build-up requirements before peak seasons</li>
          <li>Cash reserve needs for off-peak periods</li>
        </ul>
        
        <h2>Strategies for Effective Working Capital Management</h2>
        <p>Successful seasonal businesses implement several key strategies to optimize working capital throughout their business cycle:</p>
        
        <h3>1. Establish Flexible Financing Arrangements</h3>
        <p>Seasonal lines of credit, revolving credit facilities, and flexible loan terms can provide access to capital when needed most. Look for financial products specifically designed for seasonal business fluctuations.</p>
        
        <h3>2. Negotiate Favorable Supplier Terms</h3>
        <p>Align payment schedules with your revenue cycle by negotiating extended payment terms during off-peak seasons and potentially offering accelerated payments during profitable periods in exchange for discounts.</p>
        
        <h3>3. Implement Dynamic Inventory Management</h3>
        <p>Utilize just-in-time inventory practices and demand forecasting to minimize carrying costs during slow periods while ensuring adequate stock for peak seasons.</p>
        
        <h3>4. Diversify Revenue Streams</h3>
        <p>Explore complementary products or services that generate revenue during traditional off-seasons. This might involve targeting different customer segments or introducing offerings that counter-balance your primary seasonal business.</p>
        
        <h3>5. Build Strategic Cash Reserves</h3>
        <p>During profitable peak seasons, allocate a portion of earnings to cash reserves that can sustain operations during predictable downturns.</p>
        
        <p>By implementing these strategies and maintaining vigilant cash flow management, seasonal businesses can create financial stability despite inherent revenue fluctuations, positioning themselves for sustainable long-term growth.</p>
      `,
      date: 'March 28, 2025',
      author: 'Priya Mehta',
      authorRole: 'Working Capital Specialist',
      authorBio: 'Priya specializes in working capital optimization for businesses with seasonal revenue patterns.',
      authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Working Capital',
      image: 'https://images.pexels.com/photos/7363183/pexels-photo-7363183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      readTime: '9 min read',
      tags: ['Working Capital', 'Seasonal Business', 'Cash Flow Management', 'Financial Planning']
    },
    {
      id: 3,
      title: 'How to Improve Your Business Credit Score',
      excerpt: 'Practical steps to build and improve your business credit profile to secure better loan terms and higher credit limits.',
      content: `
        <p>A strong business credit profile is essential for accessing favorable financing terms and building credibility with suppliers and potential business partners. Unlike personal credit, business credit requires deliberate actions to establish and improve. Here's a comprehensive guide to enhancing your business credit score.</p>
        
        <h2>Understanding Business Credit Scores</h2>
        <p>Business credit scores typically range from 0 to 100, with higher scores indicating lower risk. Major business credit bureaus include Dun & Bradstreet, Experian Business, and Equifax Business. Each bureau uses slightly different methodologies, but they all consider factors such as payment history, credit utilization, company size, industry risk, and length of credit history.</p>
        
        <h2>Essential Steps to Improve Your Business Credit Score</h2>
        
        <h3>1. Establish Your Business Properly</h3>
        <p>Ensure your business is formally established with proper registration, business licenses, and a federal tax identification number (TIN). Maintain separation between personal and business finances by opening dedicated business bank accounts and obtaining business credit cards.</p>
        
        <h3>2. Work with Credit-Reporting Suppliers</h3>
        <p>Establish trade lines with vendors and suppliers that report payment activities to business credit bureaus. Even small vendor relationships can help build your credit history if they report to major bureaus. Start with suppliers offering net-30 or net-60 payment terms.</p>
        
        <h3>3. Pay Early or On Time, Every Time</h3>
        <p>Payment history is the single most important factor in your business credit score. Make all payments by their due dates, and whenever possible, pay early. Some scoring models, like Dun & Bradstreet's PAYDEX score, reward early payments with higher scores.</p>
        
        <h3>4. Monitor and Dispute Errors</h3>
        <p>Regularly review your business credit reports from all major bureaus. Identify and promptly dispute any inaccuracies through the bureau's established resolution process. Even small errors can significantly impact your score.</p>
        
        <h3>5. Maintain Low Credit Utilization</h3>
        <p>Keep your credit utilization ratio—the percentage of available credit you're using—below 30% whenever possible. High utilization signals potential cash flow problems and can negatively impact your score.</p>
        
        <h3>6. Diversify Your Credit Mix</h3>
        <p>Maintain a healthy mix of different credit types, such as a business line of credit, term loans, and credit cards. This demonstrates your ability to manage various credit arrangements responsibly.</p>
        
        <h3>7. Build Business Credit Tenure</h3>
        <p>The length of your credit history matters. Keep your oldest credit accounts open and in good standing to establish a long-term credit history for your business.</p>
        
        <p>Improving your business credit score is a continuous process that requires consistent effort and attention. By following these strategies and maintaining responsible credit practices, you can gradually enhance your business credit profile, ultimately securing more favorable financing options and strengthening your company's financial foundation.</p>
      `,
      date: 'March 10, 2025',
      author: 'Vijay Kumar',
      authorRole: 'Credit Analyst',
      authorBio: 'Vijay is a certified credit analyst with expertise in helping businesses optimize their credit profiles.',
      authorImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Credit Management',
      image: 'https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      readTime: '7 min read',
      tags: ['Business Credit', 'Credit Score', 'Financial Management', 'Loans']
    },
    {
      id: 4,
      title: 'The Impact of Digital Transformation on Small Business Financing',
      excerpt: 'Explore how technology is changing the landscape of business financing and creating new opportunities for growth.',
      content: `
        <p>Digital transformation is revolutionizing the financial landscape for small businesses, creating unprecedented access to capital and innovative financing solutions. As traditional lending models evolve and new fintech players emerge, businesses that embrace digital financial ecosystems gain significant competitive advantages.</p>
        
        <h2>The Evolving Financing Landscape</h2>
        <p>The convergence of big data, artificial intelligence, and digital platforms has fundamentally changed how small businesses access financing. Traditional barriers such as lengthy application processes, rigid eligibility criteria, and limited financing options are being dismantled by technology-driven alternatives.</p>
        
        <h2>Key Digital Innovations Reshaping Business Financing</h2>
        
        <h3>1. AI-Powered Credit Assessment</h3>
        <p>Modern lending platforms now utilize artificial intelligence to evaluate creditworthiness based on a broader range of data points than traditional credit scores. These algorithms analyze alternative data including cash flow patterns, online reviews, social media presence, and even website traffic to create more comprehensive risk profiles. This enables financing for businesses that might be overlooked by conventional credit evaluation methods.</p>
        
        <h3>2. Digital Lending Platforms</h3>
        <p>Online lending marketplaces connect businesses directly with multiple potential lenders through a single application process. These platforms dramatically reduce the time and effort required to secure financing while increasing approval rates through targeted matching of businesses with appropriate lenders.</p>
        
        <h3>3. Embedded Finance Solutions</h3>
        <p>Financial services are increasingly integrated directly into business software and platforms. Accounting software that offers instant invoice financing, e-commerce platforms with built-in working capital solutions, and payment processors that provide cash advances based on transaction volume are creating seamless financing experiences embedded within daily business operations.</p>
        
        <h3>4. Blockchain and Smart Contracts</h3>
        <p>Distributed ledger technology is enabling more efficient, secure, and transparent financing arrangements. Smart contracts automatically execute payment terms and lending agreements, reducing administrative costs and minimizing the potential for disputes. This technology is particularly transformative for supply chain financing and international trade finance.</p>
        
        <h3>5. Real-time Data Access</h3>
        <p>Open banking initiatives and API connectivity allow lenders to access real-time financial data directly from business accounts (with permission). This enables dynamic lending products that adjust to business performance, such as revenue-based financing with flexible repayment schedules tied to actual business cash flow.</p>
        
        <h2>Strategic Implications for Small Businesses</h2>
        <p>To capitalize on these digital financing opportunities, small businesses should:</p>
        <ul>
          <li>Digitize financial operations and record-keeping</li>
          <li>Build a strong digital footprint across relevant platforms</li>
          <li>Utilize cloud-based accounting and financial management tools</li>
          <li>Explore alternative financing options beyond traditional bank loans</li>
          <li>Invest in data security and privacy compliance</li>
        </ul>
        
        <p>The digital transformation of business financing represents not just technological change but a fundamental shift in how capital flows to small businesses. Those that adapt quickly to this new ecosystem will gain access to more flexible, accessible, and tailored financing solutions, supporting sustainable growth in an increasingly competitive market environment.</p>
      `,
      date: 'February 22, 2025',
      author: 'Anand Sharma',
      authorRole: 'Financial Advisor',
      authorBio: 'Anand has over 15 years of experience advising MSMEs on financial strategy and growth.',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Business Finance',
      image: 'https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      readTime: '10 min read',
      tags: ['Digital Transformation', 'Fintech', 'Small Business', 'Alternative Financing']
    },
    {
      id: 5,
      title: 'Government Schemes for MSMEs: A Complete Guide',
      excerpt: 'A comprehensive overview of the latest government initiatives and schemes designed to support MSME growth and development.',
      content: `
        <p>Government support plays a vital role in fostering MSME growth and development. Various schemes and initiatives offer financial assistance, technological support, market access, and regulatory benefits to help small businesses thrive. This guide explores the key government programs available to MSMEs and how to effectively leverage them.</p>
        
        <h2>Financial Support Schemes</h2>
        
        <h3>Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)</h3>
        <p>The CGTMSE scheme provides collateral-free loans to micro and small enterprises. Under this program, eligible businesses can access loans up to ₹5 crore without providing collateral security or third-party guarantees. This significantly reduces the entry barrier for businesses seeking formal financing.</p>
        <p><strong>Eligibility:</strong> Manufacturing and service enterprises classified as micro or small under the MSMED Act.</p>
        
        <h3>Prime Minister's Employment Generation Programme (PMEGP)</h3>
        <p>PMEGP offers financial assistance to set up new micro-enterprises and generate sustainable employment opportunities. The scheme provides subsidies ranging from 15% to 35% of the project cost, depending on the category and location of the beneficiary.</p>
        <p><strong>Eligibility:</strong> Individuals above 18 years with a minimum education qualification of 8th grade for projects exceeding ₹10 lakh in the manufacturing sector and ₹5 lakh in the service sector.</p>
        
        <h3>Credit Linked Capital Subsidy Scheme (CLCSS)</h3>
        <p>CLCSS promotes technology upgradation by providing 15% capital subsidy on institutional credit up to ₹1 crore for purchasing new machinery and equipment. This helps MSMEs modernize their production facilities and improve competitiveness.</p>
        <p><strong>Eligibility:</strong> Existing MSMEs or new MSMEs that have set up their facilities with appropriate technology.</p>
        
        <h2>Technology and Skill Development Initiatives</h2>
        
        <h3>Technology Centre Systems Programme (TCSP)</h3>
        <p>TCSP establishes technology centers across the country to provide technological support, skill development, and advisory services to MSMEs. These centers offer facilities for tool design, manufacturing, testing, and calibration.</p>
        
        <h3>Skill Development and Capacity Building Programme</h3>
        <p>This program conducts entrepreneurship development programs and skill development training to enhance the capabilities of MSME entrepreneurs and their workforce. It covers various aspects of business management, technical skills, and quality improvement methodologies.</p>
        
        <h2>Market Access and Export Promotion</h2>
        
        <h3>Marketing Assistance Scheme</h3>
        <p>This scheme provides support to MSMEs for participating in domestic and international trade fairs, exhibitions, and buyer-seller meets. It also offers assistance for developing marketing material and conducting market research.</p>
        
        <h3>International Cooperation Scheme</h3>
        <p>The scheme facilitates participation in international exhibitions, trade fairs, and buyer-seller meets abroad. It provides financial assistance to cover exhibition space rent, air travel, and freight charges for display materials.</p>
        
        <h2>How to Apply for Government Schemes</h2>
        <p>Most government schemes now offer online application processes through dedicated portals. The general application procedure involves:</p>
        <ol>
          <li>Registration on the scheme's official portal</li>
          <li>Submission of required documentation (business registration certificates, financial statements, project reports, etc.)</li>
          <li>Verification by the implementing agency</li>
          <li>Approval and disbursement of benefits</li>
        </ol>
        
        <p>To maximize the benefits from government schemes, MSMEs should regularly monitor new announcements from relevant ministries, maintain accurate and updated business documentation, and consider seeking assistance from industry associations or professional consultants specialized in government liaison.</p>
        
        <p>By strategically leveraging these government initiatives, MSMEs can access affordable capital, upgrade technology, enhance skills, and expand market reach, ultimately driving sustainable growth and competitiveness.</p>
      `,
      date: 'February 15, 2025',
      author: 'Priya Mehta',
      authorRole: 'Working Capital Specialist',
      authorBio: 'Priya specializes in working capital optimization for businesses with seasonal revenue patterns.',
      authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'MSME Finance',
      image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      readTime: '12 min read',
      tags: ['Government Schemes', 'MSME', 'Financial Assistance', 'Business Development']
    },
    {
      id: 6,
      title: 'Project Financing vs. Traditional Business Loans: Which is Right for You?',
      excerpt: 'Compare the features, benefits, and drawbacks of project financing and traditional business loans to make an informed decision.',
      content: `
        <p>Selecting the right financing approach is critical for business success, particularly when undertaking significant expansion or development initiatives. Two primary options—traditional business loans and project financing—offer distinct advantages and limitations. Understanding these differences can help business leaders make informed financing decisions aligned with their specific needs and circumstances.</p>
        
        <h2>Traditional Business Loans: Overview</h2>
        <p>Traditional business loans provide general-purpose funding secured by the overall creditworthiness and assets of the borrowing company. These loans typically appear on the company's balance sheet and impact its debt-to-equity ratio and credit profile.</p>
        
        <h3>Key Characteristics of Traditional Business Loans:</h3>
        <ul>
          <li><strong>Collateral Requirements:</strong> Usually secured by company assets or personal guarantees</li>
          <li><strong>Approval Process:</strong> Based primarily on the company's credit history, financial statements, and business performance</li>
          <li><strong>Use of Funds:</strong> Generally flexible, allowing businesses to use capital for various operational needs</li>
          <li><strong>Repayment Structure:</strong> Fixed or variable payment schedules regardless of project outcomes</li>
          <li><strong>Financial Impact:</strong> Affects the company's overall debt capacity and financial ratios</li>
        </ul>
        
        <h2>Project Financing: Overview</h2>
        <p>Project financing focuses on funding a specific initiative through a special purpose vehicle (SPV) or project company. This structure isolates the project's assets, contracts, and cash flows from the parent company's balance sheet. Repayment depends primarily on the project's success rather than the sponsor's overall financial health.</p>
        
        <h3>Key Characteristics of Project Financing:</h3>
        <ul>
          <li><strong>Collateral Structure:</strong> Limited recourse, secured primarily by project assets and cash flows</li>
          <li><strong>Approval Process:</strong> Based on detailed feasibility studies, projected cash flows, and risk assessments of the specific project</li>
          <li><strong>Use of Funds:</strong> Strictly allocated to the designated project</li>
          <li><strong>Repayment Structure:</strong> Typically tied to project milestones and revenue generation</li>
          <li><strong>Financial Impact:</strong> Can be structured as off-balance-sheet financing, preserving the company's debt capacity</li>
        </ul>
        
        <h2>Comparative Analysis: Which Option Suits Your Needs?</h2>
        
        <h3>Consider Traditional Business Loans When:</h3>
        <ul>
          <li>You need flexible capital for multiple business purposes</li>
          <li>Your company has a strong credit profile and sufficient collateral</li>
          <li>The funding requirement is relatively modest compared to your balance sheet</li>
          <li>You seek a straightforward, faster approval process</li>
          <li>Your business has stable cash flows to support fixed repayment obligations</li>
        </ul>
        
        <h3>Consider Project Financing When:</h3>
        <ul>
          <li>You're undertaking a large-scale project with substantial capital requirements</li>
          <li>The project has clearly identifiable cash flows and revenue streams</li>
          <li>You wish to shield your company's balance sheet from project risks</li>
          <li>The project involves multiple stakeholders or international operations</li>
          <li>The venture would significantly impact your debt-to-equity ratios if financed conventionally</li>
        </ul>
        
        <h2>Decision Framework</h2>
        <p>To determine the most appropriate financing approach, consider these key factors:</p>
        <ol>
          <li><strong>Project Scale:</strong> Larger projects with capital requirements exceeding 30% of your company's asset base may be better suited for project financing</li>
          <li><strong>Risk Profile:</strong> Projects with higher technical, operational, or market risks might benefit from the risk isolation provided by project financing</li>
          <li><strong>Time Horizon:</strong> Long-term projects with extended development periods before revenue generation align well with project financing structures</li>
          <li><strong>Strategic Importance:</strong> Core business activities might be better supported through traditional financing, while new ventures or expansions into unfamiliar markets might warrant project financing</li>
        </ol>
        
        <p>The optimal financing strategy often involves a combination of approaches tailored to your specific business context and project characteristics. Consulting with financial advisors who specialize in both corporate finance and project financing can provide valuable insights into structuring the most advantageous arrangement for your particular circumstances.</p>
      `,
      date: 'January 30, 2025',
      author: 'Vijay Kumar',
      authorRole: 'Credit Analyst',
      authorBio: 'Vijay is a certified credit analyst with expertise in helping businesses optimize their credit profiles.',
      authorImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Project Finance',
      image: 'https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      readTime: '11 min read',
      tags: ['Project Finance', 'Business Loans', 'Capital Structure', 'Financing Options']
    }
  ];

  useEffect(() => {
    if (blogId) {
      // Find the blog post with the matching ID
      const foundPost = blogPosts.find(post => post.id === parseInt(blogId));
      setPost(foundPost || null);

      // Get related posts from the same category, excluding the current post
      if (foundPost) {
        const related = blogPosts
          .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
          .slice(0, 2);
        setRelatedPosts(related);
      }
    }
    setLoading(false);
  }, [blogId]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <p>Loading article...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
        <p className="mb-6">The article you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog" className="btn btn-primary">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container">
          <AnimatedElement>
            <Link to="/blog" className="inline-flex items-center text-gray-200 hover:text-white mb-6">
              <ArrowLeft size={16} className="mr-2" /> Back to all articles
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-200 mb-6">
              <span className="flex items-center">
                <Calendar size={14} className="mr-1" /> {post.date}
              </span>
              <span className="flex items-center">
                <User size={14} className="mr-1" /> {post.author}
              </span>
              <span>{post.readTime}</span>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AnimatedElement>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-auto max-h-96 object-cover rounded-lg mb-8"
                />
                
                <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                
                {/* Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-light text-text-light px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Share */}
                <div className="flex items-center justify-between py-6 border-t border-b border-gray-200 mb-8">
                  <div className="flex items-center gap-6">
                    <button className="flex items-center text-text-light hover:text-primary transition-colors">
                      <Share2 size={18} className="mr-2" /> Share
                    </button>
                    <button className="flex items-center text-text-light hover:text-primary transition-colors">
                      <Bookmark size={18} className="mr-2" /> Save
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-light text-text-light hover:bg-primary hover:text-white transition-colors">
                      <MessageSquare size={16} />
                    </button>
                  </div>
                </div>
                
                {/* Author */}
                <div className="bg-light p-6 rounded-lg mb-8">
                  <div className="flex items-center gap-4">
                    <img 
                      src={post.authorImage} 
                      alt={post.author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{post.author}</h3>
                      <p className="text-sm text-text-light">{post.authorRole}</p>
                    </div>
                  </div>
                  <p className="mt-4">{post.authorBio}</p>
                </div>
              </AnimatedElement>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <AnimatedElement>
                  {/* Category */}
                  <div className="card p-6 mb-8">
                    <h3 className="text-xl font-semibold mb-4">Category</h3>
                    <Link 
                      to="/blog" 
                      className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-md"
                    >
                      {post.category}
                    </Link>
                  </div>
                  
                  {/* Related Articles */}
                  <div className="card p-6">
                    <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                    {relatedPosts.length > 0 ? (
                      <div className="space-y-6">
                        {relatedPosts.map(related => (
                          <div key={related.id} className="flex gap-4">
                            <img 
                              src={related.image} 
                              alt={related.title}
                              className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                            />
                            <div>
                              <h4 className="font-medium mb-1 line-clamp-2">{related.title}</h4>
                              <Link 
                                to={`/blog/${related.id}`} 
                                className="text-sm text-primary hover:text-secondary transition-colors"
                              >
                                Read More
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-text-light">No related articles found.</p>
                    )}
                  </div>
                </AnimatedElement>
              </div>
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

export default BlogDetailPage;