import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/models/Category';

interface CategoryCardProps {
  category: Category;
  onClick: (category: Category) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <Card 
      className="cursor-pointer hover:shadow-elegant transition-smooth border-2 hover:border-primary/50 group"
      onClick={() => onClick(category)}
    >
      <CardContent className="p-6 text-center">
        <div className="text-4xl mb-3 group-hover:scale-110 transition-smooth">
          {category.icon}
        </div>
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
          {category.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          {category.description}
        </p>
        <div className="flex flex-wrap gap-1 justify-center">
          {category.popularQuestions.slice(0, 2).map((question, index) => (
            <span 
              key={index}
              className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
            >
              {question}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};