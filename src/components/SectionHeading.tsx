
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeading = ({ 
  title, 
  description, 
  className,
  align = 'center'
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      'mb-10',
      align === 'center' && 'text-center',
      align === 'left' && 'text-left',
      align === 'right' && 'text-right',
      className
    )}>
      <div className="inline-block">
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 tracking-wider text-hackathon-black bg-hackathon-aqua/90">
          {title.split(' ')[0]}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
