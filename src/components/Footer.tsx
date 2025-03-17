
import React from 'react';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-white border-t border-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-bold text-xl tracking-tight">
                <span className="text-hackathon-purple">Diseño</span>
                <span className="text-hackathon-black">Divino</span>
              </span>
            </div>
            <p className="text-gray-600">
              Race to Innovate - The Design Run is part of Geekayhem 2025, 
              the annual tech fest at NMIT, Bengaluru.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Timeline', 'Prizes', 'Why Participate'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-600 hover:text-hackathon-purple transition-colors custom-link inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <p className="text-gray-600">
              Nitte Meenakshi Institute of Technology,<br />
              Bengaluru, Karnataka, India
            </p>
            <p className="text-gray-600">
              For inquiries: <a href="mailto:info@disenodivino.org" className="text-hackathon-purple hover:underline">info@disenodivino.org</a>
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2025 Diseño Divino Club. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="#" className="hover:text-hackathon-purple transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-hackathon-purple transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
