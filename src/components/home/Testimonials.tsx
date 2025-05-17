import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import TestimonialCard from '../common/TestimonialCard';

// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      role: 'Owner, SR Electronics',
      content: 'Chetana Business Solutions helped me secure funding when my business needed it the most. Their quick approval process and competitive rates made all the difference. Highly recommend!',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'Founder, GreenLeaf Exports',
      content: 'I was impressed by the personalized service and attention to detail. The team helped me understand the best financing options for my export business. The process was smooth from start to finish.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      role: 'CEO, Innovate Technologies',
      content: 'As a tech startup, we needed quick capital to scale our operations. Chetana provided us with a tailored financing solution that perfectly matched our growth trajectory.',
      rating: 4
    },
    {
      name: 'Meera Joshi',
      role: 'Director, Sunshine Garments',
      content: 'Working with Chetana for our business expansion loan was a breeze. Their transparent process and expert guidance made financing simple and stress-free.',
      rating: 5
    },
    {
      name: 'Sunil Mehta',
      role: 'Partner, Global Logistics',
      content: 'The working capital solution provided by Chetana helped us manage our cash flow efficiently during a challenging period. Their support was instrumental in our recovery.',
      rating: 4
    }
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what some of our satisfied clients have to say about their experience with Chetana Business Solutions."
        />

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              }
            }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  content={testimonial.content}
                  rating={testimonial.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="flex justify-center gap-4 mt-6">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;