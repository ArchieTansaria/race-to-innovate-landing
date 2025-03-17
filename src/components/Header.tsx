
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300',
      isScrolled ? 'glass shadow-md backdrop-blur-lg' : 'bg-transparent'
    )}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold text-xl tracking-tight">
              <span className="text-hackathon-purple">Diseño</span>
              <span className="text-hackathon-black">Divino</span>
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {['About', 'Timeline', 'Prizes', 'Why Participate'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium hover:text-hackathon-purple transition-colors custom-link"
              >
                {item}
              </a>
            ))}
          </nav>
          <div>
            <a 
              href="#register"
              className="bg-hackathon-purple hover:bg-hackathon-purple/90 text-white font-medium rounded-full px-5 py-2 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-hackathon-purple/20"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
