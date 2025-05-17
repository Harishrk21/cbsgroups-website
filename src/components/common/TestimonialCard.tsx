import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  rating,
  image,
}) => {
  return (
    <div className="card h-full p-6">
      <div className="flex items-center mb-4">
        {/* Stars based on rating */}
        <div className="flex text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              fill={i < rating ? 'currentColor' : 'none'}
              className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
            />
          ))}
        </div>
      </div>
      <p className="text-text-light mb-6 italic">"{content}"</p>
      <div className="flex items-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-3"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mr-3">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-medium text-dark">{name}</h4>
          <p className="text-sm text-text-light">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;