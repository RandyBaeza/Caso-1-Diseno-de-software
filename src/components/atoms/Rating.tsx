import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  reviewCount?: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
}

export const Rating: React.FC<RatingProps> = ({ 
  rating, 
  reviewCount, 
  size = 'md', 
  showCount = true 
}) => {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClasses[size]} ${
              star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-muted-foreground'
            }`}
          />
        ))}
      </div>
      <span className={`font-medium ${textSizeClasses[size]}`}>
        {rating.toFixed(1)}
      </span>
      {showCount && reviewCount && (
        <span className={`text-muted-foreground ${textSizeClasses[size]}`}>
          ({reviewCount} reviews)
        </span>
      )}
    </div>
  );
};