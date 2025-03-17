
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedReveal = ({ children, className, delay = 0 }: AnimatedRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('appear');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div ref={ref} className={cn('section-transition', className)}>
      {children}
    </div>
  );
};

export default AnimatedReveal;
